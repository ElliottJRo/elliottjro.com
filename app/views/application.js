export default Ember.View.extend({
  initFoundation: function() {
    this.$(document).foundation();
  }.on("didInsertElement"),

});