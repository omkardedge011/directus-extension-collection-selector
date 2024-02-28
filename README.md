# Directus Extension: Collection Selector

This extension enables effortlessly selecting the collections directly from the database within the Directus interface.

## Installation

In your Directus installation root
You can install this package via npm:

```bash
npm install directus-extension-collection-selector
```

Restart directus

## Usage

To use this custom interface into a data model, you have to:

- Select **Collection Selector** in **Other** tabs.
- If you want to filter the collections with a prefix string, populate it in the **Start With** Field.
- The collections will appear on the item page in select dropdown(string format).

## Building locally and contributing

You can also clone this repository and build it by yourself.

```
npm ci
npm run build
```

Then use `dist/index.js` in your custom `/extensions/interfaces` directory or in whatever you want.