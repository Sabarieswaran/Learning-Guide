---
id: web-components
title: HTML Web Components
sidebar_label: Web Components
description: Custom Elements, Shadow DOM, HTML Templates, and how Angular's ViewEncapsulation.ShadowDom relates.
---

# HTML Web Components

## Three Pillars

1. **Custom Elements** — define new HTML tags with custom behavior
2. **Shadow DOM** — encapsulated DOM and styles
3. **HTML Templates** — reusable markup fragments

## Custom Element

```javascript
class ToggleButton extends HTMLElement {
  static observedAttributes = ['pressed'];

  connectedCallback() {
    this.setAttribute('role', 'button');
    this.setAttribute('tabindex', '0');
    this.render();
  }

  attributeChangedCallback() { this.render(); }

  render() {
    const pressed = this.hasAttribute('pressed');
    this.innerHTML = `<span>${pressed ? '✓' : '○'}</span>`;
  }
}

customElements.define('toggle-button', ToggleButton);
```

```html
<toggle-button pressed>Enabled</toggle-button>
```

## Shadow DOM

```javascript
const shadow = element.attachShadow({ mode: 'open' });
shadow.innerHTML = `
  <style>
    /* Styles scoped to this shadow root only */
    :host { display: block; }
    button { background: var(--primary, #dd0031); }
  </style>
  <button><slot></slot></button>
`;
```

## Angular and Web Components

Angular can both **produce** and **consume** web components:

```typescript
// Produce — wrap Angular component as web component
import { createCustomElement } from '@angular/elements';
const el = createCustomElement(MyComponent, { injector });
customElements.define('my-element', el);

// Consume — use web components in Angular (add CUSTOM_ELEMENTS_SCHEMA)
@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
```

Angular's `ViewEncapsulation.ShadowDom` uses native Shadow DOM for component style isolation.

---

## Related Topics

- **Previous:** [Canvas](./canvas)
- **Next:** [HTML APIs](./apis)
