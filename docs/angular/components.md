---
id: components
title: Angular Components
sidebar_label: Components
description: Angular components — anatomy, inputs, outputs, content projection, and production patterns.
---

# Angular Components

## Introduction

A component is the fundamental building block of an Angular application. It combines a TypeScript class, an HTML template, and CSS styles into a reusable, encapsulated unit of UI.

---

## Component Anatomy

```typescript
@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  template: `
    <article class="product-card">
      <img [ngSrc]="product().image" [width]="300" [height]="200"
           [alt]="product().name" priority />
      <div class="product-card__body">
        <h3>{{ product().name }}</h3>
        <p class="price">{{ product().price | currency }}</p>
        <button (click)="addToCart()" [disabled]="isAdding()">
          {{ isAdding() ? 'Adding...' : 'Add to Cart' }}
        </button>
      </div>
    </article>
  `,
  styles: [`
    .product-card { border-radius: 8px; overflow: hidden; }
    .product-card__body { padding: 1rem; }
    .price { font-weight: 700; color: var(--color-primary); }
  `],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductCardComponent {
  product = input.required<Product>();
  cartAdded = output<Product>();

  protected isAdding = signal(false);

  protected async addToCart() {
    this.isAdding.set(true);
    this.cartAdded.emit(this.product());
    await sleep(500); // optimistic UI
    this.isAdding.set(false);
  }
}
```

---

## Inputs and Outputs

```typescript
// Typed input signals (Angular 17.1+)
name = input<string>();                              // optional
name = input.required<string>();                     // required
count = input(0);                                    // with default
label = input('', { transform: (v: string) => v.trim() }); // with transform

// Output events
clicked = output<void>();
selected = output<Item>();

// Aliased
displayName = input<string>('', { alias: 'label' }); // @Input({ alias: 'label' })
```

---

## Content Projection

```typescript
// Single slot
@Component({
  selector: 'app-card',
  template: `
    <div class="card">
      <ng-content />
    </div>
  `,
})
export class CardComponent {}

// Named slots
@Component({
  selector: 'app-dialog',
  template: `
    <div class="dialog">
      <header><ng-content select="[slot=header]" /></header>
      <main><ng-content /></main>
      <footer><ng-content select="[slot=footer]" /></footer>
    </div>
  `,
})
export class DialogComponent {}

// Usage
<app-dialog>
  <h2 slot="header">Confirm Delete</h2>
  <p>Are you sure you want to delete this item?</p>
  <div slot="footer">
    <button (click)="cancel()">Cancel</button>
    <button (click)="confirm()">Delete</button>
  </div>
</app-dialog>
```

---

## Smart vs Dumb Components

**Dumb (Presentational) components:**
- Receive data via `input()`
- Emit events via `output()`
- No services injected (no side effects)
- Highly reusable, easy to test

**Smart (Container) components:**
- Inject services and fetch data
- Pass data down to dumb components
- Handle user actions and route navigation
- May not be reusable across features

---

## Best Practices

- One component = one responsibility
- Use `ChangeDetectionStrategy.OnPush` everywhere
- Prefer `input()` and `output()` over `@Input()` and `@Output()`
- Keep templates under ~50 lines — extract to sub-components
- Use `ng-content` for flexible, composable components

---

## Related Topics

- **Next:** [Templates](./templates)
- **Related:** [Angular Signals](./signals)
- **Related:** [Angular Change Detection](./change-detection)
