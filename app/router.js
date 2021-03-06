import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
    location: config.locationType
});

Router.map(function() {

    // this.resource("projects", function() {
    //     this.route("projectItem", {path: "/:project_id"});
    //     this.route("create");
    // });

    this.resource("contact");

    this.resource("blog", function() {
        this.route("post", {path: "/:post_name"});
    });

});

export default Router;
