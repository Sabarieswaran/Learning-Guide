---
id: typography
title: CSS Typography
sidebar_label: Typography
description: Web fonts, font-size units, line-height, responsive typography with clamp(), and performance.
---

# CSS Typography

## Font Loading

```css
/* Variable font — one file, many weights */
@font-face {
  font-family: 'Inter';
  src: url('/fonts/inter.woff2') format('woff2');
  font-weight: 100 900;
  font-style: normal;
  font-display: swap; /* show fallback during load, swap when ready */
}

/* Preload in HTML for critical fonts */
/* <link rel="preload" href="/fonts/inter.woff2" as="font" crossorigin> */
```

## Font Size Units

```css
/* rem — relative to root font size (16px default) */
body { font-size: 1rem; }     /* 16px */
h1 { font-size: 2rem; }       /* 32px */

/* em — relative to element's font size */
.card { font-size: 0.875em; } /* 87.5% of parent */

/* Responsive with clamp() */
h1 {
  font-size: clamp(1.5rem, 4vw, 3rem);
  /* min: 24px, scales with viewport, max: 48px */
}
```

## Readable Typography

```css
:root {
  --font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono: 'JetBrains Mono', 'Fira Code', Consolas, monospace;
}

body {
  font-family: var(--font-sans);
  font-size: 1rem;
  line-height: 1.6;        /* 1.5–1.8 for body text */
  color: #1a1a2e;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
}

/* Optimal line length for readability */
article p {
  max-width: 68ch; /* roughly 65-75 characters */
}
```

---

## Related Topics

- **Previous:** [Cascade](./cascade)
- **Next:** [Colors](./colors)
