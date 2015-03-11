import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {

    this.resource("projects", function() {
        this.route("projectItem", {path: "/:project_id"});
    });

    this.resource("contact");

    this.resource("blog", function() {
    //this.route("post", {path: ":postName"});
    });

});

export default Router;
