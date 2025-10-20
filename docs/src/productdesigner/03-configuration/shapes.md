# Shapes

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

The shape must have these dimensions

```svg
<svg width="1" height="1" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <!-- Your shape here -->
</svg>
```
:::

Here's a [sample file](/productdesigner/files/shape.svg ':ignore') that you can use as a shape
