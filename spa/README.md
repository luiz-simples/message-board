# message-board-spa
Project Sample with Socket, Angular

Environment with:

* [AdminLTE](https://almsaeedstudio.com/themes/AdminLTE/documentation/index.html)
* [Yeoman generator for AngularJS + Gulp.](https://github.com/Swiip/generator-gulp-angular)

## Use Gulp tasks

* `gulp` or `gulp build` to build an optimized version of your application in `/dist`
* `gulp serve` to launch a browser sync server on your source files
* `gulp serve:dist` to launch a server on your optimized application
* `gulp test` to launch your unit tests with Karma
* `gulp test:auto` to launch your unit tests with Karma in watch mode
* `gulp protractor` to launch your e2e tests with Protractor
* `gulp protractor:dist` to launch your e2e tests with Protractor on the dist files

More information on the gulp tasks in the [User Guide](https://github.com/Swiip/generator-gulp-angular/blob/master/docs/user-guide.md).

## Directory structure

[Best Practice Recommendations for Angular App Structure](https://docs.google.com/document/d/1XXMvReO8-Awi1EZXAXS4PzDzdNvV6pGcuaF4Q9821Es/pub)

The root directory generated with default paths configuration for application with name `/spa`:
<pre>
├──  bower_components/
├──  e2e/
├──  gulp/
├──  nodes_modules/
│
├──  src/
│   ├──  app/
│   │   ├──  components/
│   │   │   └──  githubContributor/
│   │   │   │   └──  githubContributor.service.js
│   │   │   │
│   │   │   └──  malarkey/
│   │   │   │   ├──  malarkey.directive.js
│   │   │   │   └──  malarkey.(scss|styl|less|css)
│   │   │   │
│   │   │   └──  navbar/
│   │   │   │   ├──  navbar.directive.(js|ts|coffee)
│   │   │   │   ├──  navbar.html
│   │   │   │   └──  navbar.(scss|styl|less|css)
│   │   │   │
│   │   │   └──  webDevTec/
│   │   │       └──  webDevTec.service.js
│   │   │
│   │   ├──  main/
│   │   │   ├──  main.controller.(js|ts|coffee)
│   │   │   ├──  main.controller.spec.js
│   │   │   └──  main.html
│   │   │
│   │   └──  index.config.(js|ts|coffee)
│   │   └──  index.constants.(js|ts|coffee)
│   │   └──  index.module.(js|ts|coffee)
│   │   └──  index.route.(js|ts|coffee)
│   │   └──  index.run.(js|ts|coffee)
│   │   └──  index.(scss|styl|less|css)
|   |
│   ├──  assets/
│   │   └──  images/
│   ├──  favico.ico
│   └──  index.html
│
├──  .bowerrc
├──  .editorconfig
├──  .gitignore
├──  .eslintrc
├──  bower.json
├──  gulpfile.js
├──  karma.conf.js
├──  package.json
└──  protractor.conf.js
</pre>
