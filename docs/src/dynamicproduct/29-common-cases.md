# Common cases

Here are some common cases that many merchants encounter. It can be a simpler way to get you started with the module.

Each feature will have a link to the corresponding documentation page. You can find more detailed information there.

You can also find many product examples in the [examples demo](https://dynamic-front.prestalife.net/)

## Examples

- [Charge based on a product area](#charge-based-on-a-product-area)
- [Add extra cost based on a selected option](#add-extra-cost-based-on-a-selected-option)
- [Add extra cost based on a checkbox](#add-extra-cost-based-on-a-checkbox)
- [Charge a minimum price](#charge-a-minimum-price)
- [Display a custom error message](#display-a-custom-error-message)
- [Read any variable from PrestaShop](#read-any-variable-from-prestashop)
- [Invert the tax calculation](#invert-the-tax-calculation)

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

You can create a [dropdown field](/dynamicproduct/product-config/07-fields.md#dropdown) called *
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

## Add extra cost based on a checkbox

You can create a [checkbox field](/dynamicproduct/product-config/07-fields.md#checkbox) called *gift_wrap* for example.

Then you can use it in the price formula like this:

```xls
[gift_wrap] * 5
```

or you can use the [IF](/dynamicproduct/15-formula-functions.md#if) function to add a cost only if the checkbox is checked

```xls
IF([gift_wrap], 5, 0)
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

<img srcset="/dynamicproduct/images/error-message-condition.jpg 2x" class="border">

## Read any variable from PrestaShop

In this example, we will read the customer group and apply a discount based on it.

1- Create a dynamic field called `customer_group` and set the type to `Dynamic Variable`.
2- Create a php file in `[Root of PrestaShop]/dynamicproduct/allocations/products.php` and add this code:

```php
<?php
if (isset($customer_group)){
    $context = Context::getContext();
    $default_lang = Configuration::get('PS_LANG_DEFAULT');
    $id_customer_group = (int)$context->customer->id_default_group;
    if($id_customer_group){
        $group = new Group($id_customer_group, $default_lang);
         // customer_group will contain assign Guest, Visitor, etc...
        $customer_group = $group->name;
    }
}
```

Then you can easily create discounts for each group of your choice using the [Intervals](/dynamicproduct/product-config/12-intervals.md) for example

### Example

An interval that varies the value of a discount field

<img srcset="/dynamicproduct/images/customer-groups-interval.png 2x" class="border">

Finally, you can use this discount field in your price formula

```xls
[width] * [height] * ( ( 100 - [discount] ) / 100 )
```

This will apply a discount based on the customer group.

<img srcset="/dynamicproduct/images/customer-group-discount.png 2x" class="border">

## Invert the tax calculation

By default, the module applies the tax to the calculated price.  
If you want to invert the tax calculation, you can use the [PHP calculation](/dynamicproduct/16-php-calculation.md) feature.

:one: Create a dynamic field called `tax_rate` and set the type to `Dynamic Variable`. 

:two: Create a php file in `[Root of PrestaShop]/dynamicproduct/allocations/products.php` and add this code:

```php
<?php
// Will continue only if you have a field called tax_rate
if (isset($tax_rate)){
    // first read the tax rate of the current product
    /** @var $module DynamicProduct */
    $tax_rate = $module->calculator->getTax($id_product);
}
```

Now, you can use the `tax_rate` field in your [price formula](./product-config/08-formulas.md#price-formula) or in any [field formula](./product-config/10-field-formulas.md) to invert the tax calculation.

:three: Use the field in your price formula 

```xls
([width] * [height]) / (1 + [tax_rate] / 100)
```

::: tip 
If you want to invert the tax calculation for any product that has a tax_rate field, you can add this code in the `[Root of PrestaShop]/dynamicproduct/calculator/products.php` file

```php
<?php
$result = $result / (1 + $tax_rate / 100);
```
:::

