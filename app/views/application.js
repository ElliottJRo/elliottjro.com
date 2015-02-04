import Ember from "ember";

export default Ember.View.extend({

  initFoundation: function() {
    this.$(document).foundation({
      offcanvas: {
        open_method: 'overlap_single'
      }
    });
  }.on("didInsertElement"),

});