/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var env = process.env.EMBER_ENV;
var config = require("./config/environment")(env);

var app = new EmberApp({
  wrapInEval: false,
  "ember-cli-foundation-sass": {
    "modernizer": true,
    "fastclick": true,
    "foundationJs": "all"
  }
});


/**
 * inlineContent
 * 
 * index.html inline content was enabled as of ember-cli 0.1.4
 * this is baised on ember-cli-inline-content addon
 * url: https://github.com/gdub22/ember-cli-inline-content
 * 
 */
app.options.inlineContent = {
  "footer": {
    file: "./vendor/footer.html",
  }
  // "google-analytics": {
  //   file: "./vendor/google-analytics.js",
  //   postProcess: function(content) {
  //     return content.replace(/\{\{GOOGLE_ANALYTICS_ID\}\}/g, config.googleAnalyticsId);
  //   },
  //   enabled: process.env.EMBER_ENV === 'production'
  // },
  // "olark": {
  //   file: "./vendor/olark.js",
  //   attrs: { 'data-cfasync' : true },
  //   enabled: process.env.EMBER_ENV === 'production'
  // },
  // "trackjs-options": {
  //   file: "./vendor/trackjs.js",
  //   enabled: process.env.EMBER_ENV === 'production'
  // },
  // "trackjs": {
  //   content: '<script type="text/javascript" src="//d2zah9y47r7bi2.cloudfront.net/releases/current/tracker.js" data-token="cee3b74e64784d8bbf6b6c5e5ad04dac"></script>',
  //   enabled: process.env.EMBER_ENV === 'production'
  // }
}

// Use `app.import` to add additional libraries to the generated
// output files.
//
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object"s keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

app.import({
  development: "bower_components/ember/ember.js",
  production:  "bower_components/ember/ember.prod.js"
});

// import Ember addons
app.import("bower_components/ember-animate/ember-animate.js");

// import jquery and jquery plugins
app.import({
  development: "bower_components/jquery/dist/jquery.js",
  production: "bower_components/jquery/dist/jquery.min.js"
});

// import velocity
app.import("bower_components/velocity/velocity.js");

app.import("vendor/foundation/offcanvas-override.js");



module.exports = app.toTree();
