---
id: angular-integration
title: TypeScript in Angular
sidebar_label: Angular Integration
description: How Angular uses TypeScript — template type checking, typed forms, typed HTTP, and the Angular language service.
---

# TypeScript in Angular

## Template Type Checking

Angular's compiler type-checks templates. With `strictTemplates: true`:

```typescript
// angular.json or tsconfig.app.json
{
  "angularCompilerOptions": {
    "strictTemplates": true,
    "strictInputTypes": true,
    "strictOutputEventTypes": true
  }
}
```

```html
<!-- TypeScript error — user might be null -->
<p>{{ user.name }}</p>

<!-- Correct — null check via @if -->
@if (user(); as u) {
  <p>{{ u.name }}</p>
}
```

## Typed Reactive Forms (Angular 14+)

```typescript
const form = new FormGroup({
  name: new FormControl<string>('', Validators.required),
  age: new FormControl<number | null>(null),
});

// TypeScript knows the type
const name: string = form.controls.name.value; // string, not any
```

## Typed HTTP Client

```typescript
// Generic type parameter gives you full type safety
this.http.get<User[]>('/api/users').subscribe(users => {
  users.map(u => u.name); // u is typed as User, not any
});
```

## Angular Language Service

The Angular Language Service provides IDE features:
- Template autocompletion
- Go to definition from templates
- Type checking in templates
- Rename refactoring across templates

Install: `@angular/language-service` VS Code extension.

---

## Related Topics

- **Related:** [Angular Introduction](/docs/angular/introduction)
- **Related:** [TypeScript Introduction](./introduction)
