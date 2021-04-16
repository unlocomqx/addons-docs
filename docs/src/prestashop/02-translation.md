# Module Translation

You can translate any module in the PrestaShop backoffice.

To access a module translation, open the `International` > `Translations` page

Then pick the desired module and the target language

<img srcset="/prestashop/images/translation.jpg 2x">

Then you will be able to translate all the module phrases easily

<img srcset="/prestashop/images/phrases.jpg 2x">

## Some translations are not displayed

If you can't find all the phases, then you need to
make [this modification](https://github.com/PrestaShop/PrestaShop/pull/12903/files)

The file path is `controllers/admin/AdminTranslationsController.php`

This fix is already included PrestaShop `1.7.7.3` and newer
