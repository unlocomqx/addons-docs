# Custom hook

## Custom module hook

You can display the module in any position in the product page by using the custom hook.

```smarty
{hook h='ProductDesigner'}
```

You can put this code in the `product.tpl` that comes with your theme

Path:
```text
/themes/[current theme]/templates/catalog/product.tpl
```

## Custom button hook

You can display the customize button in any position in the product page by using the custom hook.

```smarty
{hook h='ProductDesignerCustomizeButton'}
```

You can put this code in the `product.tpl` that comes with your theme

Path:
```text
/themes/[current theme]/templates/catalog/product.tpl
```

Or other template files such as 
```text
/themes/[current theme]/templates/catalog/_partials/product-add-to-cart.tpl
```

::: tip
You may want to unhook the module from `displayProductAdditionalInfo` to avoid displaying the module button twice.
:::

## Custom button 

You can add a custom button anywhere you like, here's a html example. Make sure that the button has the class `dsn-customize`

```html
<button type="button" class="btn btn-primary dsn-customize">
  Customize your product!
</button>
```
