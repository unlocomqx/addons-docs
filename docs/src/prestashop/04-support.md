# Addons Support

To ensure the fastest and best support, please follow this guide

### Use English or French as much as possible

Please send me your message in English or French. Also set the backoffice access to English or French if possible.

For the [Dynamic Product module](/dynamicproduct/), please name your fields in english. It will
make it easier for me to understand the calculation logic and to better assist you.

### Include a product link in your message

Please include a product link so I can check the issue directly. Sometimes the issue is related to your theme or to
another module that is installed on your shop.

::: tip  
Generally, when an issue is fixed for a product, it will also be fixed for other products.
:::

### Include a backoffice and ftp access if necessary

Access to the configuration is sometimes needed to make quick changes and fix an issue. Make sure that the backoffice is
set to the English or French language.

In the case of a server error, access to the ftp is crucial to make the necessary fixes.

### List the steps to follow in order to reproduce the issue

To be able to find a solution, we need to first be able to replicate the issue and determine the cause of the problem.

Make sure to include any information that you think is relevant to the issue.

::: tip  
Include the front-office login if the issue occurs when you are logged in.
:::

### Disable any cache system

If you use a CDN or use memcached or a module that caches the pages html, please disable them.

Also if you use **PHP OPcache** or any other php cache system, please disable them.

Testing with a cache system enabled will make it impossible to know whether changing an option or a file has any effect
on the problem, so it will be impossible to determine the true cause of the issue.

### Disable smart cache for JS & CSS

Smart cache combines all the files in your shop into one file, which can make it difficult to debug issues or to
determine which module is causing the problem.

Please open the Performance page in the backoffice and disable the Smart Cache for JS & CSS.
