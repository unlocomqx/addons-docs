# Custom script

Currently, the module only has this flag that can be set using JavaScript:

## Skipping the summary modification

_(Available since v1.178.24)_

Normally, the module moves the summary out of the modal dialog and displays it in the page content.

If your theme already has a summary block in the page content, you can skip this modification by setting
the `dsn_skip_summary` flag to `true`:

```js
window.dsn_skip_summary = true;
```

This is to avoid having the summary displayed twice on the page.

## Custom coding

To help with custom coding, the module exposes several "stores" that are accessible under `window.dsn_stores`

You can use the subscribe function to listen to changes in the store:

```js
{
    design: 'Holds the design data',
    image: 'Contains the image tab parameters',
    layers: 'Holds the visual options data',
    prices: 'Contains the displayed prices',
    text: 'Contains the text tab parameters',
    ui: 'Represents the ui state'
}
```

```js
window.dsn_stores.design.subscribe(function (design_data) {
  console.log('Design store value changed:', design_data);
});
```
