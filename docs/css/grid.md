---
id: grid
title: CSS Grid
sidebar_label: Grid
description: CSS Grid complete guide — template columns, rows, areas, auto-placement, and responsive layouts.
---

# CSS Grid

## Introduction

CSS Grid is a two-dimensional layout system. Flexbox handles one axis; Grid handles two simultaneously. Use Grid for page-level layouts, Grid manages rows AND columns.

## Container Properties

```css
.grid {
  display: grid;
  grid-template-columns: 200px 1fr 1fr;         /* 3 columns */
  grid-template-columns: repeat(3, 1fr);         /* 3 equal columns */
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); /* responsive */
  grid-template-rows: auto 1fr auto;             /* header, content, footer */
  gap: 1.5rem;                                   /* row and column gap */
  row-gap: 1rem;
  column-gap: 1.5rem;
}
```

## Grid Template Areas

```css
.layout {
  display: grid;
  grid-template-areas:
    "header header header"
    "sidebar main    main"
    "footer footer footer";
  grid-template-columns: 260px 1fr 1fr;
  grid-template-rows: 64px 1fr 60px;
  min-height: 100vh;
}

.header  { grid-area: header; }
.sidebar { grid-area: sidebar; }
.main    { grid-area: main; }
.footer  { grid-area: footer; }
```

## Item Placement

```css
.item {
  grid-column: 1 / 3;           /* span from col 1 to col 3 */
  grid-column: 1 / -1;          /* span all columns */
  grid-column: span 2;          /* span 2 columns */
  grid-row: 2 / 4;              /* rows 2 and 3 */
}
```

## Responsive Card Grid

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
}
```

---

## Related Topics

- **Previous:** [Flexbox](./flexbox)
- **Next:** [Positioning](./positioning)
