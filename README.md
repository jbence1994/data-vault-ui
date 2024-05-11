data-vault-ui
=============

### Personal data management application's frontend.

[![Continuous integration](https://github.com/jbence1994/data-vault-ui/actions/workflows/build.yml/badge.svg)](https://github.com/jbence1994/data-vault-ui/actions/workflows/build.yml)

[Contributing Guide](.github/CONTRIBUTING.md)

Prerequisites
-------------

To avoid any unexpected application behaviour, make sure you have installed the following tool with the proper version number:

- [Node 20.11.1](https://nodejs.org/en/blog/release/v20.11.1)

Running project locally
-----------------------

### Install project dependencies

```bash
npm install
```

### Create .env.local file

Before you start, make sure you create a file called `.env.local` and define environment variables with the following keys:
- `VITE_DATA_VAULT_API_GRAPHQL_ENDPOINT`
- `VITE_PHOTO_RETRIEVE_ENDPOINT`

Set the proper URLs where you are actually running the GraphQL server application locally to this variable.

### Start application with npm:

```bash
npm run dev
```

#### To view the application, open [http://localhost:3000](http://localhost:3000) in your web browser.
