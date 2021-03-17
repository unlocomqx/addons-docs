# Settings

In this tab, you can find the general product settings.  
<img srcset="/images/module-interface.jpg 2x" class="border">

---

## Enable the module for this product

If enabled, the fields will be displayed on the current product page

<img srcset="/images/enable-option.jpg 2x" class="border">

---

## Required customization

When enabled, an error will be displayed if the customization is not completely filled

---

## Displayed price

If you set the product base to 0, you can use this option to display a price in the category page.  

<img srcset="/images/display-price-config.jpg 2x" class="border">

The price will be displayed like this  

<img srcset="/images/display-price.jpg 2x">

::: tip
The module applies the configured tax to the displayed price
:::

### Price unit

If filled, the price unit will be displayed like this  

<img srcset="/images/price-unit.jpg 2x">

### Display the calculated price

You can also display the calculated price which will be calculated based on the initial values of your fields

---

## Display weight to customers

When enabled, the result of the [weight formula](product-config/08-formulas.md?id=weight-formula) will be displayed  

<img srcset="/images/display-weight.jpg 2x" class="border padding">

---

## Hide quantity input

When enabled , the module will hide the PrestaShop quantity field  
If the input is not hidden correctly, you can hide it using custom css

```css
/* Example */
body.dp-hide-qty .product-quantity {
  display: none !important;
}
```

---

## Multiply price & weight by quantity

If activated, the displayed price & weight on the product page will be multiplied by the quantity


---

## Copying configurations

You can copy a configuration from one product to another or from a product to a category

### Load configuration

You can copy a product configuration to the current product by picking a product from the list

<img srcset="/images/load-config.jpg 2x" class="border padding">

:::warning
The configuration of the current product will be overwritten
:::

### Copy configuration

You can copy the current product configuration to any category of your choice.

<img srcset="/images/copy-config.jpg 2x" class="border padding">

:::warning
The configuration of all the products of the selected category will be overwritten
:::

### Import / Export configuration

You can also import / export the configuration as a file or copy / paste it from clipboard

<img srcset="/images/import-export.jpg 2x" class="border padding">

## Advanced configuration

In the advanced configuration, you can change the calculation order if needed.  
You can access the advanced configuration from the `Settings` tab and you can find it in the bottom of this tab.  
This is the default calculation order that the module follows:

1. [Intervals](product-config/12-intervals.md)
2. [Field formulas](product-config/10-field-formulas.md)
3. [Grids](product-config/13-grids.md)
4. [Conditions](product-config/09-conditions.md)

In the following example, a custom execution order is configured where the field formulas are calculated after the grids

<img srcset="/images/exec-order.jpg 2x" class="padding border">

This is useful when you have a field that is modified by a grid and that you want to use it in a field formula.

::: tip
You can add a calculation step more than once if needed
:::
