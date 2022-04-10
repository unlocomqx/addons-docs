# Conditions

The conditions feature allows you to show/hide fields based on the value of another field or other
fields.  
The conditions also allow to show/hide field groups.

Start by adding a new condition then configure the condition formula.

When the result of the condition formula is **true**, then the module will hide the field and groups
that are marked as hidden.

<img srcset="/dynamicproduct/images/conditions.jpg 2x">

In this example, we hide the **Glass** checkbox when the **Width** is bigger than 200 cm.  
We can also use more field in the formula, for example if we want to hide a field when either width
or length are bigger than 200 cm, then we can write this formula

<code class="formula">**[width]** > 200 | **[length]** > 200</code>

The pipe symbol **|** signifies the logical OR, if we want to use AND, then we use an ampersand **
&**

Example
<code class="formula">**[width]** > 200 & **[length]** > 200</code>

This would that if both width and length are bigger than 200, then hide the marked fields.

We can of course hide more than one field

<img srcset="/dynamicproduct/images/condition-more.jpg 2x" class="border">

::: tip  
When a field is hidden, its value will be 0 or empty so it doesn't have an effect on the price
:::

## Hiding options

Besides fields and groups, we can also hide individual options of a dropdown or radio or image list
field.

To hide a field options, click the cog icon to open the options list.

<img srcset="/dynamicproduct/images/condition-cog.jpg 2x" class="border">

Then you can hide the options of your choice by clicking them

<img srcset="/dynamicproduct/images/condition-options.jpg 2x" class="border">

## Working with fields having options

When working with field which have options, you will need to reference the option value in the
condition formula. Referencing with numeric values can hinder readability, this is why you can use
strings instead.

In out case, we can reconfigure the **material** field and set a string value for each option.
<img srcset="/dynamicproduct/images/condition-strings.jpg 2x" class="border">

Then when we configure our condition formula, we can click the option to insert its value directly
<img srcset="/dynamicproduct/images/dropdown-formula-strings.jpg 2x" class="border">

Note how the quotes are used around both the field name and the string itself, this is to avoid
syntax errors and to ensure correct parsing of the formula.

## Labels vs. Numbers

When you have a dropdown or an image list, it's better to use string values instead of number to
reference your options

For example, if you have a dropdown containing colors, it's better to use the color names instead of
arbitrary values. Here's an example:

<img srcset="/dynamicproduct/images/dropdown-labels.jpg 2x" class="border">

That way, you can write clearer condition formulas like

```xls
"[colors]" = "red"
"[colors]" = "blue"
... etc
```

It's better than using arbitrary numbers like

```xls
[colors] = 1
[colors] = 2
```

::: tip  
When using string values, make sure to wrap both the field and the value is quotes to avoid syntax
errors.
:::
