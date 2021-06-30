
[![Netlify Status](https://api.netlify.com/api/v1/badges/fc3e1479-6362-47a2-8b07-d55e0a371a1f/deploy-status)](https://app.netlify.com/sites/lucid-davinci-85c04a/deploys) [![Crowdin](https://badges.crowdin.net/mxc-documentation/localized.svg)](https://crowdin.com/project/mxc-documentation)
# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern
static website generator.

## Installation

```console
yarn install
```

## Local Development

```console
yarn start
```

This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.

## Build

```console
yarn build
```

This command generates static content into the `build` directory and can be
served using any static contents hosting service.

## Deployment

```console
GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to
build the website and push to the `gh-pages` branch.
