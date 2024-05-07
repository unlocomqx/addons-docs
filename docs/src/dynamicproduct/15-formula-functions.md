# Formula functions

The module supports many Excel functions that you can use in your calculations

## Standard functions

### **SQR**

Return the square of a number

```xls
SQR(5) → 25
```

### **SQRT**

Returns the square root of a number

````xls
SQRT(25) → 5 
````

### **ABS**

Returns the absolute value of a number

````xls
ABS(-10) → 10
````

### **SIGN**

Returns the signs of a number

```xls
SIGN(10) → 1
SIGN(-10) → -1
SIGN(0) → 0
```

### **TRUNC**

Returns the truncated number

```xls
TRUNC(4.9) → 4
TRUNC(-3.5) → -3
```

### **CEIL**

Rounds a number up

```xls
CEIL(3.2) → 4
CEIL(-3.14) → -3
```

### **FLOOR**

Rounds a number down

```xls
FLOOR(3.2) → 3
FLOOR(-3.14) → -4
```  

### **ROUND**

Uses PrestaShop rounding method (configurable in the PrestaShop settings)

```xls
ROUND(number, decimals)
ROUND(5.16, 0) → 5
ROUND(5.16, 1) → 5.2
```

### **ROUNDUP**

Rounds a number up using PrestaShop's rounding method

```xls
ROUNDUP(number, decimals)
ROUNDUP(5.16, 0) → 6
ROUNDUP(5.11, 1) → 5.2
```  

### **ROUNDDOWN**

Rounds a number down using PrestaShop's rounding method

```xls
ROUNDDOWN(number, decimals)
ROUNDDOWN(5.16, 0) → 5
ROUNDDOWN(5.11, 1) → 5.1
```     

### **VAL**

Returns the number value of a string

```xls
VAL("2") → 2
```

### **POW**

Raise a number to a specific power

```xls
POW(5, 3) → 125
```  

### **MIN**

Return the smallest value among the passed parameters (accepts two parameters or more)

```xls
MIN(10, 5, 14, 3) → 3
```

### **MAX**

Return the biggest value among the passed parameters (accepts two parameters or more)

```xls
MAX(10, 5, 14, 3) → 14
```  

### **IF**

Test for a specific condition

```xls
IF(condition, value if true, value if false)
IF(100 > 10, 1, 2) → 1
IF(5 > 10, 1, 2) → 2
```

### **STRLEN**

Return the number of characters in a string (supports UTF-8)

```xls
STRLEN('Hello') → 5
STRLEN('World!') → 6
```

### **SUBSTR**

Extract a string from another string

```xls
SUBSTR(string, start, length)
SUBSTR("Hello world!", 0, 5) → "Hello"
```

### **REPLACE**

Find and replace a string in another string

```xls
REPLACE(string, find, replace)
REPLACE("It's a good day", "good", "great") → "It's a great day"
```

### **CONCAT**

Joins multiple strings together, accepts two strings or more

```xls
CONCAT("A great ", "day") → "A great day"
CONCAT( "A great ", "day ", "today" ) → "A great day today"
```

---

## Available variables

### **PI**

The PI constant

```xls
PI * SQR([diameter] / 2)
```

## Custom functions

These custom functions are added by the module for convenience and to satisfy some specific use
cases.

### **CONTAINS**

Check if a string is contained withing another string

```xls
CONTAINS(string, partial)
CONTAINS("Hello world!", "Hello") → 1
CONTAINS("Hello world!", "Hello!") → 0
CONTAINS("Hello world!", "Test") → 0
```

### **CHECK**

Checks if a string if not empty, return 0 if string is empty, 1 otherwise

```xls
CHECK("Hello") → 1
CHECK("") → 0
```

---

### **PRICE**

Formats a number as a price, useful when
displaying [dynamic content](/dynamicproduct/19-dynamic-content.md)

```xls
PRICE("29.5") → €29.50
PRICE("120") → €120.00
PRICE("10000") → €10,000.00
```

---

### **BINARY_AND**

Performs
a [bitwise AND operation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)

```xls
BINARY_AND(4, 1) → 0
BINARY_AND(6, 2) → 2
```

### **BINARY_OR**

Performs
a [bitwise OR operation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)

```xls
BINARY_OR(4, 1) → 5
BINARY_OR(6, 2) → 6
```

### **LABEL**

Returns the label of the current selected option of a field.
The returned label will be in the default language of the shop.

This function makes it easier to reference the selected option in a formula.

```xls
LABEL("{dropdown}") → "Option 1" // for example
```

### **REF**

Returns the reference of the current selected option of a field.

```xls
REF("{dropdown}") → "opt1" // for example
```

### **NUM_SELECTED**

Returns the reference of the current selected option of a field.

```xls
NUM_SELECTED("{images}") → 4 // for example
```

::: tip
The `LABEL`, `REF`, and `NUM_SELECTED` need the field ID. That's why the field name is surrounded by curly braces. It's
a placeholder that will be replaced by the actual field ID when the formula is executed.
:::

## The Grid function

**Grid**: Allows reading a CSV file and getting a result based on two values  
This function is very similar to [the Grid feature](/dynamicproduct/product-config/13-grids.md).

The function format is as follows

```xls
Grid( database, row value, column value, default value ) 
```

The `default value` parameter is optional, it will be used when no cell matches the passed
parameters. If no default value is passed to the function, then 0 will be the default value.

Here's a [CSV sample](/dynamicproduct/files/sample.csv ':ignore')

To use this function, start by uploading your CSV file to the
folder `[root of PrestaShop]/dynamicproduct/databases/`  
Then in the formula, you can insert this function by clicking the CSV file

1. Click the "**Show more**" button
2. Click the CSV file to insert the Grid function into the formula
3. Insert the two other fields that will act as the input to the grid

In this case, we get a price based on the width and height values

<img srcset="/dynamicproduct/images/grid-function.jpg 2x">

This method allows you to use a single CSV file for multiple products

::: tip  
For decimal numbers, use the dot instead of the comma.  
For example, write `10.5` instead of `10,5`
:::
