---
id: strict-mode
title: TypeScript Strict Mode
sidebar_label: Strict Mode
description: TypeScript strict mode flags — strictNullChecks, noImplicitAny, strictPropertyInitialization — and their impact on Angular apps.
---

# TypeScript Strict Mode

## Configuration

```json
{
  "compilerOptions": {
    "strict": true // enables all strict flags
  }
}
```

`strict: true` enables: `strictNullChecks`, `noImplicitAny`, `strictFunctionTypes`, `strictBindCallApply`, `strictPropertyInitialization`, `noImplicitThis`, `useUnknownInCatchVariables`, `alwaysStrict`.

---

## strictNullChecks (Most Important)

```typescript
// Without strictNullChecks
let user: User = null; // OK

// With strictNullChecks
let user: User | null = null; // must explicitly include null

// Forces handling null at every use
function getName(user: User | null): string {
  if (user === null) return 'Guest';
  return user.name; // TypeScript knows user is non-null here
}
```

---

## noImplicitAny

```typescript
// Bad — implicit any
function process(data) {     // Error: 'data' has implicit 'any'
  return data.value;
}

// Good — explicit
function process(data: ProcessData): ProcessResult {
  return data.value;
}
```

---

## strictPropertyInitialization

```typescript
// Bad — property might not be initialized
class UserComponent {
  user: User; // Error — not assigned in constructor
}

// Good options
class UserComponent {
  user!: User;               // non-null assertion (I guarantee this will be set)
  user: User | undefined;    // explicitly optional
  user = defaultUser;        // initialized with default
  user = input.required<User>(); // Angular input signal (always initialized)
}
```

---

## Angular tsconfig Best Practices

```json
{
  "compilerOptions": {
    "strict": true,
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitOverride": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "forceConsistentCasingInFileNames": true
  }
}
```

---

## Related Topics

- **Previous:** [Decorators](./decorators)
- **Next:** [Module System](./module-system)
