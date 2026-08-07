---
id: specificity
title: CSS Specificity
sidebar_label: Specificity
description: Specificity calculation, the !important rule, specificity conflicts, and best practices for managing specificity.
---

# CSS Specificity

## Calculation

Specificity is a three-number value `(A, B, C)`:
- A = ID selectors (`#id`)
- B = Class, pseudo-class, attribute selectors
- C = Type selectors, pseudo-elements

```css
*             → (0,0,0)  universal
h1            → (0,0,1)  type
.card         → (0,1,0)  class
#header       → (1,0,0)  ID
h1.title      → (0,1,1)  type + class
#nav .link    → (1,1,0)  ID + class
```

Higher wins. Same specificity = last declaration wins.

## The Specificity War

```css
/* Specificity war — escalating overrides */
.button { color: blue; }         /* (0,1,0) */
div .button { color: red; }      /* (0,1,1) */
#main .button { color: green; }  /* (1,1,0) */
.button { color: purple !important; } /* wins everything */

/* Better approach — increase specificity cleanly */
.button--primary { color: blue; }
.button--secondary { color: grey; }
```

## !important

Overrides all other declarations (except other `!important` with higher specificity).

**When it's acceptable:**
- Utility classes (`.sr-only`, `.hidden`)
- Overriding third-party library styles when you can't increase specificity

**When to avoid:**
- Application CSS — it breaks the cascade and makes maintenance harder
- Any time you're tempted to use it to "fix" a specificity conflict — fix the selectors instead

## CSS Layers (Modern)

```css
/* Define layer order — lower layers lose to higher */
@layer base, components, utilities;

@layer components {
  .button { color: blue; } /* (0,1,0) in components layer */
}

@layer utilities {
  .text-red { color: red; } /* (0,1,0) in utilities — wins over components */
}
```

---

## Related Topics

- **Previous:** [Selectors](./selectors)
- **Next:** [Cascade](./cascade)
