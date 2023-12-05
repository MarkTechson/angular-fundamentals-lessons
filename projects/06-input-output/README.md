# 06-input-output (and recap)

Sometimes app development requires you to send data into a component. This data can be used to customize a component or perhaps send information from a parent component to a child component.

Angular uses a concept called Input. This is similar to props in other frameworks. To create an Input property, use the @Input decorator.

When working with components it may be required to notify other components that something has happened. Perhaps a button has been clicked, an item has been added/removed from a list or some other important update has occured. In this scenario components need to communicate with parent components.

Angular uses the @Output decorator to enable this type of behavior.

In this activity you'll learn:

- how to use the @Input decorator to send information to components.
- how to use the @Output decorator and EventEmitter to communicate with components.
- you may have to use multiple features of Angular that you have learned so far to complete this task.

## Run this example

From the command line at the root of the project:

```bash
ng serve 06-input-output
```

## Instructions

### Use the inputs feature to refactor the code

1. Move the listing component template structure to the `ListingComponent` template in `listing.component.ts`.

1. Add an `@Input` property called `car` of type `Car` to `ListingComponent`.

   _Note, don't forget to import the `Input` decorator._

1. In `app.component.ts`, add a reference to the `ListingComponent` component via the selector, replacing the previous content that was moved to the `ListingComponent` template.

   _Note, be sure to add `ListingComponent` to the component `imports` array._

1. Next, iterate over the `carList` property of `AppComponent` with `@for` and pass in the refence `car` to the `input`.

   _Hint: Don't forget your brackets._

### Use outputs to add more interactivity

1. In `listing.component.ts` add a button to the `ListingComponent` with the label `Save`. This button will be used to save a car to a `savedCarList`` in the application.

1. Next, create a new `@Output` property called `carSaved` of type `EventEmitter` that emits type of `Car`.

1. Add a `click` event handler to the `<button>Save</button>` element in the `ListingComponent` template assign it the value `handleCarSaved()`.

1. Implement the `handleCarSaved` method in the body of the `ListingComponent` and `emit` the current `car` property.

1. In the template of `AppComponent` bind to the `carSaved` event (@Output property) from `ListingComponent`. Assign it the value `addCarToSaved($event)`.

1. In the body of `AppComponent` implement `addCarToSaved()` by adding the car to the `savedCarList` (of type `Car[]`) property of `AppComponent`.

### Check the output

1. Save your changes.
1. Confirm the changes in the browser.
