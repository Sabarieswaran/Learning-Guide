---
id: bundle-optimization
title: Angular Bundle Optimization
sidebar_label: Bundle Optimization
description: Analyzing and reducing Angular bundle size — lazy loading, tree shaking, and webpack-bundle-analyzer.
---

# Angular Bundle Optimization

## Introduction

Bundle size directly affects Time to Interactive (TTI) and Interaction to Next Paint (INP). Every kilobyte of JavaScript must be downloaded, parsed, compiled, and executed. On mobile devices and slow connections, this adds seconds.

---

## Analyzing Bundles

```bash
# Generate stats file
ng build --stats-json

# Visualize with bundle analyzer
npx webpack-bundle-analyzer dist/my-app/browser/stats.json
```

Look for:
- Large third-party libraries (moment.js → date-fns, lodash → native methods)
- Angular Material importing the entire library (use tree-shakable imports)
- Polyfills for browsers you don't support

---

## Common Optimizations

### 1. Route-Level Code Splitting

```typescript
// Splits each route into its own chunk
const routes: Routes = [
  {
    path: 'reports',
    loadComponent: () => import('./reports/reports.component')
      .then(m => m.ReportsComponent),
  },
];
```

### 2. Tree-Shakable Providers

```typescript
// Good — tree-shakable
@Injectable({ providedIn: 'root' })
export class MyService {}

// Bad — included even if not used
@NgModule({ providers: [MyService] })
```

### 3. Replace Heavy Libraries

```typescript
// Before: moment.js (~300KB)
import moment from 'moment';
const formatted = moment(date).format('DD/MM/YYYY');

// After: date-fns (~2KB for this function)
import { format } from 'date-fns';
const formatted = format(date, 'dd/MM/yyyy');
```

### 4. Angular Material Optimization

```typescript
// Import only the modules you use
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

// Avoid
import { MaterialModule } from './material.module'; // imports everything
```

---

## Lighthouse Budget

```json
// angular.json — enforce performance budgets
{
  "budgets": [
    {
      "type": "initial",
      "maximumWarning": "500kb",
      "maximumError": "1mb"
    },
    {
      "type": "anyComponentStyle",
      "maximumWarning": "4kb"
    }
  ]
}
```

---

## Related Topics

- **Related:** [Lazy Loading](./lazy-loading)
- **Related:** [Deferred Loading](./deferred-loading)
- **Related:** [Performance Introduction](/docs/performance/introduction)
---

## Related Topics

- **Previous:** [Track By](./track-by)
- **Next:** [Best Practices](./best-practices)
- **Related:** [Lazy Loading](./lazy-loading)
- **Related:** [Deferred Loading](./deferred-loading)