# Basic Build with NPM scripts
This is a project scaffolding and build tool for the TIY Austin Front-End Engineering course. Feel free to use and enjoy! Feedback and PRs welcome!

## Features
- A bare bones scaffolding for an SPA, without any libraries built in
- `app` directory for development, preloaded with an `index.html`, `scripts/entry.js`, `scss/main.scss` and `assets/`
- `dist` directory for deployable code
- es2015 and babel, including module syntax
- sass (.scss)

## Installation
- Clone this repo (or fork then clone, if you prefer)
- Remove the git history by running `rm -rf .git`
- Set up a new git repo
- Run `npm install`

## Use
- `npm install` will scaffold your project AND start the dev server
- `npm start` will start the dev server and watch for changes
- `npm deploy` will push the content of `dist/` to gh-pages

## Dependencies
- `sass` [install guide here](http://sass-lang.com/install)
