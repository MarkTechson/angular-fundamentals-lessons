# 11-dependency-injection

Creating an injectable service is the first part of the dependency injection (DI) system in Angular. How do you inject a service into a component? Angular has a convenient function called inject() that can be used in the proper context.

In this activity you'll learn

- how to create an injectable service.
- how to inject a service and use it in a component

## Run this example

From the command line at the root of the project:

```bash
ng serve 11-dependency-injection
```

## Instructions

### Make the service injectable

1. Add the `@Injectable` decorator to the `UserService` class, configure the `providedIn` to be `root`.

### Connect the service to the AppComponent

1. In `app.component.ts` do the following:

   - import `inject` from `@angular/core`
   - import `UserService` from `./user.service`
   - import `User` from `./data`

1. In the `AppComponent` class inject a reference to the `UserService`:

   ```typescript
   userService = inject(UserService);
   ```

1. Add a property called `userData` of type `User[]` with a default value of `[]`.

1. Add the following logic to the constructor:

   ```typescript
   this.userService.getUserData().then((data) => {
     this.userData = data;
   });
   ```

1. Add a `<app-user-info />` component the the template for each of the records in `userData`, bind a `user` entry to the `user` property of the component.

1. Save your changes.

1. Confirm your changes in the browser.

### (BONUS) Access real data via `fetch`

1. Replace the static data with an API call to `https://jsonplaceholder.typicode.com/users`, using `fetch`

   _Note, this will require changing the `UserService` and `AppComponent`_

### (BONUS) Extend this example to a profiles page

1. Make dynamic routes to the a user page
1. Pass data via the URL to the route using `@Input`
1. Add a function to request the resource by id from the placeholder API.
