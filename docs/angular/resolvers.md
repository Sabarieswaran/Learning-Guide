---
id: resolvers
title: Angular Resolvers
sidebar_label: Resolvers
description: Angular route resolvers — fetch data before a route activates using ResolveFn.
---

# Angular Resolvers

## Introduction

Resolvers fetch data before a route activates, ensuring the component receives data immediately without a loading state.

---

## Functional Resolver

```typescript
export const productResolver: ResolveFn<Product> = (route) => {
  const productService = inject(ProductService);
  const router = inject(Router);
  const id = route.paramMap.get('id')!;

  return productService.getProduct(id).pipe(
    catchError(() => {
      router.navigate(['/not-found']);
      return EMPTY;
    })
  );
};

// Route config
{
  path: 'products/:id',
  component: ProductDetailComponent,
  resolve: { product: productResolver },
}

// Component
@Component({ standalone: true })
export class ProductDetailComponent {
  readonly product = inject(ActivatedRoute).snapshot.data['product'] as Product;
}
```

---

## When to Use Resolvers vs Component-Level Fetching

**Use resolvers when:**
- The page cannot render without the data (no useful loading state)
- SEO matters (SSR — data must be available at render time)
- Multiple routes share the same prefetch logic

**Use component-level fetching when:**
- A loading skeleton improves perceived performance
- Data can be loaded incrementally
- The route should activate immediately

---

## Related Topics

- **Previous:** [Guards](./guards)
- **Related:** [Routing Basics](./routing-basics)
