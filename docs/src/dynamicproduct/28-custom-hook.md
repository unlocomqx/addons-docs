# Custom hook

You can display the module in any position of your product page by using the `DynamicProduct` hook.

Open the `product.tpl` file of your theme and add the following code:

File location: `/themes/[current theme]/templates/catalog/product.tpl`
```smarty
{hook h="DynamicProduct"}
```

::: warning
When this hook is used, the [`dp_hook` variable](/dynamicproduct/17-custom-scripts.md#changing-the-module-position-in-the-page) will be ignored.
:::

