---
id: best-practices
title: CSS Best Practices
sidebar_label: Best Practices
description: CSS naming conventions, architecture, Angular-specific patterns, and maintainability guidelines.
---

# CSS Best Practices

## Naming Conventions

Use BEM (Block, Element, Modifier) for clear, maintainable CSS:

```css
/* Block */
.card { }

/* Element — double underscore */
.card__title { }
.card__body { }
.card__footer { }

/* Modifier — double dash */
.card--featured { }
.card--compact { }
.card__title--large { }
```

## Design Tokens

Define all design decisions as CSS custom properties:

```css
:root {
  /* Colors */
  --color-primary: #dd0031;
  --color-secondary: #1976d2;
  --color-surface: #ffffff;
  --color-text: #1a1a2e;

  /* Spacing scale */
  --spacing-1: 0.25rem;
  --spacing-2: 0.5rem;
  --spacing-4: 1rem;
  --spacing-8: 2rem;

  /* Typography */
  --font-size-sm: 0.875rem;
  --font-size-base: 1rem;
  --font-size-lg: 1.25rem;

  /* Shadows */
  --shadow-sm: 0 1px 3px rgba(0,0,0,0.08);
  --shadow-md: 0 4px 12px rgba(0,0,0,0.1);
}
```

## Angular Component Styles

- Keep component styles small and focused
- Use CSS custom properties for values that vary across themes
- Avoid `::ng-deep` — it's deprecated. Prefer wrapping with a specific class
- Use `host` and `host-context` pseudo-selectors for component-level theming

## Avoid

- Global `!important` in component styles
- Deep nesting (max 3 levels)
- Selector specificity wars
- `position: absolute` without a `position: relative` parent
- Sizing with `px` for font sizes (use `rem`)

---

## Related Topics

- **Related:** [CSS Introduction](./introduction)
- **Related:** [Angular Components](/docs/angular/components)
---

## Related Topics

- **Previous:** [Performance](./performance)
- **Next:** [Interview Questions](./interview-questions)
- **Related:** [CSS Introduction](./introduction)