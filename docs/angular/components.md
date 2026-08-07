---
id: components
title: Angular Components
sidebar_label: Components
description: Angular component anatomy — inputs, outputs, content projection, lifecycle hooks, and production patterns.
---

# Angular Components

## Introduction

A component is the fundamental building block of every Angular application. It combines a TypeScript class (logic), an HTML template (view), and CSS styles into a reusable, encapsulated unit.

Every piece of UI you see in an Angular app — a button, a card, a full page — is a component.

---

## Anatomy

```typescript
@Component({
  selector: 'app-product-card',       // HTML tag used in templates
  standalone: true,                   // no NgModule required
  imports: [NgOptimizedImage, CurrencyPipe, RouterLink],
  changeDetection: ChangeDetectionStrategy.OnPush, // always
  template: `
    <article class="card" [class.card--featured]="featured()">
      <img [ngSrc]="product().imageUrl" [width]="300" [height]="200"
           [alt]="product().name" />
      <div class="card__body">
        <h3 class="card__title">{{ product().name }}</h3>
        <p class="card__price">{{ product().price | currency }}</p>
        <button
          class="btn btn--primary"
          [disabled]="isAdding()"
          (click)="addToCart()"
        >
          {{ isAdding() ? 'Adding…' : 'Add to Cart' }}
        </button>
      </div>
    </article>
  `,
  styles: [`
    .card { border-radius: 8px; overflow: hidden; }
    .card--featured { border: 2px solid var(--color-primary); }
    .card__body { padding: 1rem; }
  `],
})
export class ProductCardComponent {
  // Required typed input
  product = input.required<Product>();

  // Optional input with default
  featured = input(false);

  // Output event
  cartAdded = output<Product>();

  // Internal state
  protected isAdding = signal(false);

  // Injected service
  private readonly cartService = inject(CartService);

  protected async addToCart() {
    this.isAdding.set(true);
    await this.cartService.add(this.product());
    this.cartAdded.emit(this.product());
    this.isAdding.set(false);
  }
}
```

---

## Inputs

```typescript
// Optional with default
size = input<'sm' | 'md' | 'lg'>('md');

// Required — won't compile if parent forgets it
userId = input.required<string>();

// With transform — convert string attribute to number
maxItems = input(10, { transform: (v: string | number) => Number(v) });

// Aliased — parent uses [label]="x" but class uses displayLabel
displayLabel = input<string>('', { alias: 'label' });
```

---

## Outputs

```typescript
// Simple event
clicked = output<void>();

// Typed event payload
userSelected = output<User>();

// Aliased
selected = output<string>({ alias: 'itemSelected' });

// Emit
this.userSelected.emit(user);
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
    <div class="dialog" role="dialog" aria-modal="true">
      <header class="dialog__header">
        <ng-content select="[slot=header]" />
      </header>
      <main class="dialog__body">
        <ng-content />
      </main>
      <footer class="dialog__footer">
        <ng-content select="[slot=footer]" />
      </footer>
    </div>
  `,
})
export class DialogComponent {}
```

```html
<app-dialog>
  <h2 slot="header">Confirm Delete</h2>
  <p>This action cannot be undone.</p>
  <div slot="footer">
    <button (click)="cancel()">Cancel</button>
    <button class="btn--danger" (click)="confirm()">Delete</button>
  </div>
</app-dialog>
```

---

## ViewChild and ContentChild

```typescript
@Component({
  standalone: true,
  template: `
    <input #nameInput type="text" />
    <app-child #child />
  `,
})
export class ParentComponent implements AfterViewInit {
  // Reference to a DOM element
  nameInput = viewChild.required<ElementRef>('nameInput');

  // Reference to a child component instance
  child = viewChild.required(ChildComponent);

  ngAfterViewInit() {
    this.nameInput().nativeElement.focus();
    this.child().doSomething();
  }
}
```

---

## Smart vs Dumb Components

**Dumb (Presentational):**
- Receive all data via `input()`
- Communicate only via `output()`
- No injected services
- Easy to test and reuse

**Smart (Container):**
- Inject services and fetch data
- Manage state
- Pass data down to dumb components
- Handle routing and side effects

```typescript
// Smart — fetches users, passes to dumb list
@Component({
  standalone: true,
  imports: [UserListComponent],
  template: `
    <app-user-list
      [users]="users()"
      [loading]="loading()"
      (userSelected)="onUserSelected($event)"
    />
  `,
})
export class UserPageComponent {
  private readonly store = inject(UserStore);
  readonly users = this.store.users;
  readonly loading = this.store.loading;

  onUserSelected(user: User) {
    inject(Router).navigate(['/users', user.id]);
  }
}
```

---

## Lifecycle Hooks

```typescript
@Component({ standalone: true })
export class LifecycleComponent implements OnInit, OnDestroy {
  private readonly destroyRef = inject(DestroyRef);

  // Called once after first ngOnChanges
  ngOnInit() {
    this.store.loadData().pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe();
  }

  // Called before component is destroyed
  ngOnDestroy() {
    // Manual cleanup if not using takeUntilDestroyed
  }
}
```

Order: `ngOnChanges` → `ngOnInit` → `ngDoCheck` → `ngAfterContentInit` → `ngAfterContentChecked` → `ngAfterViewInit` → `ngAfterViewChecked` → `ngOnDestroy`

---

## Interview Questions

**Q (Easy): What is the difference between `@Input()` and `input()`?**

`@Input()` is the legacy decorator approach — property is public and mutable. `input()` is the signal-based approach introduced in Angular 17.1 — it returns a read-only signal, is type-safe, and works with the reactive graph for targeted change detection. Use `input()` for all new code.

**Q (Medium): When would you use `ng-content` vs a regular `@Input()`?**

Use `ng-content` (content projection) when the parent component needs to provide rich HTML structure — not just a string or object. A modal's body content, a card's custom header, a table row's cell template — these are better projected. Use `@Input()` for simple data values (strings, numbers, objects).

**Q (Hard): How does Angular's compiler handle standalone component imports?**

The Angular compiler uses the `imports` array to determine which directives, components, and pipes are available in a component's template. During compilation, it resolves each template binding against the declared imports. Tree-shaking works per-component — unused imports are excluded from the component's chunk. This is fundamentally different from NgModules, where the entire module (and all its declarations) was included.

---

## Related Topics

- **Next:** [Templates](./templates)
- **Related:** [Angular Signals](./signals)
- **Related:** [Change Detection](./change-detection)
