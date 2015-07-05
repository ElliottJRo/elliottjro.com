import Ember from "ember";

export default Ember.Route.extend({

    model: function() {

        return [
            {
                title: "Sample Blog One",
                bodyShort: "Using psychohistory, Seldon has discovered the declining nature of the Empire, angering the aristocratic members of the Committee of Public Safety, the de facto rulers of the Empire. The Committee considers Seldon's vi",
                dateHuman: "July 3, 2015",
                url: "sample-blog-one"
            }, {
                title: "Sample Blog Two",
                bodyShort: "Set in the year 0 F.E. ('Foundation Era'), The Psychohistorians opens on Trantor, the capital of the 12,000-year-old Galactic Empire. Though the empire appears stable and powerful, it is slowly decaying in ways that parallel the decl",
                dateHuman: "July 3, 2015",
                url: "sample-blog-two"
            }
        ]

    }

});
