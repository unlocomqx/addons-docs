# Custom script

Currently, the module only has this flag that can be set using JavaScript:

## Skipping the summary modification

Normally, the module moves the summary out of the modal dialog and displays it in the page content.

If your theme already has a summary block in the page content, you can skip this modification by setting
the `dsn_skip_summary` flag to `true`:

```js
window.dsn_skip_summary = true;
```

This is to avoid having the summary displayed twice on the page.