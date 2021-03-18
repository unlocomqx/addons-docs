# Carrier filtering

You can filter carriers based on the module fields.  
For this to work, you need to use standard name:
- `width`
- `height`
- `depth`

Then the module will pass the values of these fields to PrestaShop so that PrestaShop can filter the carriers correctly.  
These standard names will only work if your fields units are the same as the `Dimension unit` that is configured in the `Localization` page

If the field unit is `millimeters` then you can suffix the field name with `_mm`  
- `width_mm`
- `height_mm`
- `depth_mm`

If the field unit is `meters` then you can suffix the field name with `_m`
- `width_m`
- `height_m`
- `depth_m`

The module will detect these suffixes and will convert the values to `cm` before passing them to PrestaShop
