---
id: forms
title: HTML Forms
sidebar_label: Forms
description: HTML form elements, input types, validation attributes, fieldset/legend, and accessibility patterns.
---

# HTML Forms

## Form Structure

```html
<form action="/submit" method="post" novalidate>
  <fieldset>
    <legend>Personal Information</legend>

    <div class="form-field">
      <label for="name">Full Name <span aria-hidden="true">*</span></label>
      <input
        id="name"
        name="name"
        type="text"
        autocomplete="name"
        required
        minlength="2"
        aria-required="true"
        aria-describedby="name-hint"
      />
      <p id="name-hint" class="hint">Enter your legal name.</p>
    </div>

    <div class="form-field">
      <label for="email">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        autocomplete="email"
        required
      />
    </div>
  </fieldset>

  <button type="submit">Submit</button>
  <button type="reset">Reset</button>
</form>
```

## Input Types

```html
<input type="text" />
<input type="email" />
<input type="password" />
<input type="number" min="0" max="100" step="1" />
<input type="tel" />
<input type="url" />
<input type="search" />
<input type="date" />
<input type="time" />
<input type="checkbox" />
<input type="radio" />
<input type="range" min="0" max="100" />
<input type="file" accept=".pdf,.jpg" multiple />
<input type="color" />
<input type="hidden" value="csrf-token" />
<textarea rows="5" cols="40"></textarea>
<select><option value="ng">Angular</option></select>
```

## Validation Attributes

```html
required
minlength="2" maxlength="50"
min="0" max="100"
pattern="[A-Za-z]{3}"
type="email"  <!-- validates email format -->
```

---

## Related Topics

- **Previous:** [Images and Media](./images-and-media)
- **Next:** [Tables](./tables)
