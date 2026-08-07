---
id: performance
title: CSS Performance
sidebar_label: Performance
description: CSS performance — selector efficiency, paint and layout triggers, critical CSS, and reducing render-blocking.
---

# CSS Performance

## What Triggers Layout, Paint, or Composite

| Change | Cost |
|---|---|
| `width`, `height`, `top`, `left`, `margin`, `padding` | Layout → Paint → Composite |
| `background`, `color`, `box-shadow` | Paint → Composite |
| `transform`, `opacity` | Composite only (cheapest) |

Design animations to only use `transform` and `opacity`.

## Reducing Paint Areas

```css
/* Use will-change to hint compositor for elements that animate */
.animated-element {
  will-change: transform; /* promote to its own compositor layer */
}

/* Remove will-change when animation is done */
```

`will-change` uses more GPU memory — only use on elements that actually animate.

## Critical CSS

For fast initial paint, inline critical CSS (above-the-fold styles) in `<head>` and load the rest asynchronously:

```html
<style>/* critical CSS */</style>
<link rel="preload" href="styles.css" as="style" />
<link rel="stylesheet" href="styles.css" media="print" onload="this.media='all'" />
```

Angular's build generates CSS files that are automatically linked. For optimal performance, configure SSR to inline critical styles.

## Selector Performance

Modern browsers optimize selector matching — this matters far less than it used to. Focus on:
1. Bundle size (fewer CSS bytes = faster parse)
2. Layout thrashing in JavaScript (not CSS selectors)
3. Paint area reduction

---

## Related Topics

- **Previous:** [Transforms](./transforms)
- **Related:** [Performance Introduction](/docs/performance/introduction)
