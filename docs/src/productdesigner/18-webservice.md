# Webservice

The module has a basic integration
with [the PrestaShop webservice API](https://devdocs.prestashop.com/1.7/webservice/)

To start, fetch the order details by order ID, for example

```
/api/order_details/[order ID]
```

Then read the `id_customization` value and fetch the customization like so

```
/api/customizations/[customization ID]
```

## Designs

Then read the customization value and use it to fetch the dynamic customization like this

```
/api/designs/[customization value]
```

The `design` data will be returned

```json
{
    "design": {
        "id": 66,
        "id_product": 91,
        "id_image": 45,
        "id_customization": 120,
        "quantity": 1,
        "id_customer": 2,
        "id_guest": 9,
        "summary": "<div> ... html summary ... </div>",
        "date_add": "2025-01-27 16:46:11",
        "date_upd": "2025-01-27 16:46:12",
        "id_cart": 30,
        "associations": {
            "design_items": [
                {
                    "id": 89
                }
            ],
            "design_previews": [
                {
                    "id": 48
                }
            ]
        }
    }
}
```

## Design items

To read the details about a design item

```
/api/design_items/[design item ID]
```

The `design_item` data will be returned

```json
{
    "design_item": {
        "id": 89,
        "id_design_container": 69,
        "category": "text",
        "text": "123",
        "font": "Verdana Bold",
        "color": "#FFFFFF (Or metal)"
    }
}
```

## Design previews

To read the details about a design preview

```
/api/design_previews/[design preview ID]
```

The `design_preview` data will be returned

```json
{
    "design_preview": {
        "id": 48,
        "id_design": 66,
        "url": "/prestashop/tunisoft/designer/design_preview/preview_6797aa4401479-0.svg",
        "file": "preview_6797aa4401479-0.svg",
        "display_to_client": 1,
        "date_add": "2025-01-27 16:46:12"
    }
}
```

::: tip  
By default, only the visible fields will be returned. If you want to display all the fields, add the
parameter `display` = `full` to your request.
::: 
