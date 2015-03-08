import Ember from 'ember';

export default Ember.Controller.extend({
    
    navigationLinks: [
        {name: 'Home', route: 'index'},
        {name: 'Projects', route: 'projects'},
        {name: 'Blog', route: 'blog'},
        {name: 'Contact', route: 'contact'}
    ],

    isMenuOpen: false,

    actions: {

        openMenuAction: function() {

            if(!this.get("isMenuOpen")) {

                Ember.Logger.info("openMenuAction caught");

                this.set("isMenuOpen", true);

                document.body.className += " show-menu";

            }

        },
        closeMenuAction: function() {
            if(this.get("isMenuOpen")) {

                Ember.Logger.info("closeMenuAction caught");

                this.set("isMenuOpen", false);

                $(document.body).removeClass("show-menu");

            }
        },

        goto: function(url) {

            window.location.href = url;

        }

    }

});