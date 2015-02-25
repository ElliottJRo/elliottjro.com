import Ember from 'ember';

export default Ember.Route.extend({


    renderTemplate: function(controller, model) {

        this._super(controller, model);

        this.render('views/footer', {
            into: 'application',
            outlet: 'footer'
        });

    }


});