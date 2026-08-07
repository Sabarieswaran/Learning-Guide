---
id: utility-types
title: TypeScript Utility Types
sidebar_label: Utility Types
description: Partial, Required, Pick, Omit, Record, Exclude, Extract, ReturnType, Parameters — with Angular examples.
---

# TypeScript Utility Types

## Object Modifiers

```typescript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user';
}

Partial<User>         // all properties optional
Required<User>        // all properties required
Readonly<User>        // all properties readonly
```

## Picking and Omitting

```typescript
// Only include specific properties
type UserSummary = Pick<User, 'id' | 'name'>;
// { id: string; name: string }

// Exclude specific properties
type CreateUserInput = Omit<User, 'id' | 'createdAt'>;
// { name: string; email: string; role: 'admin' | 'user' }

// Angular pattern — HTTP payloads
type CreateProductDto = Omit<Product, 'id' | 'createdAt' | 'updatedAt'>;
type UpdateProductDto = Partial<Omit<Product, 'id'>>;
```

## Record

```typescript
// Object with known key type and value type
type RolePermissions = Record<'admin' | 'editor' | 'viewer', string[]>;

const permissions: RolePermissions = {
  admin: ['read', 'write', 'delete'],
  editor: ['read', 'write'],
  viewer: ['read'],
};

// Dynamic lookup maps
type UserCache = Record<string, User>;
```

## Function Type Utilities

```typescript
// Return type of a function
type UserServiceGetUser = typeof UserService.prototype.getUser;
type UserResult = ReturnType<UserServiceGetUser>;
// Observable<User>

// Parameters of a function
type LogParams = Parameters<typeof console.log>;
// [message?: any, ...optionalParams: any[]]

// Instance type of a class
type ComponentInstance = InstanceType<typeof MyComponent>;
```

## Union Utilities

```typescript
// Exclude from union
type NonNullUser = NonNullable<User | null | undefined>;
// User

type EventTypes = 'click' | 'hover' | 'focus' | 'blur';
type MouseEvents = Extract<EventTypes, 'click' | 'hover'>;
// 'click' | 'hover'

type KeyboardEvents = Exclude<EventTypes, 'click' | 'hover'>;
// 'focus' | 'blur'
```

---

## Related Topics

- **Previous:** [Generics](./generics)
- **Next:** [Mapped Types](./mapped-types)
