---
id: selectors
title: CSS Selectors
sidebar_label: Selectors
description: CSS selector types, combinators, pseudo-classes, pseudo-elements, and specificity calculation.
---

# CSS Selectors

## Selector Types

```css
/* Universal */
* { box-sizing: border-box; }

/* Type */
h1 { font-size: 2rem; }

/* Class */
.card { border-radius: 8px; }

/* ID */
#main-nav { position: sticky; }

/* Attribute */
[type="email"] { }
[href^="https"] { }    /* starts with */
[href$=".pdf"] { }     /* ends with */
[class*="btn"] { }     /* contains */

/* Combinators */
.parent .child { }     /* descendant (any depth) */
.parent > .child { }   /* direct child only */
.a + .b { }            /* adjacent sibling */
.a ~ .b { }            /* general sibling */
```

## Pseudo-classes

```css
:hover          /* mouse over */
:focus          /* keyboard/click focus */
:focus-visible  /* keyboard focus only */
:active         /* being clicked */
:visited        /* visited link */
:checked        /* checkbox/radio checked */
:disabled       /* disabled form element */
:first-child    /* first child of parent */
:last-child     /* last child of parent */
:nth-child(2n)  /* even children */
:nth-child(odd) /* odd children */
:not(.active)   /* negation */
:is(h1, h2, h3) /* matches any */
:where(h1, h2)  /* like :is, but zero specificity */
:has(> img)     /* has a child matching selector */
```

## Pseudo-elements

```css
::before        /* before element content */
::after         /* after element content */
::placeholder   /* input placeholder */
::selection     /* text selection */
::marker        /* list item marker */
::first-line    /* first line of text */
```

---

## Related Topics

- **Previous:** [Box Model](./box-model)
- **Next:** [Specificity](./specificity)
