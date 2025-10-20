# Interface options

<img srcset="/productdesigner/images/configuration.jpg 2x" class="mt-1">

## Hide standard cart button

This option hides the PrestaShop cart button so that the customer customizes the product then uses
the add to cart button that is inside the module.

::: details Advanced
If the module doesn't succeed in hiding the cart button then it means that your theme has a
different html structure compared to the default theme.
For that you can use [custom CSS](/productdesigner/06-custom-style.md) to hide the cart button.
The module adds a class to the `body` called `dsn-hide-cart-button` so you can write this CSS for
example to hide the cart button

```css
body.dsn-hide-cart-button button.add-to-cart {
  display: none;
}
```

Customize the CSS selector to work on your theme, this requires CSS knowledge
:::

## Hide standard quantity box

This options hides the PrestaShop quantity box. The user can then enter the quantity in the module
interface.

::: details Advanced
Sometimes, the theme has a different html structure than the default theme, so the module can't
correctly hide the quantity input.
The solution is to add [custom CSS code](/productdesigner/06-custom-style.md) to hide the quantity
input.
The module adds a class to the `body` which is called `dsn-hide-qty-input`, so you can write code
like this

```css
body.dsn-hide-qty-input div.qty {
  display: none;
}
```

:::

## Show the customize button

This will display a customize button that when clicked, will show the module interface.

<img srcset="/productdesigner/images/customize.jpg 2x">

## Show product attributes in tabs

This option will display the PrestaShop attributes inside the module interface.

<img srcset="/productdesigner/images/attributes.jpg 2x">

## Show the interface in a popup

This is useful if you don't want the module to take space on your page or to be initially visible.

::: tip
When you enable this option, make sure that the [customize button](#show-the-customize-button) is
enabled so that the popup can be accessed.
:::

## Show the popup on page load

Enable this option if you want the customer to start customizing the product right away.

## Defer loading of the module

Enable if you want your product pages to load faster. The module will wait for the page load, then
it will load its scripts.

This can help with the page score.

## Display the total price

If enabled, the module will multiply the price by the quantity instead of displaying the unit price.

<img srcset="/productdesigner/images/total-price.jpg 2x">

## Show Dynamic Product in the product tab

This option is only available if you have the [Dynamic Product](https://docs.prestalife.net/dynamicproduct/) module installed.
It allows you to display the dynamic product fields in the designer interface like this

<img srcset="/productdesigner/images/dynamic-designer.jpg 2x">
