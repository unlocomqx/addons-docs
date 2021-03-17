# Troubleshooting

The module has a a troubleshooting page to fix common problems, to access this page, open the main configuration page
of the module then click the **Troubleshooting** button

<img srcset="/images/troubleshooting.jpg 2x" class="border">

## The module is not displayed
Sometimes, the module gets removed from a necessary hook such as the hook which displays the fields in the product page.  
This usually occurs after installing or activating a new theme.  

To fix this, you can restore the module hooks like this:

<img srcset="/images/hooks-list.jpg 2x">

The module will then restore the hooks and show this confirmation

<img srcset="/images/hooks-restored.jpg 2x">

You can also restore the module hooks in the `Design` > `Positions` page.

## The customization is not formatted correctly
By default, PrestaShop does not display a customization that contains HTML content, so instead of the customization summary,
the HTML code will be displayed.  

<img srcset="/images/customization-html.jpg 2x">

To fix this, apply the template fixes in the troubleshoot page

<img srcset="/images/template-fix.jpg 2x">

The module will display this confirmation if the fix was applied successfully

<img srcset="/images/template-fix-applied.jpg 2x">

?> Clear the PrestaShop cache after applying the template fix

The customization will be displayed like this

<img srcset="/images/customization-formatted.jpg 2x">
