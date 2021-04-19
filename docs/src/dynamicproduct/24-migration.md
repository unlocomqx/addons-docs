# Data migration

To migrate the module data from one shop to another, you need to follow these steps

:one: Install the same version of the module on the new shop

:two: Export the module tables from the previous shop to the new shop and import them in the new
shop

::: tip  
The module tables start with `ps_dynamicproduct_` or generally `[prefix]_dynamicproduct_`
:::

:three: Copy the `dynamicproduct` folder, that is located in the root of the previous shop

The `dynamicproduct` folder contains the module files such as the images and the php calculation
files etc...
