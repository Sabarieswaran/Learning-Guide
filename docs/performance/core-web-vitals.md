---
id: core-web-vitals
title: Core Web Vitals
sidebar_label: Core Web Vitals
description: LCP, INP, CLS — measurement, causes, and Angular-specific improvements for each metric.
---

# Core Web Vitals

## LCP — Largest Contentful Paint

Measures loading performance. Time until the largest text or image element is rendered.

**Target:** ≤ 2.5s

**Common causes:**
- Large image not optimized
- Render-blocking CSS/JavaScript
- Slow server response (TTFB)
- No server-side rendering (Angular SSR)

**Angular fixes:**
```typescript
// 1. Use NgOptimizedImage with priority for above-fold images
<img ngSrc="/hero.jpg" priority width="1200" height="600" alt="..." />

// 2. Enable Angular SSR for initial HTML
// 3. Lazy load below-fold routes
// 4. Preload critical fonts
```

---

## INP — Interaction to Next Paint

Measures responsiveness. Time from user interaction to next visual update.

**Target:** ≤ 200ms

**Common causes:**
- Long JavaScript tasks on main thread
- Slow event handlers
- Unnecessary change detection cycles

**Angular fixes:**
```typescript
// 1. Use signals — targeted change detection
count = signal(0); // updates only components reading this signal

// 2. Use OnPush everywhere
@Component({ changeDetection: ChangeDetectionStrategy.OnPush })

// 3. Move heavy work off main thread
const worker = new Worker('./heavy.worker.ts');
worker.postMessage(data);

// 4. Virtualize long lists
<cdk-virtual-scroll-viewport itemSize="50">
```

---

## CLS — Cumulative Layout Shift

Measures visual stability. Sum of unexpected layout shifts.

**Target:** ≤ 0.1

**Common causes:**
- Images without `width`/`height` attributes
- Dynamically injected content above existing content
- Web fonts causing text reflow (FOUT)

**Angular fixes:**
```html
<!-- Always specify dimensions -->
<img ngSrc="/hero.jpg" width="800" height="400" alt="..." />

<!-- Reserve space for dynamic content -->
<div style="min-height: 200px">
  @if (content(); as c) { {{ c }} }
</div>

<!-- Use font-display: optional for fonts -->
@font-face { font-display: optional; }
```

---

## Measuring

```bash
# Lighthouse CLI
npx lighthouse https://mysite.com --output=html

# Chrome DevTools
# Performance panel → record → Web Vitals checkbox

# Field data
# Google Search Console → Core Web Vitals report
```

---

## Related Topics

- **Previous:** [Performance Introduction](./introduction)
- **Next:** [Network Optimization](./network-optimization)
