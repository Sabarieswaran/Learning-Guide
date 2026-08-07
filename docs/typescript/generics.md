---
id: generics
title: TypeScript Generics
sidebar_label: Generics
description: Generic functions, interfaces, constraints, conditional types, and advanced patterns used in Angular's type system.
---

# TypeScript Generics

## Generic Functions

```typescript
// T is inferred from usage
function first<T>(array: T[]): T | undefined {
  return array[0];
}

const num = first([1, 2, 3]);   // T = number
const str = first(['a', 'b']); // T = string

// Multiple type parameters
function zip<T, U>(a: T[], b: U[]): Array<[T, U]> {
  return a.map((item, i) => [item, b[i]]);
}
```

## Generic Constraints

```typescript
// T must have an 'id' property
function findById<T extends { id: string }>(
  items: T[],
  id: string
): T | undefined {
  return items.find(item => item.id === id);
}

// T must be a key of U
function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
```

## Generic Interfaces

```typescript
interface Repository<T extends { id: string }> {
  findById(id: string): Observable<T | null>;
  findAll(query?: Partial<T>): Observable<T[]>;
  save(entity: Omit<T, 'id'>): Observable<T>;
  update(id: string, changes: Partial<T>): Observable<T>;
  delete(id: string): Observable<void>;
}

// Angular HTTP pattern
interface ApiService<T> {
  getOne(id: string): Observable<T>;
  getAll(): Observable<T[]>;
  create(payload: Omit<T, 'id'>): Observable<T>;
}
```

## Angular Examples

```typescript
// HttpClient uses generics extensively
this.http.get<User[]>('/api/users')          // Observable<User[]>
this.http.post<User>('/api/users', payload)  // Observable<User>

// Signal store generic
function createSignalStore<T>(initial: T) {
  const state = signal(initial);
  return {
    get: state.asReadonly(),
    set: state.set.bind(state),
    update: state.update.bind(state),
    select: <R>(selector: (s: T) => R) => computed(() => selector(state())),
  };
}
```

---

## Related Topics

- **Previous:** [Type Aliases](./type-aliases)
- **Next:** [Utility Types](./utility-types)
