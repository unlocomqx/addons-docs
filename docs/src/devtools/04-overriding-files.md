# Overriding files

Overriding templates and stylesheets and scripts is a technique that PrestaShop uses to make it
easier to customize themes and modules without modifying the original files.

You can read more about this concept in
the [PrestaShop DevDocs](https://devdocs.prestashop.com/1.7/modules/concepts/overrides/).

The module makes it easy to override files. In fact, it overrides the file that you want to edit by
default but you can also edit the original by switching the override off like so:

<img srcset="/devtools/images/override-off.jpg 2x" class="border">

This way, you keep your original theme and modules intact and that will make updating them
significantly easier.

This method is more effective when you have created a [child theme](/devtools/03-tools.md#creating-a-child-theme).
