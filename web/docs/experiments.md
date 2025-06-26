# Experiments System

A simple system for running experiments

## Usage

The hook returns `null` initially while resolving the experiment. To prevent hydration errors (where server and client render different content), you must handle this using conditional rendering:

```typescript
const exp = useExperiment('experiment_id')
if (!exp) return null // or loading state

const { variant, isFallback, isOverridden } = exp
```

The hook returns:
- `variant`: The current variant being shown
- `isFallback`: `true` if no variant was found in URL, localStorage, or cookies, and we're using the first option as default
- `isOverridden`: `true` if the variant was overridden via URL or localStorage

## Creating New Experiments

1. Add to `web/src/lib/experiments/registry.ts`:
```typescript
{
  id: 'your_experiment_id',
  options: [
    { id: 'variant_a', weight: 0.5 },
    { id: 'variant_b', weight: 0.5 }
  ]
}
```

2. Use in your component:
```typescript
const exp = useExperiment('your_experiment_id')
if (!exp) return null

const { variant } = exp

return (
  <div>
    {variant === 'variant_a' && <VariantA />}
    {variant === 'variant_b' && <VariantB />}
  </div>
)
```

## Analytics

Track experiment results by sending GA4 events. This example shows how to calculate which percentage of users who see an experiment end up clicking:

```typescript
// Track views (once per session)
sendGAEvent('event', 'experiment_view', {
  experiment_id: 'your_experiment_id',
  variant: exp.variant,
  event_category: 'experiments'
});

// Track clicks (with theme context)
sendGAEvent('event', 'experiment_click', {
  experiment_id: 'your_experiment_id',
  variant: exp.variant,
  theme: theme || 'system',
  event_category: 'experiments'
});
```

## Testing & Overriding

### URL Parameters

- `?exp=experiment_id:variant_id` - Override a specific experiment variant
- `?exp=exp1:var1,exp2:var2` - Override multiple experiment variants
- `?exp_persist` - Persist URL overrides to localStorage
- `?exp_reset` - Reset all experiment overrides

Examples:
```
https://example.com?exp=my_experiment:variant_a
https://example.com?exp=exp1:var1,exp2:var2&exp_persist
https://example.com?exp_reset
```

## How It Works

1. URL Override (with optional persistence)
2. Local Storage Override
3. Cookie-based Assignment
4. Fallback to Default Variant (first option in the experiment's options)

## Best Practices

1. Weights should sum to 1.0
2. Always provide a fallback variant
3. Use meaningful experiment and variant IDs
4. Clean up experiments after they're no longer needed 