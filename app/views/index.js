import Ember from "ember";
import VelocityMixin from 'ember-velocity-mixin/main';

export default Ember.View.extend(VelocityMixin, {

  animateIn : function (done) {
    this.animate({opacity: [1, 0]}).then(function() {
      done();
    });
  },

  animateOut : function (done) {
    this.animate({opacity: [0, 1]}).then(function() {
      done();
    });
  }

});