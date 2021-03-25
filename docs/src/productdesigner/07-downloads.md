# Downloads

The module allows you to download several files in order to produce the design.

## SVG Download

You can download the production SVG from the backoffice order page or from the carts page

<img srcset="/productdesigner/images/sell-menu.jpg 2x">

The module will display each design summary like this

<img srcset="/productdesigner/images/bo-summary.jpg 2x">

Click the button <img srcset="/productdesigner/images/svg-download-zip.jpg 2x" class="v-middle"> to
download the SVG file and the files that are related to the design in a single zip archive.

The zip will contain different folders for the different design sides

<img srcset="/productdesigner/images/zip.png 2x">

::: tip Opening the SVG files  
To open the SVG files, you need to
use [<img srcset="/productdesigner/images/inkscape-logo.svg 2x" class="v-middle" style="height: 24px"> inkscape](https://inkscape.org/)
because it's the only program that is compatible with browsers in terms of SVG support.
:::

You can also use inkscape to convert the `SVG` to `PDF` if you want to open them in other programs
like Corel or illustrator.

## PDF Download

To be able to download PDF files directly from the backoffice, you need to install `inkscape 1.0` or
newer on your server.

The reason for requiring inkscape 1.0 or newer, is that it's the only version of inkscape that
supports SVG embedded fonts.

### Inkscape installation

To install inkscape, you need access to a terminal to allow you to execute the following commands.

```shell
sudo apt update
sudo apt install inkscape
```

Then check the inkscape version like this

```shell
inkscape --version
# The version should be something like this:
# Inkscape 1.0.1 (3bc2e813f5, 2020-09-07)
```

Please ask your hosting service or webmaster for assistance regarding the installation of inkscape
on the server.
