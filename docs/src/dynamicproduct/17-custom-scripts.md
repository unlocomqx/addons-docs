# Custom scripts

You can use custom scripts to customize the module behaviour.  
You can create javascript files in these folders:

- `/js/dynamic` (create the `dynamic` folder if it doesn't exist)
- `/themes/[current theme]/assets/js/dynamic`

The file name should be:

- `custom.js` (if you want to target all products)
- `customX.js` (if you want to only target the product with ID=**X**)  
  For example, if you want to target product `#10`, you can create a file named `custom10.js`

## Detecting when the module is loaded

Since the module loading is deferred, you need to listen for the `dp-loaded` event in order to
execute your custom script correctly

```js
$(document).on("dp-loaded", function () {
  // ... your custom script
});
```

## Detecting a field change

To detect a field change, you can create a function with the same name as the field but prefixed
with `dp_`.  
For example, if you have a field named `width`, you can create a function named `dp_width`.  
Code example:

```js
function dp_width(value) {
  // The current value of the field
  console.log(value);
}
```

If you have a field which has options, the selected options will also be passed to the custom
function

```js
function dp_dropdown(value, selected_options) {
  // selected_options is an array containing the IDs of the selected options
  console.log(value, selected_options);
}
```

## Updating the properties of a field

You can change a field properties from the custom script, for that you need to use the `updateField`
function.  
Code example:

```js

updateField(field_name, props);

// This example will change the value of the width field as well as the min, max and step properties
updateField("width", {
  value: 50,
  min: 10,
  max: 100,
  step: 10
});
```

The props object can have these items

```ts
// The props interface has this shape
export interface IFieldSettings {
  value: string | number;
  value_formatted: string;
  min: number;
  max: number;
  step: number;
  required: number;
  max_size: number;
  min_date: string;
  max_date: string;
  multiselect: boolean;
  display_value_price: number;
  display_secondary_value_price: number;
  display_in_popup: number;
}
```

Some field types display the `value_formatted` property, such as the price field.

To update it, you can use this code for example

```js
updateField("price_field", {
  value: 50,
  value_formatted: '50€'
});
```

## Get a field properties

You can use the `getField` function to get the properties of a field.

```js
getField(field_name);
var props = getField("width");
```

The value of `props` will have this shape

```js
{
  active: 1
  common: 0
  description: ""
  dir: "/dynamicproduct/images/field"
  ext: ".jpg"
  favorite: 0
  force_id: false
  id: 66
  id_group: "0"
  id_product: 11
  id_unit: 0
  image_url: null
  init: 0
  label: "Width"
  linked: "0"
  name: "width"
  options: []
  position: "2"
  settings: {
    color: null
    dir: null
    display_in_popup: null
    display_secondary_value_price: null
    display_value_price: null
    ext: ".jpg"
    extensions: null
    extra: null
    force_id: false
    hide_when_empty: 1
    id: null
    id_field: 66
    id_unit: null
    init: null
    max: null
    max_date: null
    max_size: null
    min: null
    min_date: null
    min_height: null
    min_width: null
    multiselect: null
    position: null
    price_unit: null
    required: null
    show_in_summary: 0
    step: 1
    thumb_suffix: "-thumb.jpg"
  }
  thumb_suffix: "-thumb.jpg"
  thumb_url: null
  type: 1
  unit: {
    dir: null
    displayed: 1
    ext: ".jpg"
    force_id: false
    id: null
    name: null
    position: null
    symbol: null
    thumb_suffix: "-thumb.jpg"
  }
  value: ""
}
```

## Detecting a calculation result

You can subscribe to the module stores in order to detect the calculation results.  
The module uses [`Svelte stores`](https://svelte.dev/docs#svelte_store) under the hood.

Code example:

```js
dp_calc.subscribe(function (data) {
  console.log(data);
});
```

The data will have this shape

```js
{
  customization_prices: {
    price_ht: 10
    price_ht_nr: 10
    price_ttc: 12
    price_ttc_nr: 12
  }
  debug_messages: null
  final_prices: {
    price_ht: 20
    price_ht_nr: 20
    price_ttc: 24
    price_ttc_nr: 24
  }
  formatted_prices: {
    price_ht: "€20.00"
    price_ht_nr: "€20.00"
    price_ttc: "€24.00"
    price_ttc_nr: "€24.00"
  }
  formatted_unit_prices: {
    price_ht: "€20.00"
    price_ht_nr: "€20.00"
    price_ttc: "€24.00"
    price_ttc_nr: "€24.00"
  }
  input_fields: {
    width: {
      dir: null
      ext: ".jpg"
      field: {
        // information about the field, similar to the value returned by getField
      }
      force_id: false
      id: null
      id_field: 66
      id_input: 0
      id_shop_list: []
      image_url: null
      label: "Width"
      name: "width"
      options: "[]"
      position: null
      secondary_value: "0"
      selected_options: []
      thumb_suffix: "-thumb.jpg"
      thumb_url: null
      type: 1
      value: 0
      value_formatted: 0
      visible: 1
    }
  }
  met_conditions: []
  oos: false
  success: 1
  unit_prices: {
    price_ht: 20, price_ht_nr
  :
    20, price_ttc
  :
    24, price_ttc_nr
  :
    24
  }
  use_tax: true
  visibility: {
    groups: []
  }
  weight: 0
  weight_formatted: "0 kg"
}
```

## Detecting any change on fields

You can subscribe to the fields store to detect any change on the fields.  
The result will be an object containing each field Example code

```js
dp_fields.subscribe(function (fields) {
  console.log(fields);
});
```

The fields variable will have this shape

```js
{
  width: {
    dir: null
    ext: ".jpg"
    field: {
      // information about the field, similar to the value returned by getField
    }
    force_id: false
    id: null
    id_field: 0
    id_input: 0
    id_shop_list: []
    image_url: null
    label: null
    name: "changed"
    options: ""
    position: null
    secondary_value: "0"
    selected_options: ""
    thumb_suffix: "-thumb.jpg"
    thumb_url: null
    type: 4
    value: "width"
    value_formatted: "width"
    visible: 0
  }
,
  height: {
    // same shape as the width field 
  }
,
  // ...
}
```

## Validating the fields

If you need to validate the fields programmatically, you can use the `validateFields` function.

Example code:

```js
var isValid = validateFields();
// isValid will be either true or false based on the validity of the fields
// The module will highlight errors and will scroll to the first visible error
```

## Saving the customization

If you need to save the customization programmatically, then you can use the `dpSaveCustomization`

Example code

```ts
// Signature
declare function dpSaveCustomization (add_to_cart: boolean): Promise<any>;
```

Usage

```js
dpSaveCustomization(true).then(function (response) {
  // response is either true or false based on the success of the operation
});
```

## Changing the module position in the page

You can change the module position by changing the `dp_hook` variable and set it to any selector or
html element.  
The module will then be positioned inside the selected hook. If you want to position the module after the hook, you can
use the `dp_hook_after` variable.  
Examples:

```js
window.dp_hook = "#my_location"; // A jQuery selector
window.dp_hook = $("#my_location"); // A jQuery element
window.dp_hook = document.getElementById("my_location"); // A DOM element
```

::: tip
You can also use the [custom hook](/dynamicproduct/28-custom-hook.md) in your theme tpl.
:::

## Setting the price element

In some cases, the module isn't able to find the price element because the theme has a different
html structure than the default theme. To fix that, you can set the variable `dp_price_hook` to tell
the module which element to update after calculating the price.

Code example

```js
window.dp_price_hook = ".product-prices span.price";
```

To indicate the regular price element (in case you have a discount that is displayed), you can set the
variable `dp_regular_price_hook`

```js
window.dp_regular_price_hook = ".product-prices span.regular-price";
```

## Customizing the discount table

You can change the prices that are displayed on the discount table by changing these variables:

```ts
// The index of the column that contains the discount. 
// Default: -1 (last column)
window.dp_discounts_td_index = -1

// The type of the discount. Can be "totals" | "unit_prices" | "savings" | "disabled". 
// Default: "totals"
window.dp_discounts_display_type = "totals"
```

## Customizing the preview function

You can set the selectors for the product images section if your theme has a different html
structure than the default theme.

### Product images section

```ts
// The selector for the product images section. 
// Default: ".product-images"
window.dp_product_images_selector = ".product-images"
```

<img srcset="/dynamicproduct/images/product_images_selector.png 2x" class="border">

### Image container section

```ts
// The whole product preview section. 
// Default: ".images-container"
window.dp_images_container_selector = ".images-container"
```

### Product cover section

```ts
// The cover image section. 
// Default: ".images-container .product-cover"
window.dp_product_cover_selector = ".images-container .product-cover"
```

<img srcset="/dynamicproduct/images/product_cover_selector.png 2x" class="border">

## Other custom jQuery selectors

You can set custom jQuery selectors for a few elements, such as the cart button and the product
image

Code example

```js
window.dp_cart_btn_selector = "...";
window.dp_product_image_selector = "...";
```

## Custom fields

Check how to create custom fields [here](/dynamicproduct/27-custom-fields.md)