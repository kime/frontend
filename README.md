# Kime Frontend

[![Build Status](https://travis-ci.com/kime/frontend.svg?branch=master)](https://travis-ci.com/kime/frontend)
[![codecov](https://codecov.io/gh/kime/frontend/branch/master/graph/badge.svg)](https://codecov.io/gh/kime/frontend)
[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


## Getting started

1. Go to project folder and install dependencies:
 ```sh
 npm install
 ```

2. Launch development server, and open `localhost:4200` in your browser:
 ```sh
 npm start
 ```

## Project structure

```
dist/                        web app production build
docs/                        project documentation
e2e/                         end-to-end tests
src/                         project source code
|- app/                      app components
|  |- core/                  core module (singleton services and single-use components)
|  |- shared/                shared module  (common components, directives and pipes)
|  |- app.component.*        app root component (shell)
|  |- app.module.ts          app root module definition
|  |- app-routing.module.ts  app routes
|  +- ...                    additional modules and components
|- assets/                   app assets (images, fonts, sounds...)
|- environments/             values for various build environments
|- theme/                    app global scss variables and theme
|- translations/             translations files
|- index.html                html entry point
|- main.scss                 global style entry point
|- main.ts                   app entry point
|- polyfills.ts              polyfills needed by Angular
+- test.ts                   unit tests entry point
reports/                     test and coverage reports
proxy.conf.js                backend proxy configuration
```

## Dependencies

### Libraries

- [Angular](https://angular.io)
- [Bootstrap 4](https://getbootstrap.com)
- [ng-bootsrap](https://ng-bootstrap.github.io/)
- [Font Awesome](http://fontawesome.io)
- [RxJS](http://reactivex.io/rxjs)
- [ngx-translate](https://github.com/ngx-translate/core)
- [Lodash](https://lodash.com)

### Toolchain

Development, build and quality processes are based on [angular-cli](https://github.com/angular/angular-cli) and [NPM scripts](https://docs.npmjs.com/misc/scripts), which includes:

- Optimized build and bundling process with [Webpack](https://webpack.github.io)
- [Development server](https://webpack.github.io/docs/webpack-dev-server.html) with backend proxy and live reload
- Cross-browser CSS with [autoprefixer](https://github.com/postcss/autoprefixer) and [browserslist](https://github.com/ai/browserslist)
- Asset revisioning for [better cache management](https://webpack.github.io/docs/long-term-caching.html)
- Unit tests using [Jasmine](http://jasmine.github.io) and [Karma](https://karma-runner.github.io)
- End-to-end tests using [Protractor](https://github.com/angular/protractor)
- Static code analysis: [TSLint](https://github.com/palantir/tslint), [Codelyzer](https://github.com/mgechev/codelyzer), [Stylelint](http://stylelint.io) and [HTMLHint](http://htmlhint.com/)
- Local knowledgebase server using [Hads](https://github.com/sinedied/hads)
- Automatic code formatting with [Prettier](https://prettier.io)

## Task automation

Task automation is based on [NPM scripts](https://docs.npmjs.com/misc/scripts). Tasks are mostly based on the `angular-cli` tool. Use `ng help` to get more help or go check out the [Angular-CLI README](https://github.com/angular/angular-cli).

Task                            | Description
--------------------------------|--------------------------------------------------------------------------------------
`npm start`                     | Run development server on `http://localhost:4200/`
`npm run build [-- --configuration=production]` | Lint code and build web app for production (with [AOT](https://angular.io/guide/aot-compiler)) in `dist/` folder
`npm test`                      | Run unit tests via [Karma](https://karma-runner.github.io) in watch mode
`npm run test:ci`               | Lint code and run unit tests once for continuous integration
`npm run e2e`                   | Run e2e tests using [Protractor](http://www.protractortest.org)
`npm run lint`                  | Lint code
`npm run translations:extract`  | Extract strings from code and templates to `src/app/translations/template.json`
`npm run docs`                  | Display project documentation
`npm run prettier`              | Automatically format all `.ts`, `.js` & `.scss` files

When building the application, you can specify the target configuration using the additional flag `--configuration <name>` (do not forget to prepend `--` to pass arguments to npm scripts).

The default build configuration is `prod`.

### Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files. You should not use `ng serve` directly, as it does not use the backend proxy configuration by default.

### Code scaffolding

Run `npm run generate -- component <name>` to generate a new component. You can also use `npm run generate -- directive|pipe|service|class|module`.

If you have installed [angular-cli](https://github.com/angular/angular-cli) globally with `npm install -g @angular/cli`, you can also use the command `ng generate` directly.

### Code formatting

All `.ts`, `.js` & `.scss` files in this project are formatted automatically using [Prettier](https://prettier.io), and enforced via the `test:ci` script.

You can also force code formatting by running the command `npm run prettier`.
