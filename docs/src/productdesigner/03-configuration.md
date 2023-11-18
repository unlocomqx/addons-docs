# Configuration

You can change the global settings of the module in the main configuration.  
This page contains a configuration that is common to all products, such as the available text colors
and fonts etc...

<img srcset="/productdesigner/images/configuration.jpg 2x">

Below are the various configuration sections

## Interface options

<img srcset="/productdesigner/images/configuration.jpg 2x" class="mt-1">

### Hide standard cart button

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

### Hide standard quantity box

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

### Show the customize button

This will display a customize button that when clicked, will show the module interface.

<img srcset="/productdesigner/images/customize.jpg 2x">

### Show product attributes in tabs

This option will display the PrestaShop attributes inside the module interface.

<img srcset="/productdesigner/images/attributes.jpg 2x">

### Show the interface in a popup

This is useful if you don't want the module to take space on your page or to be initially visible.

::: tip   
When you enable this option, make sure that the [customize button](#show-the-customize-button) is
enabled so that the popup can be accessed.
:::

### Show the popup on page load

Enable this option if you want the customer to start customizing the product right away.

### Defer loading of the module

Enable if you want your product pages to load faster. The module will wait for the page load, then
it will load its scripts.

This can help with the page score.

### Display the total price

If enabled, the module will multiply the price by the quantity instead of displaying the unit price.

<img srcset="/productdesigner/images/total-price.jpg 2x">

### Show Dynamic Product in the product tab

This option is only available if you have the [Dynamic Product](https://docs.prestalife.net/dynamicproduct/) module installed.  
It allows you to display the dynamic product fields in the designer interface like this

<img srcset="/productdesigner/images/dynamic-designer.jpg 2x">

## Print settings

<img srcset="/productdesigner/images/print-settings.jpg 2x" class="mt-1">

### Include base image in print

Determines whether to include the base image in the final SVG file.

### Include mask image in print

Determines whether to include the mask image in the final SVG.

### Include layer images in print

Determines whether to include the visual options in the final SVG.

### Include design area only

This option will crop the final SVG to the area size, thus including only the useful part of the
design.

### Show preview in invoice <Badge text="Not recommended" type="error"/>

Will display the SVG preview in the invoice PDF

::: warning   
This option is not recommended being enabled because the PDF library used by PrestaShop does not
support SVG files very well.
:::

### Show design details in invoice

Will show more details about the design in the invoice

<img srcset="/productdesigner/images/invoice-details.jpg 2x">

### Show preview in emails

Will show the design preview in the order confirmation mail sent to the customer

## Design options

<img srcset="/productdesigner/images/design-options-panel.jpg 2x" class="mt-1">

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

An error will be displayed to prevent adding a design which has an image with less than the required
DPI

<img srcset="/productdesigner/images/dpi-error.jpg 2x">

The customer can then reduce the size of the image until all the borders are green

<img srcset="/productdesigner/images/dpi-green.jpg 2x" class="border">

### Disallow designs with low dpi images

If disabled, the module will only show this warning when the design contains an image with
insufficient quality

<img srcset="/productdesigner/images/dpi-confirm.jpg 2x">

If enabled, then the module will show this error

<img srcset="/productdesigner/images/dpi-error.jpg 2x">

### Upload max size

This option sets the maximum file size for customer uploads

## Text options

<img srcset="/productdesigner/images/text-options-panel.jpg 2x" class="mt-1">

### Show fonts in the text tab directly

If enabled, then the fonts will be displayed directly like this

<img srcset="/productdesigner/images/fonts-display.jpg 2x">

If it's disabled, the fonts will be displayed behind a
button <img style="vertical-align: middle" srcset="/productdesigner/images/font-btn.png 2x">

### Show colors in the text tab directly

If enabled, the text colors will be displayed like this

<img srcset="/productdesigner/images/text-colors-inline.jpg 2x">

If it's disabled, the colors will be displayed behind this
button <img style="vertical-align: middle" srcset="/productdesigner/images/color-btn.png 2x">

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

## Image options

### Show colors in the image tab directly

If enabled, the image colors will be displayed like this

<img srcset="/productdesigner/images/image-colors-inline.jpg 2x">

If it's disabled, the colors will be displayed behind this
button <img style="vertical-align: middle" srcset="/productdesigner/images/color-btn.png 2x">

### Pixabay key

Pixabay is a free image search service. To enable it, you need to configure your key in this
field.  
To get a Pixabay key, visit the [API](https://pixabay.com/api/docs/) page, then create an account
and copy the key.  
You can find the key in the [Search Images section](https://pixabay.com/api/docs/#api_search_images)

<img srcset="/productdesigner/images/pixabay-key.jpg 2x" class="border padding">

You can then enable Pixabay search for any product of your choice in
the [product configuration](/productdesigner/product-config/20-image-options.md#enable-pixabay-search)
.

### Use Pixabay full size images

This requires full API access, you can get it [here](https://pixabay.com/api/docs/) (search for full
API access)

### Instagram App ID

Create
an [Instagram App](https://developers.facebook.com/docs/instagram-basic-display-api/getting-started/)
then copy the app id and save it in this field.

<img srcset="/productdesigner/images/instagram-app-id.jpg 2x" class="border">

### Instagram App Secret

Copy this code from the Instagram App and save it in this field.  
For security reasons, treat this code like a password.

### Instagram Redirect Url

Copy the value of this field and save it to your App in this section

<img srcset="/productdesigner/images/instagram-redirect-url.jpg 2x" class="border">

::: tip  
After configuring Instagram settings, you can enable it for the products of your choice by enabling
this option
:::

## Tabs

You can enable or disable tabs globally in this section

<img srcset="/productdesigner/images/tabs.jpg 2x">

The tabs are displayed in the interface like this

<img srcset="/productdesigner/images/interface-tabs.jpg 2x">

You can also have a specific tabs configuration for any product of your choice in
the [Tabs section](/productdesigner/product-config/05-tabs.md)

## Sides

In this section, you can configure the available sides for your products

<img srcset="/productdesigner/images/sides.jpg 2x">

You can then enable specific sides for any product in
the [Sides tab](/productdesigner/product-config/06-sides.md)

Here are the side properties

<img srcset="/productdesigner/images/sides-edit.jpg 2x">

The name is only used in the backoffice to reference the side in other sections of the
configuration.

The label will be displayed to customers like this

<img srcset="/productdesigner/images/sides-display.jpg 2x">

## Colors

You can configure available colors in this section

<img srcset="/productdesigner/images/colors.jpg 2x">

These colors will be used for text colors, image colors and product colors.

Here are the color properties

<img srcset="/productdesigner/images/color-edit.jpg 2x">

You can also add a texture instead of a plain color. Make sure that your texture file is seamless so
that it could be tiled properly by the module.

The colors/textures will be displayed like this in the interface

<img srcset="/productdesigner/images/colors-list.jpg 2x">

The module also allows you to choose which colors to enable for each product and also for each
feature (text colors, image colors, etc...). This can be done in
the [Product configuration](/productdesigner/product-config/).

::: tip Supported file types   
The supported file types for textures are: `svg` `png` `jpg` `jpeg`
:::

## Fonts

You can add custom fonts in this section

<img srcset="/productdesigner/images/fonts.jpg 2x">

Here's the font properties

<img srcset="/productdesigner/images/font-edit.jpg 2x">

::: tip   
Upload the font file and the module will detect the name and the family name
:::

::: tip Supported file types    
The supported file types are `.otf` and `.ttf`
:::

You can import multiple fonts at once by clicking this icon

<img srcset="/productdesigner/images/fonts-import.jpg 2x" class="border-sw">

The fonts will be displayed like this in the interface

<img srcset="/productdesigner/images/fonts-panel.jpg 2x">

## Image groups

You can add image groups will contain the images that the customer can pick from and add to the
design.

<img srcset="/productdesigner/images/image-groups.jpg 2x">

Here's the image group properties

<img srcset="/productdesigner/images/image-group-edit.jpg 2x">

The image groups will be displayed like this

<img srcset="/productdesigner/images/image-groups-display.jpg 2x">

### Parent group

The group can either belong to the root category or to another group

In this example the Mountains group belongs to the Nature group, it will be displayed like this

<img srcset="/productdesigner/images/sub-group.jpg 2x">

### White image group

Enable this option if the group will contain only white images. This is useful if you want to
provide images that the customer can colorize using
the [Image colors](/productdesigner/product-config/14-image-colors.md) feature.  
Images that belong to this group will be automatically colored using the first available color when
inserted in the design.

### Bulk import

You can import multiple image groups by clicking this icon

<img srcset="/productdesigner/images/image-groups-import.jpg 2x">

## Images

You can add images that the customer can pick from and add to the design.

<img srcset="/productdesigner/images/images.jpg 2x">

Here's the image properties

<img srcset="/productdesigner/images/image-edit.jpg 2x">

The images will be displayed when the customer opens the corresponding image group

<img srcset="/productdesigner/images/images-display.jpg 2x">

## Shapes

You can add shapes to be used to crop images in the designer

<img srcset="/productdesigner/images/image-shapes.jpg 2x">

The shapes will be displayed like this when the customer adds an image to the design

<img srcset="/productdesigner/images/images-shapes-display.jpg 2x">

You can enable the shapes for the products of your choice in
the [product configuration](/productdesigner/product-config/25-image-shapes.md)

::: tip

The shape will be applied as a SVG mask.

Everything under white pixels will be visible.  
Everything under black pixels will be invisible.  
Shades in between white and black will apply a transparency effect relative to how light the shade is.

*It's recommended to use white shapes with a black contour/stroke.*

The shape will be stretched to fill the current image.
:::

## Help content

In this section, you can configure different help areas in the interface

<img srcset="/productdesigner/images/help-content.jpg 2x">

### Image upload help

The image upload help will be displayed like this

<img srcset="/productdesigner/images/image-upload-help.jpg 2x">

### Text help

The text help will be displayed like this

<img srcset="/productdesigner/images/text-help.jpg 2x">

### Image upload terms

The image terms will be displayed like this

<img srcset="/productdesigner/images/image-terms.jpg 2x">

## Color theme

In this section, you can customize the interface appearance to better match your theme

<img srcset="/productdesigner/images/color-theme.jpg 2x">

Furthermore, you can open the [color configurator](/productdesigner/04-color-theme.md) from any
product that has the module enabled and edit the color theme directly in the product page.

## Configs (Specific product configurations)

This tab will only be displayed if you have specific product configurations.

The main configuration of the module affects all products by default, but if you want to customize
it, you can open the desired product, then click the configuration button.

<img srcset="/productdesigner/images/configuration-btn.jpg 2x" class="padding border">

The specific configuration page will be opened

<img srcset="/productdesigner/images/specific-config.png 2x">

The available tabs in the specific configuration are:

- [Interface options](/productdesigner/03-configuration.md#interface-options)
- [Print settings](/productdesigner/03-configuration.md#print-settings)
- [Design options](/productdesigner/03-configuration.md#design-options)
- [Text options](/productdesigner/03-configuration.md#text-options)

In the Configs tabs, you can view the list of the products that have a specific configuration and
you can delete any unneeded configuration.

<img srcset="/productdesigner/images/specific-configs.jpg 2x">
