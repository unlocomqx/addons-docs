# Fields

In this tab, you can add and configure module fields

<img srcset="/dynamicproduct/images/fields-table.jpg 2x" class="border padding">

Start by adding a new field then you can change its properties directly in the list

<img srcset="/dynamicproduct/images/field-example.jpg 2x" class="padding border">

---
## Name
The field name is only used in the backoffice and it's used to reference the field in the formulas.  
This name should be lower case and should only contain alphanumerical characters in addition to the underscore.  
Here are some examples:
- width
- height
- unit_price
- option1
- option2

---
## Label
This label will be displayed to the customers, it can be translated to all available languages

---
## Type
The module supports many field types, here's the full list 

---
### Numeric Input
Displays a numeric field

<img srcset="/dynamicproduct/images/fields/numeric.jpg 2x" class="padding border">

You can access more settings by clicking the settings icon

<img srcset="/dynamicproduct/images/fields/numeric-settings.jpg 2x" class="border">

When both _min_ and _max_ are set to 0, the module will not validate them.

---
### Slider
Displays a slider (from the jQueryUI library)

<img srcset="/dynamicproduct/images/fields/slider.jpg 2x" class="padding border">

The slider settings show these options

<img srcset="/dynamicproduct/images/fields/slider-settings.jpg 2x" class="border">

---
### Dropdown

Displays a dropdown list (a HTML select)

<img srcset="/dynamicproduct/images/fields/dropdown.jpg 2x" class="padding border">

You can add dropdown options in the field settings

<img srcset="/dynamicproduct/images/fields/dropdown-settings.jpg 2x" class="border">

In most cases, the values and secondary values of the options are arbitrary.  
The field value will be the value of the selected option, so you can use the field directly in the formulas.

You can also assign a color or an image to each option if needed

<img srcset="/dynamicproduct/images/fields/dropdown-images-config.jpg 2x" class="border">

The module will then display the corresponding image or color when an image is selected

<img srcset="/dynamicproduct/images/fields/dropdown-image.jpg 2x" class="padding border">

---
### Radio buttons

Display radio buttons

<img srcset="/dynamicproduct/images/fields/radio.jpg 2x" class="padding border">

You can add radio option in the field settings

<img srcset="/dynamicproduct/images/fields/radio-settings.jpg 2x" class="border">

---
### Image list

Displays a list of images or colors

<img srcset="/dynamicproduct/images/fields/image-list.jpg 2x" class="padding border">

You can configure the options in the field settings

<img srcset="/dynamicproduct/images/fields/image-list-settings.jpg 2x" class="border">

You can allow multi-selection, where the customer can pick more than one option
You can also display the label of each option by enabling the "Display label" option

<img srcset="/dynamicproduct/images/fields/image-list-labels.jpg 2x" class="padding border">

You can also change the height of the thumbnails in pixels

---
### Checkbox

Display a checkbox

<img srcset="/dynamicproduct/images/fields/checkbox.jpg 2x" class="padding border">

You can configure the checkbox in the settings popup

<img srcset="/dynamicproduct/images/fields/checkbox-settings.jpg 2x" class="border">

The value of the checkbox if either 0 or 1, so you can use its value like an on/off switch to add a conditional cost.

---
### Text

Displays a text field

<img srcset="/dynamicproduct/images/fields/text.jpg 2x" class="padding border">

You can configure the text field in the field settings

<img srcset="/dynamicproduct/images/fields/text-settings.jpg 2x" class="border">

The text length will not be validated if both _min_ and _max_ are set to 0

---
### Text Area

Displays a text area

<img srcset="/dynamicproduct/images/fields/textarea.jpg 2x" class="padding border">

You can find more options in the field settings popup

<img srcset="/dynamicproduct/images/fields/textarea-settings.jpg 2x" class="border">

The text length will not be validated if both _min_ and _max_ are set to 0

---
### Date

Display a date field

<img srcset="/dynamicproduct/images/fields/date.jpg 2x" class="padding border">

More settings are available in the field settings popup

<img srcset="/dynamicproduct/images/fields/date-settings.jpg 2x" class="padding border">

#### Initial value
The possible values for the initial value are:
- empty
- 0 (will set the date to the current date)
- +dd/-dd (will set the date to X days before or after the current date) 
For example, you can set the initial date to +7 to set it to one week in the future


