import Ember from "ember";

export default Ember.View.extend({

  initFoundation: function() {
    this.$(document).foundation({
        offcanvas : {
        // Sets method in which offcanvas opens.
        // [ move | overlap_single | overlap ]
        open_method: 'overlap_single', 
        // Should the menu close when a menu link is clicked?
        // [ true | false ]
        close_on_click : false
      }
    });
  }.on("didInsertElement"),

});