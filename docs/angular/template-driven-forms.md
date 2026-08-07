---
id: template-driven-forms
title: Angular Template-Driven Forms
sidebar_label: Template-Driven Forms
description: Angular Template-Driven Forms — ngModel, form validation, and when to choose template-driven over reactive.
---

# Angular Template-Driven Forms

## Introduction

Template-driven forms define the form model in the template using Angular directives. They are simpler for basic forms but less powerful than reactive forms for complex scenarios.

---

## Basic Template-Driven Form

```typescript
@Component({
  standalone: true,
  imports: [FormsModule],
  template: `
    <form #f="ngForm" (ngSubmit)="onSubmit(f)">
      <label for="email">Email</label>
      <input
        id="email"
        name="email"
        type="email"
        ngModel
        required
        email
        #emailField="ngModel"
      />
      @if (emailField.invalid && emailField.touched) {
        <span class="error">Valid email is required</span>
      }

      <button type="submit" [disabled]="f.invalid">Submit</button>
    </form>
  `,
})
export class ContactFormComponent {
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value); // { email: '...' }
    }
  }
}
```

---

## Two-Way Binding with ngModel

```html
<input [(ngModel)]="searchQuery" name="search" />
<p>Searching for: {{ searchQuery }}</p>
```

---

## When to Choose Template-Driven vs Reactive

| Template-Driven | Reactive |
|---|---|
| Simple forms (login, contact) | Complex forms with dynamic fields |
| Less boilerplate | Full TypeScript type safety |
| Harder to unit test | Easy to test without DOM |
| Angular manages the model | Developer owns the model |

For new code in large applications, prefer reactive forms. Template-driven forms are appropriate for simple, low-stakes forms.

---

## Related Topics

- **Next:** [Reactive Forms](./reactive-forms)
- **Related:** [Angular Components](./components)
