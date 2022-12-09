# Dynamic content

Using the `HTML` or the `Feature` fields, you can display dynamic content easily.  
To do that, you can include your fields inside the configured content by surrounding the field name with brackets.  

Example:

````html
The calculation is [width] * [height] = [total]
````

## Conventions

You can add reference your fields in the html field by following these conventions:

| Tag       | Content                                                      |
|-----------|:-------------------------------------------------------------|
| [field]   | field value                                                  |
| [[field]] | field secondary value                                        |
| {field}   | field options label (useful for dropdown fields for example) |

## Config

- **HTML config**

<img srcset="/dynamicproduct/images/html-config.jpg 2x" class="border">

- **Feature config**

<img srcset="/dynamicproduct/images/feature-config.jpg 2x" class="border">

The fields will be displayed like this

<img srcset="/dynamicproduct/images/dynamic-content.jpg 2x" class="padding border">
