# cardinal-help-app

The Help app for cardinalapps.xyz. This is a React app using Next.js that serves
guides and documentation for Cardinal apps.

## Run the app

Run the development server. You can use the includes VSCode launch config for
server side breakpoint support, or use the following npm command:

```
npm run dev
```

Then open localhost:3000.

## Pages

The routes use the Next.js file based routing system. The frontend mega menu is
automatically built based on the file structure of the pages on the disk.

## Page Configs

Page configurations are `.json` files associated with a single route, which
defines data that's made available to the app. Page configs are useful for
defining static data that gets read at build time, like menu priority, SEO
strings, icons, and keywords. Anything that would be set in an admin panel.

To create a page config, first create your Next.js page in `/pages`, then create
another file with the same name, that ends in `.config.json`.

### Possible page configs

```js
{
  // Top level pages only: `image` or `font`
  "sectionIconType": "image",

  // Top level pages only: path to an image, or FontAwesome classes
  "sectionIcon": "/icons/logo-music.svg", 

  // `image` or `font`
  "iconType": "font",

  // Path to an image, or FontAwsome classes
  "icon": "fas fa-music",

  // Page order priority
  "priority": 100,

  // Default sidebar mode for this page. If omitted, the app will use `reading` mode.
  "sidebarMode": "expanded"
}
```

## Scripts

#### `npm run models/pages`

Use `npm run models/pages` **on dev** to execute the page model and cache the
output in `cache/pages.json`. This script can only be run on dev, because Vercel
does not keep the `/pages` directory in prod (everything is webpacked, Node's
`fs` is not reliable in prod).

Whenever you make a change to a page config, add a page, or delete a page, you
must run `npm run models/pages`.

## `cache` Directory

The top-level `cache` directory contains cache that is created by the scripts.
This directory is not related to the internal Next.js cache, and we should
ensure that `cache` gets pushed to staging and prod.

## License

Uses the GPLv3 software license.
