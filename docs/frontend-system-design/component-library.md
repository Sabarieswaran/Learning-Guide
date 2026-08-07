---
id: component-library
title: Design a Component Library
sidebar_label: Component Library
description: System design for an Angular component library — API design, accessibility, theming, versioning, and documentation.
---

# Design a Component Library

## Problem Statement

Design an Angular component library for a large enterprise with:
- 20+ components used across 10+ applications
- Consistent design system (tokens, themes)
- Accessibility built-in
- Clear versioning and migration paths
- Good developer experience (docs, examples, TypeScript)

---

## Architecture Decisions

### Standalone Components (Modern)

```typescript
// Every component is standalone — no module needed
@Component({
  selector: 'lib-button',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <button
      [class]="buttonClasses()"
      [disabled]="disabled() || loading()"
      [attr.aria-busy]="loading()"
      [attr.aria-label]="ariaLabel()"
      (click)="clicked.emit($event)"
    >
      @if (loading()) {
        <lib-spinner size="sm" aria-hidden="true" />
      }
      <ng-content />
    </button>
  `,
})
export class ButtonComponent {
  variant = input<'primary' | 'secondary' | 'ghost'>('primary');
  size = input<'sm' | 'md' | 'lg'>('md');
  disabled = input(false);
  loading = input(false);
  ariaLabel = input<string | undefined>(undefined);
  clicked = output<MouseEvent>();

  buttonClasses = computed(() =>
    `btn btn--${this.variant()} btn--${this.size()}`
  );
}
```

### Design Tokens

```scss
// _tokens.scss — single source of truth
:root {
  --lib-color-primary: #{$primary};
  --lib-color-primary-hover: #{$primary-dark};
  --lib-border-radius-sm: 4px;
  --lib-border-radius-md: 8px;
  --lib-spacing-1: 0.25rem;
  --lib-spacing-2: 0.5rem;
  --lib-spacing-4: 1rem;
  --lib-font-size-sm: 0.875rem;
  --lib-font-size-md: 1rem;
}
```

### Theming

```typescript
// Consumers override tokens
@Component({
  styles: [`
    :host {
      --lib-color-primary: #0062cc;  /* override for this context */
    }
  `]
})
```

---

## API Design Principles

1. **Minimal surface area** — only expose what consumers need
2. **Prefer composition** over configuration — use `ng-content` over many inputs
3. **Accessible by default** — ARIA, keyboard, focus management built in
4. **Strongly typed** — no `any`, full TypeScript support
5. **Controlled output** — use `output()` instead of callbacks

```typescript
// Bad API — too many configuration inputs
<lib-card
  showHeader="true"
  showFooter="true"
  headerText="Title"
  footerContent="..."
  padding="large"
  shadow="true" />

// Good API — composable with ng-content
<lib-card>
  <ng-container slot="header"><h2>Title</h2></ng-container>
  <p>Body content.</p>
  <ng-container slot="footer">Footer actions</ng-container>
</lib-card>
```

---

## Versioning Strategy

Follow semantic versioning:
- **Patch** (1.0.1) — bug fixes, no API changes
- **Minor** (1.1.0) — new components, backward-compatible additions
- **Major** (2.0.0) — breaking changes with migration guide

```bash
# Provide automated migrations
ng update @my-lib --from=1 --to=2
```

---

## Documentation

Use Storybook for component documentation:

```typescript
// button.stories.ts
const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    variant: { control: 'select', options: ['primary', 'secondary', 'ghost'] },
    size: { control: 'select', options: ['sm', 'md', 'lg'] },
  },
};

export const Primary: Story = {
  args: { variant: 'primary', size: 'md' },
};
```

---

## Related Topics

- **Previous:** [File Upload](./file-upload)
- **Next:** [Interview Questions](./interview-questions)
