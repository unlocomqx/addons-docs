# Configuration

You can change the global settings of the module in the main configuration.  
This page contains a configuration that is common to all products, such as the available text colors and fonts etc...

<img srcset="/productdesigner/images/configuration.jpg 2x">

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

::: tip When you enable this option, make sure that the [customize button](#show-the-customize-button) is enabled so
that the popup can be accessed.
:::

### Show the popup on page load

Enable this option if you want the customer to start customizing the product right away.

### Defer loading of the module

Enable if you want your product pages to load faster. The module will wait for the page load, then it will load its
scripts.

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

::: warning This option is not recommended being enabled because the PDF library used by PrestaShop does not support SVG
files very well.
:::

### Show design details in invoice

Will show more details about the design in the invoice

<img srcset="/productdesigner/images/invoice-details.jpg 2x">

### Show preview in emails

Will show the design preview in the order confirmation mail sent to the customer

## Design options

### Show download button

Will show a download button allowing the customers to download the design as PNG

<img srcset="/productdesigner/images/download-btn.jpg 2x">

### Show design items dimensions

Will show the design item size in centimeters

<img srcset="/productdesigner/images/dimensions.jpg 2x" class="border">

The customer can change the size by clicking the edit button

<img srcset="/productdesigner/images/dimensions-edit.jpg 2x">

### Show item deletion confirmation

Will warn the customer when deleting a design item

<img srcset="/productdesigner/images/delete-confirm.jpg 2x">

### Allow multiple items per design field

Disable this option if you want a design field to only contain one design item

### Minimum DPI for images

Allows you to configure the minimum required DPI for images, thus ensuring a good print quality.

When the image does not have a sufficient quality, its borders will be highlighted in red

<img srcset="/productdesigner/images/dpi-validation.jpg 2x" class="border">

An error will be displayed to prevent adding a design which has an image with less than the required DPI

<img srcset="/productdesigner/images/dpi-error.jpg 2x">

The customer can then reduce the size of the image until all the borders are green

<img srcset="/productdesigner/images/dpi-green.jpg 2x" class="border">

### Disallow designs with low dpi images

If disabled, the module will only show this warning when the design contains an image with insufficient quality

<img srcset="/productdesigner/images/dpi-confirm.jpg 2x">

If enabled, then the module will show this error

<img srcset="/productdesigner/images/dpi-error.jpg 2x">

### Upload max size

This option sets the maximum file size for customer uploads

## Text options

### Show fonts in the text tab directly

If enabled, then the fonts will be displayed directly like this

<img srcset="/productdesigner/images/fonts-display.jpg 2x">

If it's disabled, the fonts will be displayed behind a
button <img style="vertical-align: middle" srcset="/productdesigner/images/font-btn.png 2x">

### Hide text size input <Badge text="Active recommended" type="error"/>

Will hide the size input

<img srcset="/productdesigner/images/size-input.jpg 2x">

This input will give more control over the outline appearance but in most cases it's not needed

### Hide text style buttons

Will hide these buttons

<img srcset="/productdesigner/images/appearance.jpg 2x">

### Hide text alignment

Will hide these buttons

<img srcset="/productdesigner/images/align-btns.jpg 2x">

### Hide text outline

Will hide the outline section

<img srcset="/productdesigner/images/outline.jpg 2x">

## Tabs

You can enable or disable tabs globally in this section

<img srcset="/productdesigner/images/tabs.jpg 2x">

The tabs are displayed in the interface like this

<img srcset="/productdesigner/images/interface-tabs.jpg 2x">

You can also have a specific tabs configuration for any product of your choice in the [Tabs section](link)
