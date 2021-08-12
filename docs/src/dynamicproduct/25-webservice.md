# Webservice

The module has a basic integration with [the PrestaShop webservice API](https://devdocs.prestashop.com/1.7/webservice/)

To start, fetch the order details by order ID, for example
```
/api/order_details/[order ID]
```
Then read the `id_customization` value and fetch the customization like so
```
/api/customizations/[customization ID]
```
Then read the customization value and use it to fetch the dynamic customization like this
```
/api/dynamic_inputs/[customization value]
```
A list of `dynamic_input_fields` will be returned, containing each a label and a value
```xml
<?xml version="1.0" encoding="UTF-8"?>
<prestashop
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <dynamic_input>
    <id>
      <![CDATA[132]]>
    </id>
    <associations>
      <dynamic_input_fields nodeType="dynamic_input_field" api="dynamic_input_fields">
        <dynamic_input_field>
          <id>
            <![CDATA[993]]>
          </id>
          <name>
            <![CDATA[width]]>
          </name>
          <value>
            <![CDATA[50]]>
          </value>
        </dynamic_input_field>
        <dynamic_input_field>
          <id>
            <![CDATA[994]]>
          </id>
          <name>
            <![CDATA[length]]>
          </name>
          <value>
            <![CDATA[80]]>
          </value>
        </dynamic_input_field>
        <dynamic_input_field>
          <id>
            <![CDATA[995]]>
          </id>
          <name>
            <![CDATA[height]]>
          </name>
          <value>
            <![CDATA[60]]>
          </value>
        </dynamic_input_field>
      </dynamic_input_fields>
    </associations>
  </dynamic_input>
</prestashop>
```
