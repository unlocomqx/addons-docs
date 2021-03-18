# Installation

The module installation requires no special steps.  
Simply upload the zip through the Modules Manager page and the module will be installed normally.

<img srcset="/dynamicproduct/images/install.jpg 2x" class="border">

## Overrides
The module will install the following overrides automatically:
- **Carrier** override  
  Path: **/override/classes/Carrier.php**  
  Methods: 
  - **getAvailableCarrierList**: used to [filter carriers](18-carrier-filtering.md) based on the product size
  
- **Cart** override  
  Path: **/override/classes/Cart.php**  
  Methods: 
  - **duplicate**: used to detect the reorder feature and to duplicate the module customizations
  
- **Product** override  
  Path: **/override/classes/Product.php**  
  Methods: 
  - **getProductProperties**: used to alter the product [displayed price](/dynamicproduct/product-config/06-settings.md#displayed-price) in category page when a display price is configured
