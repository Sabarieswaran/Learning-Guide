---
id: onpush-strategy
title: Angular OnPush Change Detection Strategy
sidebar_label: OnPush Strategy
description: When and how to use ChangeDetectionStrategy.OnPush effectively in Angular for maximum performance.
---

# OnPush Change Detection Strategy

## Introduction

`ChangeDetectionStrategy.OnPush` is the most impactful single performance optimization you can make in an Angular application. It tells Angular to skip change detection for a component unless specific conditions are met.

---

## When Angular Checks an OnPush Component

1. An `input()` signal changes (reference change, not mutation)
2. An event originates from the component or its children
3. An `async` pipe emits a new value
4. `ChangeDetectorRef.markForCheck()` is called
5. A signal read in the template emits a new value

---

## Enabling OnPush

```typescript
@Component({
  selector: 'app-user-list',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @for (user of users(); track user.id) {
      <app-user-row [user]="user" />
    }
  `,
})
export class UserListComponent {
  users = input.required<User[]>();
}
```

---

## Common Pitfall — Mutations

OnPush won't detect mutations to the same object reference:

```typescript
// WRONG — OnPush won't detect this
this.users().push(newUser); // same array reference

// CORRECT — new reference triggers OnPush
this.users.update(list => [...list, newUser]);
```

---

## Using with RxJS

```typescript
@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    @if (users$ | async; as users) {
      @for (user of users; track user.id) {
        <app-user-row [user]="user" />
      }
    }
  `,
})
export class UserListComponent {
  readonly users$ = inject(UserService).getUsers();
}
```

The `async` pipe calls `markForCheck()` on every emission, making OnPush and observables work seamlessly together.

---

## Related Topics

- **Related:** [Angular Change Detection](./change-detection)
- **Related:** [Angular Signals](./signals)
