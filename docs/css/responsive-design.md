---
id: responsive-design
title: CSS Responsive Design
sidebar_label: Responsive Design
description: Media queries, mobile-first approach, container queries, fluid typography, and viewport units.
---

# CSS Responsive Design

## Mobile-First Media Queries

```css
/* Base — mobile styles */
.container { padding: 1rem; }
.grid { display: grid; grid-template-columns: 1fr; gap: 1rem; }

/* Tablet — min-width means "and up" */
@media (min-width: 768px) {
  .grid { grid-template-columns: repeat(2, 1fr); }
}

/* Desktop */
@media (min-width: 1024px) {
  .container { max-width: 1200px; margin: 0 auto; padding: 0 2rem; }
  .grid { grid-template-columns: repeat(3, 1fr); }
}
```

## Breakpoints

```css
:root {
  --bp-sm: 480px;
  --bp-md: 768px;
  --bp-lg: 1024px;
  --bp-xl: 1280px;
}
```

## Container Queries (Modern)

```css
/* Container query — style based on component size, not viewport */
.card-container {
  container-type: inline-size;
  container-name: card;
}

@container card (min-width: 400px) {
  .card { flex-direction: row; }
}
```

## Fluid Typography

```css
/* Font size scales with viewport */
h1 { font-size: clamp(1.5rem, 4vw + 1rem, 3rem); }
p { font-size: clamp(1rem, 0.5vw + 0.9rem, 1.2rem); }
```

## Viewport Units

```css
/* 100svh = small viewport height (excludes mobile browser chrome) */
.hero {
  min-height: 100svh; /* better than 100vh on mobile */
}

.sticky-header {
  width: 100vw;         /* full viewport width */
  min-height: 64px;
}
```

---

## Related Topics

- **Previous:** [Positioning](./positioning)
- **Next:** [Custom Properties](./custom-properties)
