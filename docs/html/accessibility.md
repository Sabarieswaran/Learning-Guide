---
id: accessibility
title: HTML Accessibility
sidebar_label: Accessibility
description: ARIA roles, keyboard navigation, focus management, screen readers, and Angular CDK a11y.
---

# HTML Accessibility

## Core ARIA Usage

```html
<!-- Use semantic HTML first — only add ARIA when needed -->

<!-- Landmark roles -->
<nav aria-label="Main navigation">
<main aria-labelledby="page-heading">
<aside aria-label="Sidebar">

<!-- Interactive elements -->
<button aria-expanded="false" aria-controls="menu-id">Menu</button>
<div id="menu-id" aria-hidden="true" role="menu">...</div>

<!-- Status updates -->
<div role="alert" aria-live="assertive">Form submission failed.</div>
<div role="status" aria-live="polite">Saving...</div>

<!-- Images -->
<img alt="Description of image content" />
<img alt="" />  <!-- decorative — empty alt -->

<!-- Forms -->
<label for="email">Email</label>
<input id="email" aria-describedby="email-hint" />
<p id="email-hint">Enter your work email.</p>

<!-- Loading state -->
<button aria-busy="true" disabled>Loading...</button>
```

## Focus Management

```html
<!-- Skip link for keyboard navigation -->
<a class="skip-link" href="#main">Skip to main content</a>

<!-- Dialog focus trap -->
<dialog open aria-modal="true" aria-labelledby="dialog-title">
  <h2 id="dialog-title">Confirm Delete</h2>
  <!-- CDK FocusTrap handles tab containment -->
</dialog>

<!-- Visible focus styles — never just outline: none -->
<style>
  :focus-visible {
    outline: 2px solid #005fcc;
    outline-offset: 2px;
  }
</style>
```

## Angular CDK Accessibility

```typescript
import { A11yModule, LiveAnnouncer, FocusTrap } from '@angular/cdk/a11y';

@Component({ imports: [A11yModule] })
export class ModalComponent {
  private announcer = inject(LiveAnnouncer);

  ngAfterViewInit() {
    // Announce to screen readers
    this.announcer.announce('Dialog opened', 'polite');
  }
}
```

---

## Related Topics

- **Previous:** [Tables](./tables)
- **Next:** [SEO](./seo)
