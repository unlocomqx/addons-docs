# Custom pricing

You can add a custom pricing plugin by creating a plugin file in the `plugins/pricing`
directory.

Here's the folder path

```
[PrestaShop root]/designer/plugins/pricing
```

You can find a sample file in `/designer/plugins/pricing/CustomPricing.php` that you can use as a
template.

You will need to implement your logic in the `getPricing` method.

```php
<?php

namespace ProductDesignerData\plugins\pricing;

use ProductDesigner\classes\models\design\Design;
use ProductDesigner\classes\models\DesignerProductPricing;

// Impotant: If you change the file name, make sure to change the class name as well
class CustomPricing
{

    /** @var \ProductDesigner */
    private $module;
    /** @var \Context */
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
     * @param float $current_price The current cost of the design
     * @return float The price to add to the design cost
     */
    public function getPricing(DesignerProductPricing $pricing, Design $design, float $current_price)
    {
        return 0;
    }
}
```

Open the `Design` class in `/modules/productdesigner/classes/models/design/Design` to see all available
methods.

Here's an example code to show you how to read the properties of the design elements.

In this example, we will add a cost based on the element's perimeter.

```php 
$cost = 0;
// The containers are the fields or areas
foreach ($design->getContainers() as $container) {
    // The design elements are wrappers around the design items
    foreach ($container->getDesignElements() as $design_element) {
        // The design items are the actual elements
        $design_item = $design_element->getDesignItem();
        // Get the perimiter of the design item in meters
        $perimeter = ($design_item->width + $design_item->height) * 2 / 100;
        $cost += $perimeter * 3;
    }
}
return $cost;
```
