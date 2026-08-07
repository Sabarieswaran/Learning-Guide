---
id: cascade
title: CSS Cascade
sidebar_label: Cascade
description: How CSS resolves conflicting declarations — origin, importance, specificity, order — and modern cascade layers.
---

# CSS Cascade

## Cascade Priority (Highest to Lowest)

1. Transition declarations
2. `!important` user-agent styles
3. `!important` user styles
4. `!important` author styles
5. Animation declarations
6. Normal author styles
7. Normal user styles
8. Normal user-agent (browser default) styles

## Within Author Styles

1. Cascade layers (higher layer wins)
2. Specificity (more specific wins)
3. Order (later wins)

## Inheritance

Some properties inherit from parent (like `color`, `font-size`). Others don't (like `border`, `padding`).

```css
/* Force inheritance */
.child { color: inherit; }

/* Reset to initial value */
.child { color: initial; }

/* Reset to browser default */
.child { color: revert; }

/* Remove styling from parent or cascade */
.child { color: unset; }
```

## Angular ViewEncapsulation and the Cascade

Angular's emulated encapsulation adds unique attribute selectors to component styles:

```css
/* Your CSS */
.card { background: white; }

/* Angular's output */
.card[_ngcontent-abc-c123] { background: white; }
```

This increases specificity by one class — can cause issues when trying to override from parent components. Solutions: use `::ng-deep` (deprecated), use `ViewEncapsulation.None`, or restructure CSS.

---

## Related Topics

- **Previous:** [Specificity](./specificity)
- **Next:** [Typography](./typography)
