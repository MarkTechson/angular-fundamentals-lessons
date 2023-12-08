# 09-template-driven-forms

Forms are a big part of many apps because they enable your app to accept user input. Let's learn about how forms are handled in Angular.

In Angular, there are two types of forms: template-driven and reactive. You'll learn about both over the next few activities.

In this activity, you'll learn how to setup a form using a template-driven approach.

## Run this example

From the command line at the root of the project:

```bash
ng serve 09-template-driven-forms
```

## Instructions

### Create the form elements

1. In `app.component.ts`, define an `input` element:

   - `type="text"`
   - `id="title"`.

1. Next, define a `textarea` element:
   - `id="body"`

### Create the model data

1. In the body of `AppComponent` class, add two `string` properties: `title` and `body`

### Configure the form

1. In `app.component.ts`, import `FormsModule` at the file level.

1. Add `FormsModule` to the `imports` array of the `AppComponent`.

1. Update the `input` element to bind `[(ngModel)]` to the `title` property of `AppComponent`.

1. Update the `textarea` element to bind `[(ngModel)]` to the `body` property of `AppComponent`.

1. Add string interpolation for both properties to confirm that the values are being bound properly.

1. Save your changes.

1. Confirm in the browser that th properties are updated properly.
