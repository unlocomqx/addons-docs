# Configuration

You can change the global settings of the module in the main configuration.  
This page contains a configuration that is common to all products, such as the available text colors and fonts etc...

<img srcset="/productdesigner/images/configuration.jpg 2x">

This documentation will not go through all the settings since most of them are straightforward and don't require an explanation.   
Below are the various configuration sections

## Interface options

### Hide standard cart button
This option hides the PrestaShop cart button so that the customer customizes the product then uses the add to cart button that is inside the module.

::: details Advanced
If the module doesn't succeed in hiding the cart button then it means that your theme has a different html structure compared to the default theme.  
For that you can use custom CSS to hide the cart button.  
The module adds a class to the `body` called `dsn-hide-cart-button` so you can write this CSS for example to hide the cart button
```css
body.dsn-hide-cart-button button.add-to-cart {
  display: none;
}
```
Customize the CSS selector to work on your theme, this requires CSS knowledge
:::

### Hide standard quantity box
This options hides the PrestaShop quantity box. The user can then enter the quantity in the module interface.

::: details Advanced
Sometimes, the theme has a different html structure than the default theme, so the module can't correctly hide the quantity input.  
The solution is to add custom CSS code to hide the quantity input.  
The module adds a class to the `body` which is called `dsn-hide-qty-input`, so you can write code like this 
```css
body.dsn-hide-qty-input div.qty {
  display: none;
}
```
:::
