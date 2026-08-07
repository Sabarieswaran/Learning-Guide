---
id: modules
title: JavaScript Modules
sidebar_label: Modules
description: ES modules, CommonJS, dynamic imports, tree shaking, and how Angular's bundler handles modules.
---

# JavaScript Modules

## ES Modules (ESM)

The standard module system for modern JavaScript and Angular:

```javascript
// Named exports
export const PI = 3.14159;
export function area(r) { return PI * r ** 2; }
export class Circle { ... }

// Default export (one per file)
export default class UserService { ... }

// Named imports
import { PI, area } from './math.js';

// Default import
import UserService from './user.service.js';

// Namespace import
import * as Math from './math.js';
Math.PI; Math.area(5);

// Re-export
export { area as circleArea } from './math.js';
export * from './shapes.js';
```

## Dynamic Imports (Code Splitting)

```javascript
// Lazy load a module
const module = await import('./heavy-feature.js');
module.default(); // use the module

// Angular lazy routes use this pattern
loadComponent: () => import('./users/users.component').then(m => m.UsersComponent)
```

## Barrel Files (index.ts)

```typescript
// users/index.ts — re-export everything
export { UserListComponent } from './user-list/user-list.component';
export { UserCardComponent } from './user-card/user-card.component';
export type { User } from './user.model';

// Consumers import cleanly
import { UserListComponent, User } from './users';
```

## Tree Shaking

Modern bundlers (webpack, esbuild) remove unused exports. For tree shaking to work:
- Use named exports, not namespace objects
- Avoid side effects in module scope
- Mark packages as `"sideEffects": false` in package.json

---

## Related Topics

- **Previous:** [Async/Await](./async-await)
- **Related:** [Angular Lazy Loading](/docs/angular/lazy-loading)
