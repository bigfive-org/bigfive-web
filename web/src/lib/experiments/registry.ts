import type { Experiment } from '@/lib/experiments/utils'

export const registeredExperiments: Experiment[] = [
  {
    id: 'cta_variant',
    options: [
      { id: 'variant1', weight: 0.170 },
      { id: 'variant2', weight: 0.166 },
      { id: 'variant3', weight: 0.166 },
      { id: 'variant4', weight: 0.166 },
      { id: 'variant5', weight: 0.166 },
      { id: 'variant6', weight: 0.166 }
    ]
  },
]
