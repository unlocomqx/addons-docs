# Custom pricing

You can add a custom pricing plugin if needed, by creating a plugin file in module `plugins/pricing`
directory.

You can find a sample file in `plugins/pricing/CustomPricing.php` that you can use as a template.

::: warning
Do not modify the sample file directly, as it will be overwritten when you update the module.
:::

You will need to implement your logic in the `getPricing` method.

```php
<?php

namespace plugins\pricing;

use classes\models\design\Design;
use classes\models\DesignerProductPricing;
use Context;
use ProductDesigner;

class CustomPricing
{

    /** @var ProductDesigner $module */
    private $module;
    /** @var Context $context */
    private $context;

    public function __construct($module, $context)
    {
        $this->module = $module;
        $this->context = $context;
    }

    /**
     * Add custom pricing logic
     * 
     * @param DesignerProductPricing $pricing Contains your pricing rules for the product
     * @param Design $design Contains all information about the customer design
     * @return float The price to add to the design cost
     */
    public function getPricing(DesignerProductPricing $pricing, Design $design)
    {
        return 0;
    }
}
```

Open the `Design` in `/modules/productdesigner/classes/models/design/Design` to set all available
methods.
