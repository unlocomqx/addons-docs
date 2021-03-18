# Grids

The grids feature allows you to vary the value of a field based on the values of two other fields.  

In this case, we vary the **price_m2** field based on the **width** and **length** fields.

<img srcset="/images/grids.jpg 2x" class="padding border">

The value is picked when both fields values are between the current values (>=) of the interval and the next intervals values (<).

The last interval will be picked when the corresponding field value is equal or bigger than the last value.

**Examples**

**50** will be picked when (0 =< **width** < 100) and (0 =< **length** < 100)

**30** wil be picked when (**width** >= 200) and (**length** >= 200)

## CSV Import

You can import a grid from a CSV file, here you can find [a sample file](files/sample.csv ':ignore')

Here's a preview of the file

<img srcset="/images/grids-preview.jpg 2x">

And here it is imported as a grid

<img srcset="/images/grids-imported.jpg 2x" class="padding border">

::: tip
For decimal numbers, use the dot instead of the comma.  
For example, write `10.5` instead of `10,5`
:::
