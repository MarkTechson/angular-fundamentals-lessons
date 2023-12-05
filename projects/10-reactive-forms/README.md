# 10-reactive-forms

## Run this example

From the command line at the root of the project:

```bash
ng serve 10-reactive-forms
```

## Instructions

### Enable Reactive Forms

1. In `app.component.ts`, import `ReactiveFormsModule` at the file level.

1. Next, add `ReactiveFormsModule` to the `imports` array of the `AppComponent`.

### Define the form controls model

1. In `app.component.ts`, import `FormGroup` and `FormControl` from `@angular/forms`.

1. Define a property in `AppComponent` called `blogForm` and assign it to a new instance of `FormGroup`.

1. Add two `FormControls`: `title` and `body`.

### Bind the form to the template

1. Update the `form` element of the template to property bind `formGroup` to `blogForm`.

1. Next, update the `form` element to bind to the `ngSubmit` event, use the `handleFormSubmit()` as the value.

1. Update `input#title` by adding the `formControlName` attribute directive and set the value to `title`.

1. Update `textarea#body` by adding the `formControlName` attribute directive and set the value to `body`.

### Implement `handleFormSubmit`

1. Call the `postBlog()` function and pass in the `title` and `body` as parameters.

1. Save your changes.

1. Confirm that your changes have been made in the browser. Open the browser console to confirm the message that your post has been successfully posted.
