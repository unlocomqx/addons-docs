# Troubleshooting

The module has a troubleshooting page where you can easily fix common problems.

To access the troubleshooting page, open the main configuration page of the module, then click the
following button.

<img srcset="/productdesigner/images/troubleshoot-btn.png 2x">

## The module is not displayed

In some cases, the module gets removed by the theme from some essential hooks.

To restore it, select the available hooks then restore them like this

<img srcset="/productdesigner/images/hooks.jpg 2x">

This confirmation should be displayed

<img srcset="/productdesigner/images/hooks-restored.jpg 2x">

## The customized summary is not formatted properly

If the summary is not displayed correctly, you can fix the templates in the troubleshooting page.

<img srcset="/dynamicproduct/images/summary-misformat.jpg 2x">

Scroll down to the template fix section, then click the apply button

<img srcset="/productdesigner/images/template-fix.jpg 2x">

The module will display this confirmation if the templates were fixed correctly

<img srcset="/productdesigner/images/template-fixed.jpg 2x">

::: tip   
After applying the template fix, clear the PrestaShop cache for the fix to have effect.
:::

The customization should then be displayed correctly like this

<img srcset="/productdesigner/images/customization-summary.jpg 2x" class="padding border">

If this doesn't work, it means that either that the module couldn't fix the files because of a
permission problem on your server or that PrestaShop could not clear the cache properly due to
insufficient permissions.

In that case, you need to perform the edits manually by
following [this guide](https://gist.github.com/unlocomqx/f0b86a1ce938405c315d5de979011b95)

After applying the fix, make sure to also delete or rename the folder `/var/cache` manually if
needed.
