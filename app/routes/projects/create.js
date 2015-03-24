import Ember from 'ember';

export default Ember.Route.extend({

  newModel: null,

  model: function() {
    var currentModel = this.get("newModel");

    if(!Ember.isEmpty(currentModel)) {
      return currentModel;
    } else {
      currentModel = this.store.createRecord("project");
      this.set("newModel", currentModel);
      return currentModel;
    }
  }


});