import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.resource("projects");

  this.resource("contact");

  this.resource("blog", function() {

  });

});

export default Router;
