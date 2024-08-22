# Translations

To learn how to translate the module phrases, please check the [general guide](/prestashop/02-translation.md).

## Translating the customization field label

The module adds a [customization field](/prestashop/01-customization.md) in order to save the customization.

You can customize the label by using this method:

1. Open the file `[root of PrestaShop]/designer/json/customization_field.json`.
2. Add your language iso code and the corresponding label.

Here's an example:

Original content:

```json
{
  "en": "Design",
  "es": "Diseño",
  "fr": "Conception",
  "nl": "Ontwerp"
}
```

Add the translation for the Italian language:

```json
{
  "en": "Design",
  "es": "Diseño",
  "fr": "Conception",
  "nl": "Ontwerp",
  "it": "Concezione"
}
```

You can validate the json format using an online tool like [jsonlint](https://jsonlint.com/).