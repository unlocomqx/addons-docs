# Common cases

Here are some common cases that many merchants encounter. It can be a simpler way to get you started with the module.

Each feature will have a link to the corresponding documentation page. You can find more detailed information there.

You can also find many product examples in the [examples demo](https://dynamic-front.prestalife.net/)

## Examples

- [Charge based on a product area](#charge-based-on-a-product-area)
- [Add extra cost based on a selected option](#add-extra-cost-based-on-a-selected-option)
- [Charge a minimum price](#charge-a-minimum-price)
- [Display a custom error message](#display-a-custom-error-message)

## Charge based on a product area

Create a width and height [field](/dynamicproduct/product-config/07-fields.md) then configure
this [price formula](/dynamicproduct/product-config/08-formulas.md) for example:

```xls
[width] * [height] * 10
```

But in most cases, the fields are in centimeters, so you need to convert them to meters:

```xls
[width] * [height] / 10000 * 10
```

In this case, you are charging 10€ for each square meter.

::: tip
In the docs, Euros are used, but it depends on your shop's default currency.
:::

You can even create a [dynamic variable field](/dynamicproduct/product-config/07-fields.md#dynamic-variable) called *
*area** and assign the area to it using a [field formula](/dynamicproduct/product-config/10-field-formulas.md).

Then you can use this variable in the price formula:

```xls
[area] = [width] * [height] / 10000
```

Then the price formula becomes:

```xls
[area] * 10
```

## Add extra cost based on a selected option

You can create a [dropdown field](http://localhost:8080/dynamicproduct/product-config/07-fields.md#dropdown) called *
*material** with
options like:

- Metal
- Wood
- Plastic

Then you can assign a value to each option of the dropdown and use the field directly in the price formula:

```xls
[material]
```

The field value will be replaced by the value of the selected option.

So it will be easy to add many options like this

```xls
[material] + [color] + [size] // etc...
```

You can even charge based on the **area** and **material** like this

```xls
[area] * [material]
```

## Charge a minimum price

You can use the `max` [function](/dynamicproduct/15-formula-functions.md#max) to set a minimum price. For example, if
you want to charge at least 10€:

```xls
MAX(10, [area] * 10)
```

The `max` function will return the highest value between the two.

## Display a custom error message

You can use the [error message field](/dynamicproduct/product-config/07-fields.md#error-message) to display a custom
error.

Then you can control the visibility of the error message using
a [condition](/dynamicproduct/product-config/09-conditions.md).

### Example

Display an error when the ordered area is less than 1 square meter:

Condition formula:

```xls
[area] >= 1
```

Then you can hide the error message in the condition fields.
