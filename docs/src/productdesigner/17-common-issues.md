# Common issues

This section provides solutions to common issues that you may encounter while using the module.

## The design preview is not well displayed in the invoice

The library that is used by PrestaShop to generate the PDF invoices does not support the SVG format very well. This is why the
design preview is not displayed correctly in the invoice.

The solution is to convert the SVG format to PNG by [installing inkscape on server](/productdesigner/07-downloads.md#inkscape-installation).

You can also [disable the design preview in the invoice](/productdesigner/03-configuration.md#print-settings).
