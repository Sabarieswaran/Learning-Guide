---
id: cheat-sheet
title: TypeScript Cheat Sheet
sidebar_label: Cheat Sheet
description: TypeScript quick reference — types, operators, utility types, and Angular-specific patterns.
---

# TypeScript Cheat Sheet

## Types

```typescript
// Primitives
string  number  boolean  null  undefined  symbol  bigint

// Special
any     unknown  never  void  object

// Arrays
string[]  Array<string>  readonly string[]

// Tuples
[string, number]          // fixed length
[string, ...number[]]     // rest

// Union & Intersection
string | number           // one of
User & Admin              // both (intersection)

// Literal
'north' | 'south'
200 | 400 | 500

// Optional & Readonly
{ name?: string }         // optional property
{ readonly id: string }   // immutable property
```

## Type Operators

```typescript
keyof User                // 'id' | 'name' | 'email'
typeof user               // type of a value
user['name']              // index access type
User extends Admin        // conditional
```

## Utility Types

```typescript
Partial<T>                // all optional
Required<T>               // all required
Readonly<T>               // all readonly
Pick<T, 'a' | 'b'>       // subset
Omit<T, 'a' | 'b'>       // exclude
Record<K, V>              // object map
NonNullable<T>            // remove null/undefined
ReturnType<typeof fn>     // function return type
Parameters<typeof fn>     // function params tuple
InstanceType<typeof Cls>  // class instance type
Extract<T, U>             // T that extends U
Exclude<T, U>             // T that doesn't extend U
Awaited<T>                // unwrap Promise<T>
```

## Narrowing

```typescript
typeof x === 'string'        // type guard
x instanceof Date            // class check
'prop' in obj                // property check
x !== null && x !== undefined // truthiness
function isUser(x): x is User // type predicate
```

## Generics

```typescript
function id<T>(x: T): T
function first<T>(arr: T[]): T | undefined
interface Box<T> { value: T }
type Nullable<T> = T | null
class Stack<T> { push(item: T): void }

// Constraints
<T extends string>
<T extends { id: string }>
<T, K extends keyof T>
```

## Angular Patterns

```typescript
// Service with generics
class ApiService<T> {
  getAll(): Observable<T[]>
  getOne(id: string): Observable<T>
}

// Discriminated union for async state
type AsyncState<T> =
  | { status: 'idle' }
  | { status: 'loading' }
  | { status: 'error'; error: Error }
  | { status: 'success'; data: T }

// DTO types
type CreateDto<T> = Omit<T, 'id' | 'createdAt'>
type UpdateDto<T> = Partial<CreateDto<T>>
```
