---
id: custom-validators
title: Angular Custom Validators
sidebar_label: Custom Validators
description: Creating synchronous and asynchronous custom validators in Angular reactive forms.
---

# Angular Custom Validators

## Synchronous Validator

```typescript
export function strongPassword(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: string = control.value ?? '';
    const errors: Record<string, boolean> = {};

    if (!/[A-Z]/.test(value)) errors['noUppercase'] = true;
    if (!/[a-z]/.test(value)) errors['noLowercase'] = true;
    if (!/\d/.test(value)) errors['noNumber'] = true;
    if (!/[!@#$%^&*]/.test(value)) errors['noSpecialChar'] = true;

    return Object.keys(errors).length ? errors : null;
  };
}
```

---

## Asynchronous Validator

```typescript
export function uniqueUsernameValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    if (!control.value) return of(null);

    return timer(300).pipe(                    // debounce
      switchMap(() => userService.checkUsername(control.value)),
      map(available => available ? null : { usernameTaken: true }),
      catchError(() => of(null))              // fail open on API error
    );
  };
}

// Usage
username: this.fb.control('', {
  validators: [Validators.required],
  asyncValidators: [uniqueUsernameValidator(this.userService)],
  updateOn: 'blur',
})
```

---

## Error Display Component

```typescript
@Component({
  selector: 'app-field-error',
  standalone: true,
  template: `
    @if (control.invalid && (control.touched || control.dirty)) {
      <div class="field-errors" role="alert" aria-live="polite">
        @for (error of errorMessages(); track error) {
          <p class="field-error">{{ error }}</p>
        }
      </div>
    }
  `,
})
export class FieldErrorComponent {
  control = input.required<AbstractControl>();
  messages = input<Record<string, string>>({});

  errorMessages = computed(() => {
    const errors = this.control().errors ?? {};
    return Object.keys(errors).map(key => this.messages()[key] ?? key);
  });
}
```

---

## Related Topics

- **Previous:** [Form Validation](./form-validation)
- **Related:** [Reactive Forms](./reactive-forms)
