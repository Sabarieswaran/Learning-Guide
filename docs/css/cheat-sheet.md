---
id: cheat-sheet
title: CSS Cheat Sheet
sidebar_label: Cheat Sheet
description: CSS quick reference — selectors, box model, flexbox, grid, animations, and custom properties.
---

# CSS Cheat Sheet

## Selectors

```css
*              /* universal */
h1             /* type */
.class         /* class */
#id            /* ID */
[attr]         /* attribute */
a:hover        /* pseudo-class */
p::first-line  /* pseudo-element */
.a + .b        /* adjacent sibling */
.a ~ .b        /* general sibling */
.a > .b        /* direct child */
.a .b          /* descendant */
:is(h1, h2, h3)
:not(.active)
:has(> img)
```

## Box Model

```css
box-sizing: border-box;    /* width includes padding + border */
margin: top right bottom left;
padding: top right bottom left;
border: width style color;
border-radius: 8px;
outline: 2px solid blue;   /* outside border, no layout */
```

## Display and Visibility

```css
display: block | inline | inline-block | flex | grid | none
visibility: hidden    /* hidden but takes space */
opacity: 0            /* invisible but interactive */
```

## Flexbox

```css
display: flex;
flex-direction: row | column;
flex-wrap: nowrap | wrap;
justify-content: flex-start | center | flex-end | space-between | space-around;
align-items: stretch | center | flex-start | flex-end;
gap: 1rem;

/* Items */
flex: 1;           /* grow and shrink */
flex: none;        /* rigid */
align-self: center;
```

## Grid

```css
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
grid-template-areas: "header" "main" "footer";
gap: 1rem;

/* Items */
grid-column: 1 / -1;    /* span all */
grid-area: header;
```

## Custom Properties

```css
:root { --primary: #dd0031; }
color: var(--primary);
color: var(--primary, #dd0031);  /* with fallback */
```

## Media Queries

```css
@media (min-width: 768px) { }  /* tablet and up */
@media (max-width: 767px) { }  /* mobile only */
@media (prefers-color-scheme: dark) { }
@media (prefers-reduced-motion: reduce) { }
```

## Animations

```css
transition: property duration easing delay;
transform: translate() rotate() scale();
animation: name duration easing delay count direction fill-mode;

/* Only these trigger compositor layer (60fps) */
transform: translate/scale/rotate;
opacity: 0-1;
```

## Units

```css
/* Relative */
rem  → root font size (1rem = 16px default)
em   → parent font size
%    → parent dimension
vw   → viewport width
vh   → viewport height
svh  → small viewport height (mobile safe)
ch   → width of '0' character

/* Absolute */
px   → pixels
```


---

## Related Topics

- **Previous:** [Interview Questions](./interview-questions)
- **Related:** [CSS Introduction](./introduction)
- **Related:** [HTML Cheat Sheet](/docs/html/cheat-sheet)
