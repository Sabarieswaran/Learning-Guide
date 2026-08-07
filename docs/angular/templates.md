---
id: templates
title: Angular Templates
sidebar_label: Templates
description: Angular template syntax — control flow, bindings, pipes, directives, and template references.
---

# Angular Templates

## Introduction

Angular templates are HTML enhanced with Angular-specific syntax. The Angular compiler type-checks templates against the component class, catching errors before runtime.

---

## Control Flow (Angular 17+)

```html
<!-- Conditional -->
@if (isLoggedIn()) {
  <app-dashboard />
} @else if (isLoading()) {
  <app-spinner />
} @else {
  <app-login />
}

<!-- Loops -->
@for (item of items(); track item.id) {
  <app-item [item]="item" />
} @empty {
  <p>No items available.</p>
}

<!-- Switch -->
@switch (status()) {
  @case ('active') { <span class="badge--green">Active</span> }
  @case ('inactive') { <span class="badge--red">Inactive</span> }
  @default { <span class="badge--grey">Unknown</span> }
}
```

---

## Defer Blocks

```html
<!-- Load when visible in viewport -->
@defer (on viewport) {
  <app-comments [postId]="post().id" />
} @placeholder {
  <div class="skeleton" style="height: 200px"></div>
} @loading (minimum 500ms) {
  <app-spinner />
} @error {
  <p>Failed to load comments.</p>
}

<!-- Load after 5 seconds -->
@defer (on timer(5000)) {
  <app-recommendation-panel />
}

<!-- Load on interaction -->
@defer (on interaction) {
  <app-share-panel />
}
```

---

## Template Reference Variables

```html
<!-- Reference a DOM element -->
<input #searchInput type="text" />
<button (click)="search(searchInput.value)">Search</button>

<!-- Reference a component instance -->
<app-form #myForm />
<button (click)="myForm.submit()">Submit</button>
```

---

## Built-in Pipes

```html
{{ price | currency:'USD' }}
{{ date | date:'mediumDate' }}
{{ name | uppercase }}
{{ text | slice:0:100 }}
{{ data | json }}
{{ value | async }}         <!-- subscribes to Observable/Promise -->
{{ num | number:'1.0-2' }} <!-- 1,234.56 -->
```

---

## Template Expressions Best Practices

- Keep expressions simple — no method calls that have side effects
- Avoid complex logic in templates — move to `computed()` or component methods
- Never mutate state in template expressions
- Use `track` in every `@for` loop

---

## Related Topics

- **Previous:** [Components](./components)
- **Next:** [Directives](./directives)
