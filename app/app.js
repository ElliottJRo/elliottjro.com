import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';
import ApplicationAdapter from './adapters/application';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

App.RESTSerializer = DS.RESTSerializer.extend({
  init: function() {
    this._super();
  }
});

App.Store = DS.Store.create({
  revision: 1,
  adapter: ApplicationAdapter
});

loadInitializers(App, config.modulePrefix);

export default App;
