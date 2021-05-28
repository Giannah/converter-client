# client

This repo is the UI interface.

It's a [Vue 2](https://vuejs.org/) project boostraped with [Vue-cli](https://cli.vuejs.org/).

Formatting & code style are enforced by [Eslint](https://eslint.org/) & [Prettier](https://prettier.io/).

The UI comes mostly from the UI components library [Vuetify](https://vuetifyjs.com/en/).

Requests to the API are made through [Axios](https://github.com/axios/axios) and default port is set in the dependencies plugin (src/plugins/dependencies.js) if you ever need to change it.

### Note

**_The exercise is a two-part exercise and therefore there is two branches in that repo._**

This branch is the first part and corresponds to the Back-End (converter-server) repo's **main** branch.

In order to use this project:

Clone this repo and then...

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

Project will be available at http://localhost:8080 if not already in use. You can choose to pass in another port either temporarily or permanently. In order to do so, refer to the docs.

### Compiles and minifies for production

```
npm run build
```

### Run your unit tests

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
