'use client'

import { useEffect, useState } from 'react'
import { registeredExperiments } from '@/lib/experiments/registry'

type ExperimentId = (typeof registeredExperiments)[number]['id']
type ExperimentVariants = {
  [K in ExperimentId]: Extract<
    (typeof registeredExperiments)[number],
    { id: K }
  >['options'][number]['id']
}

type UseExperimentReturn<K extends ExperimentId> = {
  variant: ExperimentVariants[K]
  isFallback: boolean
  isOverridden: boolean
}

const OVERRIDE_PREFIX = 'override_'

export function useExperiment<K extends ExperimentId>(
  id: K
): UseExperimentReturn<K> | null {
  const [value, setValue] = useState<UseExperimentReturn<K> | null>(null)

  useEffect(() => {
    const exp = registeredExperiments.find((e) => e.id === id)
    if (!exp) {
      console.warn(`[Experiment] Unknown experiment: ${id}`)
      return
    }

    const fallback = exp.options[0].id as ExperimentVariants[K]
    const localKey = `${OVERRIDE_PREFIX}${id}`

    try {
      const url = new URL(window.location.href)

      if (url.searchParams.has('exp_reset')) {
        localStorage.removeItem(localKey)
      }

      const expParam = url.searchParams.get('exp')
      const multiOverrides = parseMultiOverrides(expParam)

      const overrideFromURL = multiOverrides[id]
      const shouldPersist = url.searchParams.has('exp_persist')

      if (
        overrideFromURL &&
        exp.options.some((o) => o.id === overrideFromURL)
      ) {
        if (shouldPersist) {
          localStorage.setItem(localKey, overrideFromURL)
        }

        setValue({
          variant: overrideFromURL as ExperimentVariants[K],
          isFallback: false,
          isOverridden: true
        })
        return
      }

      const localOverride = localStorage.getItem(localKey)
      if (
        localOverride &&
        exp.options.some((o) => o.id === localOverride)
      ) {
        setValue({
          variant: localOverride as ExperimentVariants[K],
          isFallback: false,
          isOverridden: true
        })
        return
      }

      const match = document.cookie.match(/experiments=([^;]+)/)
      if (match) {
        const experiments = JSON.parse(decodeURIComponent(match[1]))
        const stored = experiments?.[id]
        if (
          typeof stored === 'string' &&
          exp.options.some((o) => o.id === stored)
        ) {
          setValue({
            variant: stored as ExperimentVariants[K],
            isFallback: false,
            isOverridden: false
          })
          return
        }
      }
    } catch (err) {
      console.warn('[Experiment] Failed to resolve experiment:', err)
    }

    setValue({
      variant: fallback,
      isFallback: true,
      isOverridden: false
    })
  }, [id])

  return value
}

function parseMultiOverrides(param: string | null): Record<string, string> {
  const result: Record<string, string> = {}

  if (!param) return result

  const pairs = param.split(',')

  for (const pair of pairs) {
    const [key, val] = pair.split(':')
    if (key && val) {
      result[key.trim()] = val.trim()
    }
  }

  return result
}
