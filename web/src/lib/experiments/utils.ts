import { NextRequest, NextResponse } from 'next/server'
import { registeredExperiments } from '@/lib/experiments/registry'

export type ExperimentVariant = string

export type Experiment = {
  id: string
  options: { id: ExperimentVariant; weight: number }[]
}

type ExperimentsRecord = Record<string, ExperimentVariant>

export function createNewExperiment(
  id: string,
  options: { id: string; weight: number }[],
  existing: ExperimentsRecord = {}
): { updated: boolean; experiments: ExperimentsRecord } {
  const existingValue = existing[id]

  if (existingValue && options.some(o => o.id === existingValue)) {
    return { updated: false, experiments: existing }
  }

  const rand = Math.random()
  let acc = 0

  for (const option of options) {
    acc += option.weight
    if (rand < acc) {
      return {
        updated: true,
        experiments: { ...existing, [id]: option.id }
      }
    }
  }

  return {
    updated: true,
    experiments: { ...existing, [id]: options[0].id }
  }
}

export function applyExperimentsToRequest(
    request: NextRequest,
    response: NextResponse
  ): NextResponse {
    const cookie = request.cookies.get('experiments')
    let experiments: Record<string, string> = {}
  
    try {
      if (cookie?.value) {
        experiments = JSON.parse(cookie.value)
      }
    } catch (err) {
      // Silently handle parse error
    }
  
    let updated = false
  
    for (const exp of registeredExperiments) {
      const result = createNewExperiment(exp.id, exp.options, experiments)
  
      if (result.updated) {
        experiments = result.experiments
        updated = true
      }
    }
  
    if (updated) {
      const cookieValue = JSON.stringify(experiments)
  
      response.cookies.set('experiments', cookieValue, {
        path: '/',
        maxAge: 60 * 60 * 24 * 30
      })
    }
  
    return response
  }
  
  