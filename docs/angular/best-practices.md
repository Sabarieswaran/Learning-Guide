---
id: best-practices
title: Angular Best Practices
sidebar_label: Best Practices
description: Angular best practices for production — component design, performance, state management, security, and testing.
---

# Angular Best Practices

## Component Design

**Use `ChangeDetectionStrategy.OnPush` on every component.** Without it, Angular checks your entire tree on every event. OnPush only re-renders when inputs change by reference or a signal/observable emits.

```typescript
// ✅ Always include this
@Component({
  selector: 'app-user-card',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `<p>{{ user().name }}</p>`,
})
export class UserCardComponent {
  user = input.required<User>();
}
```

**Prefer signal-based `input()` and `output()` over decorators.** They're type-safe, work with computed(), and don't require manual change detection.

```typescript
// ❌ Old decorator approach
@Input() user!: User;
@Output() userSaved = new EventEmitter<User>();

// ✅ New signal approach
user = input.required<User>();
userSaved = output<User>();
```

**Separate smart and dumb components.** Smart components fetch data and manage state. Dumb (presentational) components receive inputs and emit outputs — nothing else.

```typescript
// ✅ Smart component — owns state and data
@Component({ template: `<app-user-card [user]="user()" (save)="onSave($event)" />` })
export class UserPageComponent {
  private readonly userService = inject(UserService);
  readonly user = this.userService.currentUser;
  onSave(user: User) { this.userService.save(user); }
}

// ✅ Dumb component — pure display logic
@Component({ template: `<div>{{ user().name }}</div>` })
export class UserCardComponent {
  user = input.required<User>();
  save = output<User>();
}
```

---

## State Management

**Use signals for all local and feature state.** Signals are synchronous, fine-grained, and don't require subscriptions.

```typescript
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly _items = signal<CartItem[]>([]);

  readonly items = this._items.asReadonly();
  readonly total = computed(() =>
    this._items().reduce((sum, item) => sum + item.price * item.qty, 0)
  );

  addItem(item: CartItem): void {
    this._items.update(items => [...items, item]); // immutable update
  }

  removeItem(id: string): void {
    this._items.update(items => items.filter(i => i.id !== id));
  }
}
```

**Never store derived data — compute it.**

```typescript
// ❌ Storing derived state creates sync bugs
private _items = signal<CartItem[]>([]);
private _total = signal(0); // gets out of sync

// ✅ Derive from source of truth
readonly total = computed(() =>
  this._items().reduce((sum, i) => sum + i.price * i.qty, 0)
);
```

---

## Performance

**Always use `track` in `@for` loops** to prevent Angular from destroying and recreating every DOM node on change:

```html
<!-- ❌ No track — Angular destroys and recreates all <li> on any change -->
@for (item of items(); ) {
  <li>{{ item.name }}</li>
}

<!-- ✅ Track by stable ID — Angular patches only changed items -->
@for (item of items(); track item.id) {
  <li>{{ item.name }}</li>
}
```

**Use `@defer` for non-critical UI.** Heavy components that appear below the fold or behind interactions should be deferred:

```html
<!-- Loads this widget only when it enters the viewport -->
@defer (on viewport) {
  <app-analytics-chart />
} @placeholder {
  <div class="chart-skeleton"></div>
}
```

**Lazy-load all routes:**

```typescript
export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./dashboard/dashboard.component').then(m => m.DashboardComponent),
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then(m => m.ADMIN_ROUTES),
  },
];
```

---

## Security

**Never use `bypassSecurityTrustHtml()` on user-controlled content.** This disables Angular's XSS protection:

```typescript
// ❌ XSS vulnerability if content comes from user input or API
this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(userContent);

// ✅ Use DomSanitizer.sanitize() or render as plain text
this.displayText = userContent; // Angular auto-escapes in {{ }}
```

**Use `HttpClient` — it handles CSRF tokens automatically.** Angular's `HttpClient` reads the `XSRF-TOKEN` cookie and attaches it as an `X-XSRF-TOKEN` header on mutating requests (POST, PUT, DELETE).

```typescript
// ✅ Always inject HttpClient — never use native fetch() for authenticated API calls
@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly http = inject(HttpClient);

  saveUser(user: User): Observable<User> {
    return this.http.post<User>('/api/users', user); // CSRF token included automatically
  }
}
```

---

## Testing

**Test behavior, not implementation.** Use `@testing-library/angular` to interact with your component the way a user would:

```typescript
it('shows user name after load', async () => {
  const { findByText } = await render(UserCardComponent, {
    componentInputs: { user: { id: '1', name: 'Alice' } },
  });
  expect(await findByText('Alice')).toBeInTheDocument();
});
```

**Test error and loading states** — not just the happy path:

```typescript
it('shows skeleton while loading', async () => {
  const { getByTestId } = await render(UserPageComponent, {
    providers: [
      provideHttpClientTesting(),
    ],
  });
  expect(getByTestId('skeleton')).toBeInTheDocument();
});
```

---

## Code Style

**Enable `strict` mode in `tsconfig.json`.** This catches null-pointer errors, unused variables, and implicit `any` at compile time.

```json
{
  "compilerOptions": {
    "strict": true,
    "strictNullChecks": true,
    "noImplicitAny": true,
    "noUncheckedIndexedAccess": true
  }
}
```

**Define interfaces for all API responses:**

```typescript
// ✅ Explicit types catch runtime mismatches at compile time
interface ApiUser {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'viewer';
}

// In your service
getUser(id: string): Observable<ApiUser> {
  return this.http.get<ApiUser>(`/api/users/${id}`);
}
```

---

## Summary

Angular best practices center on three principles: **OnPush everywhere** (stop unnecessary change detection), **signals for state** (synchronous, fine-grained reactivity), and **lazy loading everything** (load only what the user actually needs). Security defaults (CSRF tokens, XSS escaping) are built in — just don't bypass them.

---

## Official References

- [Angular Style Guide — angular.dev](https://angular.dev/style-guide)
- [Angular Performance — angular.dev](https://angular.dev/best-practices/performance)
- [Angular Security — angular.dev](https://angular.dev/best-practices/security)

---

## Related Topics

- **Previous:** [Introduction](./introduction)
- **Next:** [Components](./components)
- **Related:** [Angular Signals](./signals)
- **Related:** [Angular Change Detection](./change-detection)
- **Related:** [Angular Interview Questions](./interview-questions)
