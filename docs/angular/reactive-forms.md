---
id: reactive-forms
title: Angular Reactive Forms
sidebar_label: Reactive Forms
description: Angular Reactive Forms — FormControl, FormGroup, FormArray, typed forms, validators, and enterprise patterns.
---

# Angular Reactive Forms

## Introduction

Reactive Forms provide a model-driven approach to form handling. The form model lives in the component class — giving full TypeScript type safety and making forms easy to test.

---

## FormGroup and FormBuilder

```typescript
@Component({
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <form [formGroup]="form" (ngSubmit)="onSubmit()">
      <label for="email">Email</label>
      <input id="email" formControlName="email" type="email" />
      @if (email.errors?.['required'] && email.touched) {
        <span class="error">Email is required</span>
      }
      @if (email.errors?.['email'] && email.touched) {
        <span class="error">Enter a valid email</span>
      }

      <label for="name">Name</label>
      <input id="name" formControlName="name" />

      <button type="submit" [disabled]="form.invalid || isSubmitting()">
        {{ isSubmitting() ? 'Saving...' : 'Save' }}
      </button>
    </form>
  `,
})
export class ProfileFormComponent {
  private readonly fb = inject(NonNullableFormBuilder);
  protected isSubmitting = signal(false);

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    role: ['user' as const],
  });

  get email() { return this.form.controls.email; }

  async onSubmit() {
    if (this.form.invalid) return;
    this.isSubmitting.set(true);
    // submit...
    this.isSubmitting.set(false);
  }
}
```

---

## Custom Validators

```typescript
// Sync validator
export function noWhitespace(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const hasWhitespace = /\s/.test(control.value);
    return hasWhitespace ? { whitespace: true } : null;
  };
}

// Async validator (e.g., check email availability)
export function uniqueEmailValidator(userService: UserService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    return userService.checkEmailAvailable(control.value).pipe(
      map(available => available ? null : { emailTaken: true }),
      catchError(() => of(null))
    );
  };
}
```

---

## FormArray — Dynamic Fields

```typescript
form = this.fb.group({
  skills: this.fb.array<string>([]),
});

get skills() {
  return this.form.controls.skills;
}

addSkill() {
  this.skills.push(this.fb.control('', Validators.required));
}

removeSkill(index: number) {
  this.skills.removeAt(index);
}
```

---

## Related Topics

- **Previous:** [Template-Driven Forms](./template-driven-forms)
- **Next:** [Form Validation](./form-validation)
