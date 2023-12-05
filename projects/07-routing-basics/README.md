# 07-routing-basics

For most apps, there comes a point where the app requires more than a single page. When that time inevitably comes, routing becomes a big part of the performance story for users.

In this activity, you'll learn how to setup and configure your app to use Angular Router.

## Run this example

From the command line at the root of the project:

```bash
ng serve 07-routing-basics
```

## Instructions

### Enable Routing in the application

1. In `app.routes.ts`, add a the default route path (`''`) that routes to the `GreetingsComponent` in the `routes` array.

1. In `app.config.ts`, enable routing in the application by updating the `providers` array with an entry the following entry:

   ```typescript
   provideRouter(routes);
   ```

### Add a router outlet to display the routes

1. In `app.component,ts`, import `RouterModule` at the file level, then add it to the component `imports` array.

1. Next, add a `<router-outlet />` to the template of 'AppComponent'.

1. Save your changes.

1. Confirm that the updates are reflected in the browser. In this case you should see a greeting rendered in the browser.

_Be sure to stop any previously running instances of the application_
