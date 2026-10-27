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

## Server software

The SVG download works on any server. The other downloads and some upload formats need extra
software on the server. The module tries the tools below in order and uses the first one that works.

| Software | Used for | Install hint |
|----------|----------|--------------|
| Inkscape 1.0+ | PDF and CMYK PDF downloads, AI / EPS / PDF uploads | `sudo apt install inkscape` |
| Docker | Runs Inkscape or Chrome (Puppeteer) in a container when they are not installed | [Using docker](#using-docker) |
| Chromium | Chrome PDF and Chrome PNG downloads | `sudo apt install chromium` |
| Node.js with the `puppeteer` package | Chrome PDF and Chrome PNG downloads (last local fallback) | `npm install -g puppeteer` |
| Ghostscript (`gs`) | CMYK PDF download | `sudo apt install ghostscript` |
| ImageMagick command line (`convert`) | PDF and CMYK PDF downloads (last local fallback) | `sudo apt install imagemagick` |
| `tifig` | HEIC uploads | [tifig releases](https://github.com/monostream/tifig/releases) |
| Remote converter (paid API) | PDF, CMYK PDF and Chrome PDF downloads | [Remote converter](#using-the-remote-converter-paid-api) |

::: tip
All command line tools need the PHP `shell_exec` function to be enabled, and the binary must be
in the `PATH` of the web server user. For Inkscape and ImageMagick, the module also looks in
`/usr/local/bin` and `/opt/homebrew/bin`.
:::

::: tip Imagick vs ImageMagick
The module runs the ImageMagick command line tool `convert`. It doesn't use the PHP Imagick
extension (`php-imagick`), so installing only the extension has no effect. To check that the
command line tool is available:

```shell
convert --version
```
:::

### Fallback order

| Feature | Tools tried, in order |
|---------|-----------------------|
| PDF download | Remote converter (if configured), Inkscape, Docker (`linuxserver/inkscape`), ImageMagick `convert` |
| CMYK PDF download | Same as PDF download, then Ghostscript converts the PDF to CMYK |
| Chrome PDF download | `chromium`, Docker (`ghcr.io/puppeteer/puppeteer`), Node.js + Puppeteer, remote converter |
| Chrome PNG download | `chromium`, Docker (`ghcr.io/puppeteer/puppeteer`), Node.js + Puppeteer |
| AI / EPS / PDF uploads | Inkscape, Docker (`uvarc/inkscape:1.0`) |
| HEIC uploads | `tifig` |

If an AI, EPS, PDF or HEIC upload can't be converted, the customer gets an error and the file is
not added to the design.

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

The module will pull these images in the background:

- `linuxserver/inkscape` for the PDF and CMYK PDF downloads
- `uvarc/inkscape:1.0` for AI / EPS / PDF uploads
- `ghcr.io/puppeteer/puppeteer:latest` for the Chrome PDF and Chrome PNG downloads

The command that the module will execute for the PDF download is roughly:

```shell
docker run -i -v /var/www/html/designer:/var/www/html/designer linuxserver/inkscape /usr/bin/inkscape "/var/www/html/designer/designer/output/18-design18/0-side0/design-18-0.svg" --export-type=pdf
# /var/www/html/designer being the PrestaShop root dir in this case
```

You can pull the images in advance to avoid a slow first download:

```shell
docker pull linuxserver/inkscape
docker pull uvarc/inkscape:1.0
docker pull ghcr.io/puppeteer/puppeteer:latest
```

If you get a permission error, try adding the `www-data` user to the `docker` group.

```shell
sudo usermod -aG docker www-data
```

### Using Chrome / Chromium

The Chrome PDF and Chrome PNG downloads use a headless Chromium to convert the SVG files.
The module looks for the `chromium` binary. If it's not found, it runs Puppeteer from Docker,
then from Node.js.

```shell
sudo apt update
sudo apt install chromium
```

The Docker container loads the SVG from your shop URL, so the shop must be reachable from the server.

If none of these work, the Chrome PDF download falls back to the remote converter.

### CMYK PDF

The CMYK PDF download first creates the PDF (see above), then converts it to CMYK
with Ghostscript.

```shell
sudo apt install ghostscript
gs --version
```

### Using the remote converter (Paid API)

You can use my online converter to convert the SVG files to PDF. Once configured, the PDF and
CMYK PDF downloads try it first, and the Chrome PDF download uses it when the local tools fail.
The CMYK PDF download still needs Ghostscript on your server.

Here are the steps to follow:

1- Make a subscription to the API by following this payment
link: [💳 API Subscription](https://buy.stripe.com/aEUaGa1Mc327cww4gl)

2- Add this line to the file `config/defines.inc.php`

```php
define('_DSN_API_URL_', 'https://converter.prestalife.net/');
```

::: tip
Make sure to insert this line after the `<?php` tag
:::
