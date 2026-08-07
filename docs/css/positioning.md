---
id: positioning
title: CSS Positioning
sidebar_label: Positioning
description: static, relative, absolute, fixed, sticky positioning, z-index, and stacking contexts.
---

# CSS Positioning

## The Five Values

```css
/* static — default, in normal flow */
.normal { position: static; }

/* relative — in flow, offset from normal position */
.offset {
  position: relative;
  top: 10px;
  left: 20px;
}

/* absolute — removed from flow, positioned relative to nearest non-static ancestor */
.popup {
  position: absolute;
  top: 0;
  right: 0;
}

/* fixed — removed from flow, positioned relative to viewport */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

/* sticky — hybrid: relative in flow, fixed when it reaches threshold */
.table-header {
  position: sticky;
  top: 64px; /* sticks when scrolled to 64px from top */
}
```

## Containing Block

`absolute` and `fixed` elements position relative to their containing block:
- `absolute` → nearest ancestor with `position` other than `static`
- `fixed` → the viewport (or nearest `transform`/`filter` ancestor)

```css
/* Create a positioning context */
.card {
  position: relative; /* makes this the containing block */
}

.card__badge {
  position: absolute;
  top: -8px;
  right: -8px;
}
```

## z-index and Stacking Contexts

```css
.elevated { z-index: 10; } /* only works on non-static elements */
```

A stacking context is created by `position + z-index`, `opacity < 1`, `transform`, `filter`, `isolation: isolate`, and more. Child z-indices are relative to their parent stacking context.

---

## Related Topics

- **Previous:** [Grid](./grid)
- **Next:** [Responsive Design](./responsive-design)
