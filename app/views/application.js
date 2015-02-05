import Ember from "ember";
import VelocityMixin from 'ember-velocity-mixin/main';

export default Ember.View.extend(VelocityMixin, {

  initFoundation: function() {
    this.$(document).foundation();
  }.on("didInsertElement"),

});