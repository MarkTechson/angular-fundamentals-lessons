# 05-control-flow-for

Often when building web applications, you need to repeat some code a specific number of times - for example, given an array of names, you may want to display each name in a `<p>` tag.

In this activity you'll learn how to use `@for` to repeat elements in a template.

## Run this example

From the command line at the root of the project:

```bash
ng serve 05-control-flow-for
```

## Instructions

1. In `app.component.ts`, update the component template to repeat the `<article class='listing'>` element (and children) one time for each element of the `carsList`.

1. Update the template to use the properties from `carsList`.

1. Save your code.

1. Confirm that your changes are working in the browser.

(Bonus) What should be displayed if the there are no items in the list? Which construct should we use?
(Bonus) Try replacing images with the cars in the ones in the assets folder.
