# Formulas

To make dynamic calculations, the module uses a formula system.

<img srcset="/images/formula.jpg 2x">

The concept is to reference the fields by name between brackets, so if the field has the name **width**,
then it can be referenced as **[width]**

The module will then replace the field references with their corresponding values

::: tip
The module formulas use the same syntax as **Excel**
:::

Adding a field to the formula is easy, you just need to click the field button to insert it.

Here are some formula example to get an idea about the syntax
<code class="formula">**[width]** * **[height]** / 10000 * 50</code>

<code class="formula">(**[width]** + **[height]**) * 2</code>

Many Excel functions can be used
<code class="formula">POW(**[width]**, 2)</code>

If statement for conditional calculation
<code class="formula">IF(**[width]** > 100, 10, 12)</code>

::: tip
The keyboard shortct to save a formula is **Ctrl** + **Enter**
:::

## Price formula
This formula is used to calculate the cost of the customization.  

::: tip
The result of this formula will be added to the base price of the product
:::

The module applies the taxes and the reductions to this result.  
The reductions that the module supports are:
- Product specific prices
- Group reductions
- Category reductions


## Weight formula
This formula is used to calculate the extra weight that the customization adds.  
The result of this formula affects the shipping cost.
To display the result of this formula, you can enable [the weight display option](/guide/product-config/06-settings.md#display-weight-to-customers).

## Quantity formula
This formula affects the quantity that is retracted from the stock when the order is validated.  
This is useful when you want to retract meters for example instead of units.  

Example:  
You have a field named length that you would like to use to retract the number of ordered meters.  
You can configure this formula:  
<code class="formula">**[length]**</code>

If you'd like to retract by meter squared for example
<code class="formula">**[width]** * **[length]**</code>

## Field values for each type

- **Numeric Input**  
  The value is the html field value
  <code class="formula">**[width]**</code>
- **Slider**  
  The value is the current slider value
  <code class="formula">**[slider]**</code>
- **Dropdown**  
  The value is the selected option value
  <code class="formula">**[dropdown]**</code>  
  To access the secondary value
  <code class="formula">**[[dropdown]]**</code>
- **Radio buttons**  
  The value is the selected option value
  <code class="formula">**[radio]**</code>
  To access the secondary value
  <code class="formula">**[[radio]]**</code>
- **Image list**  
  The value is the selected option value
  <code class="formula">**[list]**</code>
  To access the secondary value
  <code class="formula">**[[list]]**</code>
- **Checkbox**  
  The value is 1 if checked, 0 otherwise
  <code class="formula">**[checkbox]**</code>
- **Text**  
  The value is the html field value. When using this field inside the formula, always surround it with quotes
  <code class="formula">"**[text]**"</code>
- **Text Area**  
  The value is the html field value. When using this field inside the formula, always surround it with quotes
  <code class="formula">"**[textarea]**"</code>
- **Date**  
  The value is the html field value. When using this field inside the formula, always surround it with quotes
  <code class="formula">"**[date]**"</code>
- **Image**  
  The value is the uploaded image name. You can check if there is an image that was uploaded by using the `CHECK` function 
  ```xls
  CHECK([image]) // will return 1 if there is an image, 0 otherwise
  ```
- **File**  
  The value is the uploaded file name. You can check if there is an file that was uploaded by using the `CHECK` function
  ```xls
  CHECK([file]) // will return 1 if there is an image, 0 otherwise
  ```
- **Fixed Value**  
  The value is the current field value, that can be either the initial value of the value that was updated using PHP or using a field formula
  <code class="formula">**[fixed]**</code>
- **Price**  
  The value is the current field value, that can be either the initial value of the value that was updated using PHP or using a field formula
  <code class="formula">**[unit_price]**</code>
- **Dynamic Variable**  
  The value is the current field value, that can be either the initial value of the value that was updated using PHP or using a field formula
  <code class="formula">**[dynamic]**</code>
- **Feature**  
  The value is the feature value for the current language
  <code class="formula">**[feature]**</code>
- **Divider**  
  Cannot be used in the formula
- **Color picker**  
  The value is the html field value
  <code class="formula">**[picker]**</code>
- **Error message**  
  Can only be used in [conditions](/guide/product-config/09-conditions.md)

## Secondary values
For the fields of type **Dropdown**, **Radio buttons** and **Image list**, you can assign a secondary value to each option.  
The way you use this secondary value in the formula is by using double brackets  
Example
<code class="formula">**[[dropdown]]**</code>

You can easily insert this expression by long pressing the field name

<img srcset="/images/secondary-value.jpg 2x">
