# Configuration

You can change the global settings of the module in the main configuration.  
This page contains a configuration that is common to all products, such as the available text colors and fonts etc...

<img srcset="/productdesigner/images/configuration.jpg 2x">

This documentation will not go through all the settings since most of them are straightforward and don't require an
explanation.   
Below are the various configuration sections

## Interface options

### Hide standard cart button

This option hides the PrestaShop cart button so that the customer customizes the product then uses the add to cart
button that is inside the module.

::: details Advanced If the module doesn't succeed in hiding the cart button then it means that your theme has a
different html structure compared to the default theme.  
For that you can use custom CSS to hide the cart button.  
The module adds a class to the `body` called `dsn-hide-cart-button` so you can write this CSS for example to hide the
cart button

```css
body.dsn-hide-cart-button button.add-to-cart {
  display: none;
}
```

Customize the CSS selector to work on your theme, this requires CSS knowledge
:::

### Hide standard quantity box

This options hides the PrestaShop quantity box. The user can then enter the quantity in the module interface.

::: details Advanced Sometimes, the theme has a different html structure than the default theme, so the module can't
correctly hide the quantity input.  
The solution is to add custom CSS code to hide the quantity input.  
The module adds a class to the `body` which is called `dsn-hide-qty-input`, so you can write code like this

```css
body.dsn-hide-qty-input div.qty {
  display: none;
}
```

:::

### Show the customize button

This will display a customize button that when clicked, will show the module interface.

<img srcset="/productdesigner/images/customize.jpg 2x">

### Show product attributes in tabs

This option will display the PrestaShop attributes inside the module interface.

<img srcset="/productdesigner/images/attributes.jpg 2x">

### Show the interface in a popup

This is useful if you don't want the module to take space on your page or to be initially visible.

::: tip
When you enable this option, make sure that the [customize button](#show-the-customize-button) is enabled
so that the popup can be accessed. 
:::

### Show the popup on page load

Enable this option if you want the customer to start customizing the product right away.

### Defer loading of the module

Enable if you want your product pages to load faster. The module will wait for the page load, then it will load its scripts. 

This can help with the page score.

### Display the total price

If enabled, the module will multiply the price by the quantity instead of displaying the unit price.

<img srcset="/productdesigner/images/total-price.jpg 2x">

## Print settings

### Include base image in print
Determines whether to include the base image in the final SVG file.

### Include mask image in print
Determines whether to include the mask image in the final SVG.

### Include layer images in print
Determines whether to include the visual options in the final SVG.

### Include design area only
This option will crop the final SVG to the area size, thus including only the useful part of the design.

### Show preview in invoice <Badge text="Not recommended" type="error"/>
Will display the SVG preview in the invoice PDF 

::: warning
This option is not recommended being enabled because the PDF library used by PrestaShop does not support SVG files very well.
:::

### Show design details in invoice
Will show more details about the design in the invoice

<img srcset="/productdesigner/images/invoice-details.jpg 2x">

### Show preview in emails
Will show the design preview in the order confirmation mail sent to the customer
