import Ember from 'ember';

export default Ember.Controller.extend({

    actions: {

        saveNewProject: function(data) {
            Ember.Logger.info('saveNewProject Caught', data);
        }

    }    

});