---
id: dom-manipulation
title: JavaScript DOM Manipulation
sidebar_label: DOM Manipulation
description: Querying the DOM, creating and modifying elements, event handling, and Angular's approach to DOM abstraction.
---

# JavaScript DOM Manipulation

## Querying the DOM

```javascript
document.getElementById('app')
document.querySelector('.card')         // first match
document.querySelectorAll('.card')      // NodeList
document.querySelector('[data-id="3"]') // attribute selector
```

## Modifying Elements

```javascript
const el = document.querySelector('.title');
el.textContent = 'New Title';  // text only — XSS safe
el.innerHTML = '<b>Bold</b>';  // parsed HTML — XSS risk!

el.setAttribute('aria-label', 'Close');
el.classList.add('active');
el.classList.remove('inactive');
el.classList.toggle('open');
el.style.display = 'none';
```

## Creating Elements

```javascript
const card = document.createElement('div');
card.classList.add('card');
card.textContent = 'Hello World';
document.body.appendChild(card);
```

## Event Handling

```javascript
button.addEventListener('click', handler);
button.removeEventListener('click', handler); // must use same reference
button.addEventListener('keydown', e => {
  if (e.key === 'Enter') submit();
}, { once: true }); // auto-remove after first call
```

## Angular's Approach

Angular abstracts direct DOM manipulation via `Renderer2` for SSR compatibility:

```typescript
@Component({ standalone: true })
export class HighlightDirective {
  private readonly el = inject(ElementRef);
  private readonly renderer = inject(Renderer2);

  highlight(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background', color);
  }
}
```

Direct `this.el.nativeElement.style` works in browser but breaks in server-side rendering. Always use `Renderer2` in directives.

---

## Related Topics

- **Related:** [Angular Directives](/docs/angular/directives)
- **Related:** [Browser Rendering Pipeline](/docs/browser/rendering-pipeline)
