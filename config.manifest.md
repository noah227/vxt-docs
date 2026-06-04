# Manifest

Configure extension modules in `manifest.json` and ensure your Vite build output matches the manifest paths.

For example, the side panel is not configured by default in either the Vite build entry or the manifest file. If you need side-panel in your app, then you need to config it both in Vite build entry and manifest file.

## References

* JSON Schema: https://json.schemastore.org/chrome-manifest.json
* Manifest reference: [manifest](https://developer.chrome.google.cn/docs/extensions/reference/manifest)