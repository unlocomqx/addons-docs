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

#### Using docker

If you can't install inkscape 1.0 on your system, try using it from a docker container.

The module will pull this image in the background: `uvarc/inkscape:1.0`

The command that the module will execute is roughly:

```shell
docker run -i -v /var/www/html/designer:/var/www/html/designer uvarc/inkscape:1.0 /usr/bin/inkscape "/var/www/html/designer/designer/output/18-design18/0-side0/design-18-0.svg" --export-type=pdf
# /var/www/html/designer being the PrestaShop root dir in this case
```

If you get a permission error, try adding the `www-data` user to the `docker` group.
```shell
sudo usermod -aG docker www-data
```

### Using the remote converter (Paid API)

You can use my online converter to convert the SVG files to PDF or PNG.

Here are the steps to follow:

1- Make a subscription to the API by following this payment link: [💳 API Subscription](https://buy.stripe.com/aEUaGa1Mc327cww4gl)

2- Add this line to the file `config/defines.inc.php`

```php
define('_DSN_API_URL_', 'https://converter.prestalife.net/');
```

::: tip
Make sure to insert the above line after the `<?php` tag
:::
