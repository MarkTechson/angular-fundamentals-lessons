# 00-basic-app

In this example your task is to update this application code to enable it to run.

Did you know you can see these instructions formatted by pressing

- Mac - CMD + SHIFT + V?
- Win/Lin - CTRL + SHIFT + V

## Instructions.

1. In `src/main.ts`, add the following code to the end of the file.

```ts
bootstrapApplication(AppComponent, appConfig).catch((err) =>
  console.error(err)
);
```

2. Save your changes.

3. From the command line, root directory `angular-fundamentals-lessons`, run the following command:

```bash
ng serve 00-basic-app
```

The application will properly load and be visible in the browser.
