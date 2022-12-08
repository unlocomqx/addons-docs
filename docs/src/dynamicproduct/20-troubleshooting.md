# Troubleshooting

The module has a a troubleshooting page to fix common problems.  
To access this page, open the main configuration page of the module then click the **Troubleshooting** button

<img srcset="/dynamicproduct/images/troubleshooting.jpg 2x" class="border">

## The module is not displayed

Sometimes, the module gets removed from a necessary hook such as the hook which displays the fields
in the product page.  
This usually occurs after installing or activating a new theme.

To fix this, you can restore the module hooks like this:

<img srcset="/dynamicproduct/images/hooks-list.jpg 2x">

The module will then restore the hooks and show this confirmation

<img srcset="/dynamicproduct/images/hooks-restored.jpg 2x">

You can also restore the module hooks in the `Design` > `Positions` page.

## The customization is not formatted correctly

By default, PrestaShop does not display a customization that contains HTML content, so instead of
the customization summary, the HTML code will be displayed.

<img srcset="/dynamicproduct/images/customization-html.jpg 2x">

To fix this, apply the template fixes in the troubleshooting page

<img srcset="/dynamicproduct/images/template-fix.jpg 2x">

The module will display this confirmation if the fix was applied successfully

<img srcset="/dynamicproduct/images/template-fix-applied.jpg 2x">

::: tip Clear the PrestaShop cache after applying the template fix
:::

The customization will be displayed like this

<img srcset="/dynamicproduct/images/customization-formatted.jpg 2x">

If this doesn't work, it means that either that the module couldn't fix the files because of a
permission problem on your server or that PrestaShop could not clear the cache properly due to
insufficient permissions.

In that case, you need to perform the edits manually by
following [this guide](https://gist.github.com/unlocomqx/f0b86a1ce938405c315d5de979011b95)

After applying the fix, make sure to also delete or rename the folder `/var/cache` manually if
needed.

## Upgrade checker

You can check the module installation using the upgrade checker

To access it, click this button which you can find in the module configuration page

<img srcset="/dynamicproduct/images/upgrade-checker-btn.png 2x">

The versions will be displayed like this

<img srcset="/dynamicproduct/images/versions-list.jpg 2x">

If an upgrade has previously failed, you can retry it like this

<img srcset="/dynamicproduct/images/retry-upgrade.png 2x">
