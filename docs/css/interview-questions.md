---
id: interview-questions
title: CSS Interview Questions
sidebar_label: Interview Questions
description: 20+ CSS interview questions on specificity, BEM, flexbox vs grid, animations, and performance.
---

# CSS Interview Questions

## Easy

**Q: What is the CSS box model?**

Every element is a rectangular box with four layers: content (the actual text/image), padding (space inside the border), border (the line around padding+content), and margin (space outside the border). `box-sizing: border-box` makes `width` include padding and border, which is usually what you want.

**Q: What is the difference between `display: none` and `visibility: hidden`?**

`display: none` removes the element from the layout — it takes no space. `visibility: hidden` makes the element invisible but it still occupies space in the layout.

**Q: What is a CSS preprocessor?**

A tool that adds features to CSS (variables, nesting, mixins, functions) and compiles to standard CSS. Examples: Sass/SCSS, Less, Stylus. Angular supports Sass out of the box. Modern CSS has native custom properties, nesting, and `@layer`, reducing the need for preprocessors.

---

## Medium

**Q: Explain the difference between Flexbox and Grid.**

Flexbox is one-dimensional (either row OR column). Grid is two-dimensional (rows AND columns simultaneously). Use Flexbox for components (navigation bars, card rows, button groups). Use Grid for page layouts and two-dimensional UI (dashboards, image galleries, form layouts).

**Q: What is a stacking context and how is it created?**

A stacking context is a layer in the 3D space of the browser. Elements inside a stacking context compete for z-index position only within that context. Created by: `position + z-index` (non-auto), `opacity < 1`, `transform`, `filter`, `will-change`, `isolation: isolate`, and others.

**Q: How does Angular's ViewEncapsulation affect CSS?**

`Emulated` (default) adds a unique attribute to elements and rewrites selectors to scope them. `ShadowDom` uses native Shadow DOM. `None` applies styles globally. Emulated is efficient but can cause issues when you need to style slotted content — use CSS custom properties to pass values through the boundary.

---

## Hard

**Q: Explain CSS Cascade Layers (`@layer`).**

`@layer` groups CSS declarations into named layers. Declarations in later-defined layers override earlier layers (regardless of specificity). This enables predictable style override patterns: `@layer base, components, utilities` — utility classes always win over component styles, which always win over base styles, without `!important` or specificity wars.

**Q: What is CSS containment and when would you use it?**

CSS `contain` property tells the browser that an element's subtree is independent from the rest of the page. Values: `layout` (no layout impact outside), `paint` (no paint outside bounds), `size` (size not dependent on children), `style` (counter scoping). Combined as `contain: layout paint` for virtual scrolling and card grids — the browser can skip checking if changes in a contained element affect the rest of the page.

---

## Cheat Sheet

```
Specificity:   (ID, Class/Pseudo-class, Type)
Box model:     content → padding → border → margin
Positioning:   static | relative | absolute | fixed | sticky
Flexbox axis:  justify-content (main), align-items (cross)
Grid:          grid-template-columns, grid-template-areas, gap
Units:         rem (root), em (parent), vw/vh (viewport), % (parent)
Pseudo-class:  :hover :focus :focus-visible :nth-child :not :is :has
Performance:   Only animate transform + opacity
```
---

## Related Topics

- **Previous:** [Best Practices](./best-practices)
- **Next:** [Cheat Sheet](./cheat-sheet)