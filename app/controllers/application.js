export default Ember.Controller.extend({
  navigationLinks: [
    {name: "Home", route: "index"},
    {name: "Projects", route: "projects"}
  ],

  slyScrollObject: null,

});