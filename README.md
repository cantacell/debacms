# Website

This website is built using [Docusaurus](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```
Or via npm (node.js version >= 18 required)

```
$ npm install
```

In case of installation errors try to run
```
$ npm install --legacy-peer-deps
```

### Local Development

```
$ yarn start
```

Or with npm (node.js version >= 18 required)
```
$ npm run start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

Or with npm (node.js version >= 18 required)
```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

#### To be able to run lunr search plugin you have to build first and then host build folder. Lunr search plugin is not working in Docusaurus development mode.
