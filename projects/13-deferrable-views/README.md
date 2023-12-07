# 13-deferrable-views

Deferrable views can be used in component template to defer the loading of select dependencies within that template. Those dependencies include components, directives, and pipes, and any associated CSS. To use this feature, you can declaratively wrap a section of your template in a @defer block which specifies the loading conditions.

## Run this example

From the command line at the root of the project:

```bash
ng serve 13-deferrable-views
```

## Instructions

1. Add a `@defer` block that defers the loading of the `<app-posts />` component.
1. Try out other triggers:

   - `on idle`
   - `on immediate`
   - `on timer(...)`
   - `on viewport(...)`
   - `on interaction(...)`
   - `on hover(...)`

1. Implement other blocks:
   - `@placeholder`, also try `(minimum 500ms)`
   - `@loading`, also try `(after 500ms; minimum 1s)`
   - `@error`
1. Save your changes.
1. Confirm the updates in the browser.
