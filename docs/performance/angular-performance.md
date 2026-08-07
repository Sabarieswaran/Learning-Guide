---
id: angular-performance
title: Angular Performance
sidebar_label: Angular Performance
description: Change detection optimization, signals, track, NgOptimizedImage, defer, SSR, and bundle analysis.
---

# Angular Performance

## Performance Checklist

```
Bundle:
  ☐ All routes are lazy loaded (loadComponent / loadChildren)
  ☐ Non-critical components use @defer
  ☐ No large unused libraries in bundle
  ☐ Angular Material imports are tree-shakable

Change Detection:
  ☐ All components use OnPush strategy
  ☐ All @for loops have track expression
  ☐ Signals used for reactive state
  ☐ No unnecessary markForCheck() calls

Rendering:
  ☐ Long lists use CdkVirtualScrollViewport
  ☐ No layout thrashing in event handlers
  ☐ Images use NgOptimizedImage with priority on above-fold

Network:
  ☐ SSR enabled for public pages (LCP improvement)
  ☐ Critical fonts are preloaded
  ☐ Images are WebP/AVIF with proper sizing
```

## OnPush + Signals = Minimal Re-renders

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>{{ count() }}</p>`,  // only rerenders when count changes
})
export class CounterComponent {
  count = signal(0);  // signal drives targeted updates
}
```

## Profiling Angular with Angular DevTools

Install the **Angular DevTools** Chrome extension:
- Component tree visualization
- Change detection profiler — shows which components triggered CD and why
- Directive instance inspection

---

## Related Topics

- **Previous:** [Rendering Performance](./rendering-performance)
- **Next:** [Image Optimization](./image-optimization)
- **Related:** [Angular Change Detection](/docs/angular/change-detection)
