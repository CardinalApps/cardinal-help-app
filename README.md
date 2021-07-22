# cardinal-website-next

The React version of cardinalapps.xyz. This project will go through 2 phases:

1. Launch under the help.cardinalapps.xyz subdomain as the help/docs site.
2. Convert the existing static website to React while migrating that code to
   this project, then let this project take over the apex domain
   cardinalapps.xyz.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the
result.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on
[http://localhost:3000/api/hello](http://localhost:3000/api/hello). This
endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are
treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead
of React pages.

## Hosting

The static site is hosted on Heroku. This project is hosted on Vercel.
Eventually, everything will move to Vercel.
