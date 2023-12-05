# 03-component-composition

You've learned to update the component template, component logic and components styles, but how do you use a component in your application?

The selector property of the component configuration gives you a name to use when referencing the component in another template. You use the selector like an HTML tag, for example app-user would be <app-user /> in the template

In this activity you'll learn how to compose components.

## Run this example

From the command line at the root of the project:

```bash
ng serve 03-component-composition
```

## Instructions

1. In `src/app.component.ts`, update the component template to refer to the `UserInfoComponent`. Create this comoponent with the following command from the root folder of the project:

```bash
ng generate component userinfo --project 03-component-composition
```

_Note_ Because of the project structure we have to pass the `--project` flag, for a single project workspace

2. Save your changes.

3. Stop any previously running apps and from the command line run:

```bash
ng serve 03-component-composition
```

4. Navigate to `http://localhost:4200` and confirm that the application has been updated successfully.
