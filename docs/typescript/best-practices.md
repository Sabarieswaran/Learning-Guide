---
id: best-practices
title: TypeScript Best Practices
sidebar_label: Best Practices
description: TypeScript best practices for Angular projects — strict mode, avoiding any, utility types, and code organization.
---

# TypeScript Best Practices

## Type Safety

- Enable `strict: true` in `tsconfig.json` from day one
- Never use `any` — use `unknown` for truly unknown types
- Use `NonNullable<T>` and optional chaining instead of non-null assertions
- Prefer discriminated unions over boolean flags for state

## Code Organization

```typescript
// Define domain types in dedicated files
// src/app/users/user.model.ts
export interface User {
  readonly id: string;
  name: string;
  email: string;
  role: UserRole;
}

export type UserRole = 'admin' | 'editor' | 'viewer';
export type CreateUserInput = Omit<User, 'id'>;
export type UpdateUserInput = Partial<CreateUserInput>;
```

## Function Signatures

```typescript
// Use return types for public APIs
export function formatCurrency(
  amount: number,
  currency: string,
  locale = 'en-US'
): string {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(amount);
}
```

## Avoid These Patterns

```typescript
// Bad — any
function process(data: any) { return data.value; }

// Bad — type assertion without checking
const user = data as User;

// Bad — non-null assertion chain
const city = user!.address!.city!;

// Good
function process(data: Record<string, unknown>): string {
  if (typeof data.value === 'string') return data.value;
  throw new Error('Invalid data format');
}
```

---

## Related Topics

- **Related:** [TypeScript Introduction](./introduction)
- **Related:** [Angular Best Practices](/docs/angular/best-practices)
---

## Related Topics

- **Previous:** [Angular Integration](./angular-integration)
- **Next:** [Interview Questions](./interview-questions)
- **Related:** [Angular Best Practices](/docs/angular/best-practices)