---
id: angular-patterns
title: RxJS Angular Patterns
sidebar_label: Angular Patterns
description: Production RxJS patterns for Angular — smart/dumb components, state streams, HTTP loading states, and cleanup patterns.
---

# RxJS Angular Patterns

## Smart/Dumb Component Pattern

```typescript
// Smart component — fetches data, manages state
@Component({
  standalone: true,
  imports: [UserListComponent, AsyncPipe],
  template: `
    @if (state$ | async; as state) {
      @if (state.loading) { <app-spinner /> }
      @if (state.error) { <app-error [message]="state.error" /> }
      @if (state.data) {
        <app-user-list [users]="state.data" />
      }
    }
  `,
})
export class UserPageComponent {
  private readonly userService = inject(UserService);

  state$ = this.userService.getUsers().pipe(
    map(data => ({ loading: false, data, error: null })),
    startWith({ loading: true, data: null, error: null }),
    catchError(err => of({ loading: false, data: null, error: err.message })),
  );
}

// Dumb component — receives data, emits events
@Component({
  selector: 'app-user-list',
  standalone: true,
  template: `@for (user of users(); track user.id) { ... }`,
})
export class UserListComponent {
  users = input.required<User[]>();
  userSelected = output<User>();
}
```

## Reactive Service State

```typescript
@Injectable({ providedIn: 'root' })
export class CartService {
  private readonly itemsSubject = new BehaviorSubject<CartItem[]>([]);

  items$ = this.itemsSubject.asObservable();
  total$ = this.items$.pipe(
    map(items => items.reduce((sum, item) => sum + item.price * item.qty, 0))
  );
  count$ = this.items$.pipe(map(items => items.length));

  addItem(item: CartItem) {
    this.itemsSubject.update(items => [...items, item]);
  }
}

// Modern equivalent with signals (preferred for new code)
```

---

## Related Topics

- **Previous:** [Schedulers](./schedulers)
- **Next:** [RxJS Best Practices](./best-practices)
