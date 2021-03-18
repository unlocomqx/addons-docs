# Field formulas

You can configure field formulas which allows you to change the value of a field based on the value of other fields

For example, we would like to have an **area** field which will hold the area that is calculated from the **width** and **length** fields.

<img srcset="/images/field-formula.jpg 2x">

In this example, we set the **area** field value to the meter squared area.  
Formula:
<code class="formula">**[area]** = **[width]** * **[length]** / 10000</code>

We can then use the **area** field directly in the price formula for example
Before:
<code class="formula">**[width]** * **[length]** / 10000 * 50</code>
After:
<code class="formula">**[area]** * 50</code>

<img srcset="/images/field-formula-area.jpg 2x">

## Conditional calculations

In the field formulas, you can also perform condition calculations.  
For example, let's say we have a price that we want to reduce when the area exceeds 3 meter squared.

The first step is to create the price field, let's call it **price_m2** and give it a default value of 50.

<img srcset="/images/field-formulas-price_m2.jpg 2x" class="border">

Now in the field formula, we can change its value using an **IF** statement like this

<img srcset="/images/field-formulas-price_m2_formula.jpg 2x">

The formula means: If the **area** is bigger than 3 m2 then set **price_m2** to 40, otherwise set it to 50.

We can do even better and use the default value:
<code class="formula">**[price_m2]** = IF ( **[area]** > 3 , **[price_m2]** * 0.8 , **[price_m2]** )</code>
This means: If **area** is bigger than 3, then reduce **price_m2** by 20%, otherwise use the default value which is 50.
