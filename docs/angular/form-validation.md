---
id: form-validation
title: Angular Form Validation
sidebar_label: Form Validation
description: Angular form validation — built-in validators, cross-field validation, async validators, and accessible error messages.
---

# Angular Form Validation

## Built-in Validators

```typescript
import { Validators } from '@angular/forms';

this.fb.group({
  name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(50)]],
  email: ['', [Validators.required, Validators.email]],
  age: [null, [Validators.min(18), Validators.max(120)]],
  website: ['', [Validators.pattern(/^https?:\/\/.+/)]],
});
```

---

## Cross-Field Validation

```typescript
export function passwordMatchValidator(): ValidatorFn {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get('password')?.value;
    const confirm = group.get('confirmPassword')?.value;
    return password === confirm ? null : { passwordMismatch: true };
  };
}

// Apply to the group
this.fb.group({
  password: ['', [Validators.required, Validators.minLength(8)]],
  confirmPassword: ['', Validators.required],
}, { validators: passwordMatchValidator() });
```

---

## Accessible Error Messages

```html
<div class="form-field">
  <label for="email">Email address</label>
  <input
    id="email"
    formControlName="email"
    type="email"
    autocomplete="email"
    [attr.aria-describedby]="email.invalid && email.touched ? 'email-error' : null"
    [attr.aria-invalid]="email.invalid && email.touched"
  />
  @if (email.invalid && email.touched) {
    <p id="email-error" class="field-error" role="alert">
      @if (email.errors?.['required']) { Email is required. }
      @if (email.errors?.['email']) { Enter a valid email address. }
    </p>
  }
</div>
```

---

## Related Topics

- **Previous:** [Reactive Forms](./reactive-forms)
- **Next:** [Custom Validators](./custom-validators)
