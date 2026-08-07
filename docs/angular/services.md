---
id: services
title: Angular Services
sidebar_label: Services
description: Angular services — creating injectable services, HTTP client patterns, and service architecture.
---

# Angular Services

## Introduction

Services in Angular are classes that hold business logic, data fetching, and state. They are separate from components and provided via dependency injection.

---

## Creating a Service

```typescript
@Injectable({ providedIn: 'root' })
export class ProductService {
  private readonly http = inject(HttpClient);
  private readonly baseUrl = inject(API_BASE_URL);

  // Simple HTTP
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/products`);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.baseUrl}/products/${id}`);
  }

  createProduct(product: Omit<Product, 'id'>): Observable<Product> {
    return this.http.post<Product>(`${this.baseUrl}/products`, product);
  }

  updateProduct(id: string, changes: Partial<Product>): Observable<Product> {
    return this.http.patch<Product>(`${this.baseUrl}/products/${id}`, changes);
  }

  deleteProduct(id: string): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/products/${id}`);
  }
}
```

---

## State Service Pattern with Signals

```typescript
@Injectable({ providedIn: 'root' })
export class ProductStore {
  private readonly productService = inject(ProductService);

  private readonly _products = signal<Product[]>([]);
  private readonly _loading = signal(false);
  private readonly _error = signal<string | null>(null);

  readonly products = this._products.asReadonly();
  readonly loading = this._loading.asReadonly();
  readonly error = this._error.asReadonly();

  readonly productCount = computed(() => this._products().length);

  async loadProducts(): Promise<void> {
    this._loading.set(true);
    this._error.set(null);
    try {
      const products = await firstValueFrom(this.productService.getProducts());
      this._products.set(products);
    } catch (e) {
      this._error.set('Failed to load products. Please try again.');
    } finally {
      this._loading.set(false);
    }
  }
}
```

---

## HTTP Interceptors

```typescript
export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const token = authService.getToken();

  if (!token) return next(req);

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });

  return next(authReq).pipe(
    catchError(error => {
      if (error.status === 401) {
        authService.logout();
      }
      return throwError(() => error);
    })
  );
};

// Register at bootstrap
bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([authInterceptor])),
  ],
});
```

---

## Related Topics

- **Previous:** [Pipes](./pipes)
- **Next:** [Dependency Injection](./dependency-injection)
