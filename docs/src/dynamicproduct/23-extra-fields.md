# Extra fields

In addition to the fields that you create in
the [fields section](/dynamicproduct/product-config/07-fields.md), the module provides a number of
other fields that you can use in your formula as well as in your php codes.

To access these extra fields, click the show more button in any formula panel

<img srcset="/dynamicproduct/images/show-more.jpg 2x">

The fields will be displayed like this

<img srcset="/dynamicproduct/images/more-fields.jpg 2x">

The following is an explanation of each section

## PrestaShop fields

<img srcset="/dynamicproduct/images/prestashop-fields.jpg 2x" class="border padding" style="margin-top: 10px;">

### product_price

The original product price without taxes and without reductions

This price may contain the current combination price impact

<img srcset="/dynamicproduct/images/product-price.jpg 2x" class="border padding">

### product_weight

The original product weight including the selected combination weight impact

<img srcset="/dynamicproduct/images/product-weight.jpg 2x" class="border padding">

### quantity

The quantity selected by the customer

<img srcset="/dynamicproduct/images/quantity-input.jpg 2x" class="border padding">

## Product attributes

<img srcset="/dynamicproduct/images/product-attributes.jpg 2x" class="border padding" style="margin-top: 10px;">

This section will display the list of the attributes that are used by the current product
combinations

The value of each field will contain the current value of the attribute that is selected by the
customer.

The attribute names are prefixed by `attribute_` and are transformed to lowercase and any accented
characters or symbols are removed in order to comply
with [fields names](/dynamicproduct/product-config/07-fields.md#name) rules.

## Databases

<img srcset="/dynamicproduct/images/databases.jpg 2x" class="border padding" style="margin-top: 10px;">

This section will be displayed if you have csv files in the `databases` data folder.  
Check the [Grid function](/dynamicproduct/15-formula-functions.md#the-grid-function) documentation
to learn more

## Features

<img srcset="/dynamicproduct/images/product-features.jpg 2x" class="border padding" style="margin-top: 10px;">

Similar to the attribute names section, this section will display product features. The value of
each field will contain the value of the corresponding product feature.

## Hidden fields

The module provides a field with the name `changed` which holds the name of the field that the
customer changed in order to trigger the calculation

This field is also available in [php](/dynamicproduct/16-php-calculation.md), via the variable `$changed`
