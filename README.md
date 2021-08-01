# cardinal-website-next

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

The routes use the Next.js file based routing system. The app extends that
system by also using the structure of the `/pages` directory to automatically
build all frontend pages.

### Page Configs

The app implements custom page configs. Each page can be accompanied by a
`.config.json` file with the same name as the page. Page configs are useful for
setting static data that gets read at build time, like menu priority, SEO
strings, icons, and keywords.

For example:

```
// The Next.js route
pages/developer/plugins/component-plugins.js

// The associated config file
pages/developer/plugins/component-plugins.config.json
```

The JSON object will be attached to the PageObject that the API returns.
