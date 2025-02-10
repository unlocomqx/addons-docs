# Data migration

To migrate the module data from one shop to another, you need to follow these steps

:one: Install the same version of the module on the new shop

:two: Export the module tables from the previous shop to the new shop and import them in the new shop

::: tip  
The module tables start with `ps_productdesigner_` or generally `[prefix]_productdesigner_`
:::

:three: Copy the `designer` folder, that is located in the root of the previous shop  

The `designer` folder contains the module files such as the images and the fonts etc...

::: tip
Compare the module id in the `ps_module` table. If it's different between the two shops, then update the `id_module`
column is the table `ps_customized_data` to match the new module id.
:::
