/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'elliottjro',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

 if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
    
    // Open all xss
    ENV.contentSecurityPolicy = {
      'default-src': "*",
      'script-src': "* 'unsafe-inline' 'unsafe-eval'",
      'font-src': "* ",
      'connect-src': "* ",
      'img-src': "* ",
      'style-src': "* 'unsafe-inline'",
      'media-src': "*",
      'report-uri': "api/test"
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {
    /**
     * Adds content security policy options to prevent xss attacks
     *  See http://content-security-policy.com/ for more info about these options
     */
    ENV.contentSecurityPolicy = {
      'default-src': "'none'",
      // Allow scripts from google and olark
      'script-src': "'self' 'unsafe-inline' 'unsafe-eval' *.gstatic.com "+
                    "*.googleapis.com www.google-analytics.com",
      // Allow iframes from olark
      'frame-src': "'self' ",
      // Allow fonts to be loaded from google and bootstrap
      'font-src': "'self' fonts.gstatic.com ",
      // Allow data (ajax/websocket) from olark
      'connect-src': "'self' *.olark.com",
      // Allow images from google and olark
      'img-src': "'self' *.googleapis.com *.gstatic.com"+
                 " www.google-analytics.com",
      // Allow css from bootstrap, google and olark
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com ",
      // Allow media from static.olark
      'media-src': "'self' ",
      // Report all infractions to api/test
      'report-uri': "api/test"
    }
  }

  return ENV;
};