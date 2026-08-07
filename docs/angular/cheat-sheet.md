---
id: cheat-sheet
title: Angular Cheat Sheet
sidebar_label: Cheat Sheet
description: Angular quick reference — CLI, decorators, lifecycle hooks, signals, router, forms, and template syntax.
---

# Angular Cheat Sheet

## CLI Commands

```bash
# Create new app
ng new my-app --standalone --routing --style=css

# Generate files
ng generate component features/user/user-list
ng generate service core/services/user
ng generate guard core/guards/auth
ng generate pipe shared/pipes/truncate
ng generate directive shared/directives/tooltip

# Build & serve
ng serve
ng build
ng build --configuration=production

# Testing
ng test
ng e2e
```

---

## Component Anatomy

```typescript
@Component({
  selector: 'app-my-component',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  template: `...`,
  styles: [`...`],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [ComponentScopedService],
})
export class MyComponent implements OnInit, OnDestroy {
  // Signals
  count = signal(0);
  doubled = computed(() => this.count() * 2);

  // Inputs
  title = input.required<string>();
  size = input<'sm' | 'md' | 'lg'>('md');

  // Outputs
  selected = output<Item>();

  // Services
  private readonly service = inject(MyService);
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.service.data$.pipe(
      takeUntilDestroyed(this.destroyRef)
    ).subscribe(data => this.count.set(data.count));
  }
}
```

---

## Template Syntax

```html
<!-- Interpolation -->
{{ expression }}

<!-- Property binding -->
<img [src]="imageUrl" [alt]="altText" />
<button [disabled]="isLoading">Submit</button>

<!-- Event binding -->
<button (click)="handleClick($event)">Click</button>
<input (keyup.enter)="onEnter()" />

<!-- Two-way binding -->
<input [(ngModel)]="searchQuery" />

<!-- Control flow -->
@if (isLoggedIn()) {
  <app-dashboard />
} @else {
  <app-login />
}

@for (item of items(); track item.id) {
  <app-item [item]="item" (deleted)="remove(item.id)" />
} @empty {
  <p>No items found.</p>
}

@switch (role()) {
  @case ('admin') { <app-admin-panel /> }
  @case ('user') { <app-user-panel /> }
  @default { <app-guest-panel /> }
}

<!-- Defer (lazy loading) -->
@defer (on viewport) {
  <app-heavy-chart [data]="chartData()" />
} @placeholder {
  <div class="skeleton chart-skeleton"></div>
}

<!-- Content projection -->
<ng-content />
<ng-content select="[slot=header]" />
```

---

## Signals API

```typescript
import { signal, computed, effect, input, output } from '@angular/core';
import { toSignal, toObservable } from '@angular/core/rxjs-interop';

// Writable signal
const state = signal<MyState>(initialState);
state.set(newValue);
state.update(v => ({ ...v, count: v.count + 1 }));
state.mutate(v => { v.items.push(item); });

// Read-only
const readonly = state.asReadonly();

// Derived
const derived = computed(() => state().items.length);

// Side effect
const cleanup = effect(() => {
  localStorage.setItem('state', JSON.stringify(state()));
});

// RxJS interop
const users = toSignal(users$, { initialValue: [] });
const query$ = toObservable(querySignal);
```

---

## Router

```typescript
// Route config
const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'users',
    loadComponent: () => import('./users/users.component').then(m => m.UsersComponent),
    canActivate: [authGuard],
    resolve: { users: usersResolver },
  },
  { path: '**', redirectTo: '' },
];

// Navigation
const router = inject(Router);
router.navigate(['/users', userId]);
router.navigate(['/users'], { queryParams: { page: 2 } });

// Route info
const route = inject(ActivatedRoute);
const id = route.snapshot.paramMap.get('id');
const users = route.snapshot.data['users'];

// RouterLink
<a [routerLink]="['/users', user.id]" routerLinkActive="active">
  {{ user.name }}
</a>
```

---

## Reactive Forms

```typescript
// Setup
const fb = inject(FormBuilder);

const form = fb.group({
  email: fb.control('', [Validators.required, Validators.email]),
  password: fb.control('', [Validators.required, Validators.minLength(8)]),
});

// Access
form.get('email')?.value
form.get('email')?.errors
form.valid
form.value // { email: '...', password: '...' }

// Submit
form.valueChanges.subscribe(console.log);

// Template
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="email" />
  @if (form.get('email')?.errors?.['required']) {
    <span>Email is required</span>
  }
</form>
```

---

## Lifecycle Hooks

```typescript
// In order of execution:
ngOnChanges(changes: SimpleChanges)  // Input values changed
ngOnInit()                           // Component initialized
ngDoCheck()                          // Every CD cycle
ngAfterContentInit()                 // Content projected
ngAfterContentChecked()              // Content checked
ngAfterViewInit()                    // View + children initialized
ngAfterViewChecked()                 // View + children checked
ngOnDestroy()                        // Before destruction
```

---

## Related Topics

- **Related:** [Angular Introduction](./introduction)
- **Related:** [Angular Signals](./signals)
---

## Related Topics

- **Previous:** [Interview Questions](./interview-questions)
- **Related:** [Angular Introduction](./introduction)
- **Related:** [Angular Signals](./signals)