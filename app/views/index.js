import Ember from "ember";
import VelocityMixin from 'ember-velocity-mixin/main';

export default Ember.View.extend(VelocityMixin, {

  animateIn : function (done) {
    Ember.Logger.info("ProjectsView - animateIn");
    this.animate({opacity: [1, 0]}).then(function() {
      done();
    });
  },

  animateOut : function (done) {
    Ember.Logger.info("ProjectsView - animateOut");
    this.animate({opacity: [0, 1]}).then(function() {
      done();
    });
  }

});