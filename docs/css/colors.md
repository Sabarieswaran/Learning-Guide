---
id: colors
title: CSS Colors
sidebar_label: Colors
description: CSS color formats, opacity, color functions, dark mode with custom properties, and WCAG contrast.
---

# CSS Colors

## Color Formats

```css
/* Keywords */
color: red; color: transparent;

/* Hex */
color: #dd0031;         /* opaque */
color: #dd003180;       /* with alpha */

/* RGB */
color: rgb(221, 0, 49);
color: rgba(221, 0, 49, 0.5);
color: rgb(221 0 49 / 50%);  /* modern syntax */

/* HSL — intuitive for design */
color: hsl(350, 100%, 43%);   /* hue, saturation, lightness */
color: hsl(350 100% 43% / 50%);

/* oklch — perceptually uniform, best for design systems */
color: oklch(50% 0.2 350);
```

## Semantic Color Tokens

```css
:root {
  /* Angular-inspired palette */
  --color-primary: #dd0031;
  --color-primary-dark: #c50029;
  --color-primary-light: #ff4d6a;
  --color-surface: #ffffff;
  --color-on-surface: #1a1a2e;
  --color-border: #e2e8f0;
}

[data-theme='dark'] {
  --color-primary: #ff4d6a;
  --color-surface: #0f1117;
  --color-on-surface: #e2e8f0;
  --color-border: #2d3748;
}
```

## WCAG Contrast Requirements

- Normal text: 4.5:1 contrast ratio
- Large text (18px bold / 24px): 3:1
- UI components (icons, borders): 3:1

Test with: [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

---

## Related Topics

- **Previous:** [Typography](./typography)
- **Next:** [Flexbox](./flexbox)
