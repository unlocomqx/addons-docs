# Visual options

The module can display a visual configurator where the customer can pick different parts of the
product and get a direct preview of the selected options.

In this example, we will configure a custom skateboard step by step to see how to add option groups
and visual options to the designer.

## :one: Enabling the visual options

The first step is to enable the visual options

<img srcset="/productdesigner/images/visual-options-enable.jpg 2x">

## :two: Background image

Then we will open the [images tab](product-config/07-images.md) and configure a white background to
replace the base image

<img srcset="/productdesigner/images/visual-bg.jpg 2x">

## :three: Option groups

We can then add our option groups

- Click this button

<img srcset="/productdesigner/images/visual-add-group.jpg 2x" class="border">

A new empty group will be created

- Click the group title to edit it

<img srcset="/productdesigner/images/new-group.jpg 2x" class="border">

This modal will be displayed

<img srcset="/productdesigner/images/group-visual-edit.jpg 2x" class="border">

Change the title to "Board". Our skateboard will have three groups called: Board, Artwork and
Wheels.

You can create the other two groups in the same way.

<img srcset="/productdesigner/images/visual-groups.jpg 2x">

## :four: Options

Next up, we add different options to each group

We can add options individually by clicking this button

<img srcset="/productdesigner/images/layer-btn.jpg 2x">

Then, an empty option will be created. We can click on the empty image and empty icon to import a
file.

The supported file types are: `svg`, `png`, `jpg`, `jpeg`

::: tip  
Leave the icon image empty if you want to use a color instead
:::

The option image should have a transparent background to allow the graphical superposition of the
various visual options.

Here are some examples:

<img srcset="/productdesigner/images/visual-options/retro.png 2x" class="transparent border">

<img srcset="/productdesigner/images/visual-options/mountains.png 2x" class="transparent border">

<img srcset="/productdesigner/images/visual-options/blue.png 2x" class="transparent border">

When we combine the three images above, we get this result

<img srcset="/productdesigner/images/visual-options/result.png 2x" class="border">

::: tip Importing multiple options  
You can import all options at once by clicking the import button then selecting multiple files.  
<img srcset="/productdesigner/images/visual-options/import-btn.jpg 2x">

The module will create the necessary options and generate the icons and the names automatically.

Make sure to name your files correctly, because the module will use the file names as the option
names when importing multiple files.
:::

After importing the layers, they should look like this

<img srcset="/productdesigner/images/visual-options/options.jpg 2x" class="border">

We can edit an option y clicking on its title. This modal will be displayed.

<img srcset="/productdesigner/images/visual-options/option-modal.jpg 2x" class="border">

We can change the option label and price as well as its status and its description.

We add the options to other groups in the same way.

## :five: Initial options

We can pick initial options by clicking this button on the desired options

<img srcset="/productdesigner/images/visual-options/initial-options.jpg 2x">

## :six: Visual options interface

In the designer, the visual options will be displayed like this

<img srcset="/productdesigner/images/visual-options/visual-options-display.jpg 2x">

The customer can pick and option from each group to form the desired product.

<img srcset="/productdesigner/images/visual-options/visual-options-display-2.jpg 2x">

Here's how the price is displayed when the option has a price

<img srcset="/productdesigner/images/visual-options/option-price.jpg 2x" class="border">

## :art: Option colorization

You can generate options by colorizing an image using multiple colors.

In this example, we will colorize this image

<img srcset="/productdesigner/images/visual-options/dial.png 2x" class="border">

::: tip  
For an effective colorization, you need to provide the white version of the option
:::

We start by creating an option and adding the image

<img srcset="/productdesigner/images/visual-options/colorize-btn.jpg 2x" class="border">

We then click the desired colors and generate the layers

<img srcset="/productdesigner/images/visual-options/colors.jpg 2x" class="padding border">

The module will generate the options like this

<img srcset="/productdesigner/images/visual-options/generated.jpg 2x">

You can delete the icons if you want to display the colors

Here's how the generated options will look

<img srcset="/productdesigner/images/visual-options/dials.jpg 2x">

You can also use textures to colorize the option. Make sure that your texture is seamless so that it
could be tiled properly over the option image.

Here's an option that was colorized using an aluminium texture

<img srcset="/productdesigner/images/visual-options/alu.jpg 2x" class="border">

## :arrows_counterclockwise: Sync with Dynamic Product

:::tip  
This option is only available if you have installed the [Dynamic Product](/dynamicproduct/) module
:::

If you want to display visual options in Dynamic Product by
displaying [image lists](/dynamicproduct/product-config/07-fields.md#image-list), you can enable
the `Sync with Dynamic Product` option.

The module will tell you what to name
the [Dynamic Product field](/dynamicproduct/product-config/07-fields.md)

<img srcset="/productdesigner/images/sync-option.jpg 2x" class="border padding">

::: tip  
For the sync to work, the options must use the same images and in the same order
:::

Example:

Board options group in Product Designer

<img srcset="/productdesigner/images/board-options-designer.jpg 2x" class="border">

Board image list field in Dynamic Product

<img srcset="/productdesigner/images/border-image-list.jpg 2x" class="border">

The image lists and the designer will be displayed like this

<img srcset="/productdesigner/images/sync-result.jpg 2x">

Notice that the Options tab in the designer was hidden to avoid displaying the options twice.

## :asterisk: Using sub-groups

You can add sub-groups to any option group by clicking the subgroup button

<img srcset="/productdesigner/images/add-subgroup.jpg 2x">

A new sub-group will be adding inside the option group

<img srcset="/productdesigner/images/new-subgroup.jpg 2x">

You can add the options and import them as normal, the sub-group is identical to a normal group.

::: tip  
It's preferred that the parent group does not contain any options but only sub-groups
:::

The sub-groups will be displayed like this

<img srcset="/productdesigner/images/subgroups-display.jpg 2x">

In this case the `Board` group contains two sub-groups which are `Color` and `Artwork`
