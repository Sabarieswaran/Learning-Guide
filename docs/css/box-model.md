---
id: box-model
title: CSS Box Model
sidebar_label: Box Model
description: The CSS box model — content, padding, border, margin, box-sizing, and how it affects layout.
---

# CSS Box Model

## The Four Layers

```
┌─────────────────────────────────────────┐  ← margin (transparent)
│  ┌───────────────────────────────────┐  │
│  │           border                  │  │
│  │  ┌─────────────────────────────┐  │  │
│  │  │         padding             │  │  │
│  │  │  ┌───────────────────────┐  │  │  │
│  │  │  │       content         │  │  │  │
│  │  │  └───────────────────────┘  │  │  │
│  │  └─────────────────────────────┘  │  │
│  └───────────────────────────────────┘  │
└─────────────────────────────────────────┘
```

## box-sizing

```css
/* Default — width = content only */
.default {
  box-sizing: content-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Total rendered width: 200 + 40 + 4 = 244px */
}

/* Preferred — width = content + padding + border */
.better {
  box-sizing: border-box;
  width: 200px;
  padding: 20px;
  border: 2px solid;
  /* Total rendered width: 200px */
}

/* Apply to everything (best practice) */
*, *::before, *::after {
  box-sizing: border-box;
}
```

## Margin Collapsing

Adjacent block element margins collapse — only the larger margin applies:

```css
.element-a { margin-bottom: 20px; }
.element-b { margin-top: 30px; }
/* Gap between them is 30px, not 50px */
```

Does NOT collapse when using flexbox or grid containers.

## Interview Q: When does margin collapse occur?

Between adjacent block siblings (vertical only), between parent and first/last child (when no border/padding separates them), and on empty blocks. Margin collapse does not occur in flex/grid containers, floated elements, or absolutely positioned elements.

---

## Related Topics

- **Previous:** [CSS Introduction](./introduction)
- **Next:** [Selectors](./selectors)
