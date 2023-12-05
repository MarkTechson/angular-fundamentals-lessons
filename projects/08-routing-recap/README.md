# 08-routing-recap

In this activity, you'll learn

- how to leverage the RouterLink directive to make the most use of Angular Router.
- how to get paremeters from the dynamic urls

## Run this example

From the command line at the root of the project:

```bash
ng serve 08-routing-recap
```

## Instructions

### Define Routes & add `<router-outlet />`

1. In `app.routes.ts`, define a route for `HomeComponent` as the default route.

1. Define routes for `DetailsComponent`, add a URL parameter to the path for `DetailComponent` called `id` -

   ```
   /details/:id
   ```

1. In `app.component.ts`, add the `<router-outlet />` to component template.

### Update components

1. In `app.component.ts`, dynamically generate a list of links for products in `productTitles`.

   - Generate a link and use the `routerLink` attribute.

   - Use the index of the `productTitles` element

   _Hint, you can access ` $index`` in the context of the  `@for` [@for documentation](https://angular.dev/api/core/@for)_

1. In, `details.component.ts`, create a property called `productId` of type `number`.

1. In detail component define an `@Input` property called `id` and create `setter` function for it:

   ```typescript
   @Input() set id(value: number) {
       this.productId = value;
   }
   ```

1. Update the `DetailsComponent` template to reference the product from the product list that at the indeces for `productId`.

1. Save your changes.

1. Confirm that you can now route between products in the browser.
