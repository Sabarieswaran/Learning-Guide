---
id: custom-properties
title: CSS Custom Properties
sidebar_label: Custom Properties
description: CSS custom properties (variables) — defining, scoping, JavaScript integration, Angular theming patterns.
---

# CSS Custom Properties (Variables)

## Defining and Using

```css
:root {
  /* Design tokens */
  --color-primary: #dd0031;
  --color-surface: #ffffff;
  --spacing-base: 1rem;
  --border-radius: 8px;
  --font-size-base: 1rem;
  --transition-duration: 200ms;
}

.button {
  background: var(--color-primary);
  padding: calc(var(--spacing-base) * 0.75) var(--spacing-base);
  border-radius: var(--border-radius);
  transition: background var(--transition-duration) ease;
}

/* With fallback */
.element { color: var(--color-text, #1a1a2e); }
```

## Dark Mode with Custom Properties

```css
:root {
  --surface: #ffffff;
  --on-surface: #1a1a2e;
  --border: #e2e8f0;
}

[data-theme='dark'] {
  --surface: #0f1117;
  --on-surface: #e2e8f0;
  --border: #2d3748;
}

/* Components use tokens — automatically update */
.card {
  background: var(--surface);
  color: var(--on-surface);
  border: 1px solid var(--border);
}
```

## JavaScript Integration

```javascript
// Read
const primary = getComputedStyle(document.documentElement)
  .getPropertyValue('--color-primary').trim();

// Write
document.documentElement.style.setProperty('--color-primary', '#00bcd4');
```

## Angular Component Theming

```typescript
@Component({
  styles: [`
    :host {
      --button-bg: var(--color-primary, #dd0031);
      --button-text: white;
    }

    :host([variant='outlined']) {
      --button-bg: transparent;
      --button-text: var(--color-primary, #dd0031);
    }

    button {
      background: var(--button-bg);
      color: var(--button-text);
    }
  `],
})
export class ButtonComponent {}
```

---

## Related Topics

- **Previous:** [Responsive Design](./responsive-design)
- **Next:** [Animations](./animations)