#### Min / Max date
You can either set the min/max value to +dd or -dd or set them to a specific date following the format dd/mm/yyyy
Examples:
- Min date: -10 (Minimum of 10 days before the current date)
- Max date: +30 (A maximum of one month in the future)
- Min date: 15/05/2021

---
### Image

Displays an image upload field

<img srcset="/dynamicproduct/images/fields/image.jpg 2x" class="padding border">

You can configure this field in the settings

<img srcset="/dynamicproduct/images/fields/image-settings.jpg 2x" class="border">

You can configure the minimum required size in pixels and the maximum file size in MB

When the user uploads an image, a preview will be displayed like this

<img srcset="/dynamicproduct/images/fields/image-preview.jpg 2x" class="padding border">

---
### File

Displays a file upload field

<img srcset="/dynamicproduct/images/fields/file.jpg 2x" class="padding border">

You can configure the field like this

<img srcset="/dynamicproduct/images/fields/file-settings.jpg 2x" class="border">

The allowed extensions value if comma separated without spaces.  
Example:  
```
svg,png,zip
```

---
### Fixed Value

This field can be used if you'd like to declare a fixed value that is not supposed to change.  

<img srcset="/dynamicproduct/images/fields/fixed.jpg 2x" class="padding border">

For example, if you'd like to store a conversion ratio between two units.  
This field can be displayed to customers but it's not necessary in most cases.

---
### Price

You can use this field to store a price.  
When this field is displayed to the customer, its value will be formatted using the current currency.

<img srcset="/dynamicproduct/images/fields/price.jpg 2x" class="padding border">

---
### Dynamic Variable

You can use this field for any variable that is going to change either using the intervals or the grid 
or any other method such as a [PHP calculation file](16-php-calculation.md)  
In most case, you will not need to display this field to customers, so you can hide it.

If you choose to display it, then it will be displayed like this  

<img srcset="/dynamicproduct/images/fields/dynamic.jpg 2x" class="padding border">

---
### Feature

This field can display any value, it's similar to product features displayed by PrestaShop

<img srcset="/dynamicproduct/images/fields/feature.jpg 2x" class="padding border">

You can enter the feature value in the field settings. This value can be translated to all available languages.

<img srcset="/dynamicproduct/images/fields/feature-settings.jpg 2x" class="border">

---
### Divider

Display a line separating fields

<img srcset="/dynamicproduct/images/fields/divider.jpg 2x" class="padding border">

---
### Color picker

Displays a color picker field

<img srcset="/dynamicproduct/images/fields/picker.jpg 2x" class="padding border">

You can configure the initial color and the description in the field settings.

<img srcset="/dynamicproduct/images/fields/picker-settings.jpg 2x" class="padding border">

---
### HTML

Allows you to display any html content

<img srcset="/dynamicproduct/images/fields/html.jpg 2x" class="padding border">

You can configure the content in the field settings

<img srcset="/dynamicproduct/images/fields/html-settings.jpg 2x" class="padding border">

:::warning
For **security** purposes, only paste html from trusted sources
:::

---
### Error message

This field allows you to implement a custom validation logic for your fields

Here's an example of an error message

<img srcset="/dynamicproduct/images/fields/error.jpg 2x" class="padding border">

You can control the visibility of this field using [the conditions feature](/dynamicproduct/product-config/09-conditions.md).

When an _Error message_ field is displayed, the module will not allow adding to cart and will scroll to the first error that is displayed

---
## Value

This is the default and initial value of the field

---
## Unit

This is the field unit, it will be displayed in the product page like this

<img srcset="/dynamicproduct/images/fields/unit.jpg 2x" class="padding border">

You can configure the unit in the main configuration page of the module.

---
## Options
Using this button, you can access the module settings

## Image
You can assign an image to any field of your choice  
Click the icon to upload an image.

<img srcset="/dynamicproduct/images/fields/image-icon.jpg 2x" class="border">

The image will be displayed in the field tooltip like this

<img srcset="/dynamicproduct/images/fields/tooltip-image.jpg 2x" class="border">

## Actions

You can hide the field by clicking on the visibility icon

<img srcset="/dynamicproduct/images/fields/actions.jpg 2x" class="border">

You can also delete the field or duplicate it

## Reordering the field

Using the sort handle, you can reorder the fields by dragging the desired field and re-positioning it.

<img srcset="/dynamicproduct/images/fields/drag.jpg 2x" class="border">
