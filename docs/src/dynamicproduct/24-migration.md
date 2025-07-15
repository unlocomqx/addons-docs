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

:four: (Optional) Upgrade the module to the latest version to get new features and bugfixes.

:warning: In some cases, this step is necessary to ensure the compatibility of the module with the version of PrestaShop
that you are using.

::: tip
Compare the module id in the `ps_module` table. If it's different between the two shops, then update the `id_module`
column is the table `ps_customized_data` to match the new module id.

```sql
# Backup your database before manipulating your data
UPDATE `ps_customized_data` SET `id_module`= NEW_ID WHERE `id_module`= OLD_ID
# UPDATE `ps_customized_data` SET `id_module`= 88 WHERE `id_module`= 77
```
:::
