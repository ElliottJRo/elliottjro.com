export default Ember.Controller.extend({
  navigationLinks: [
    {name: "foundation", route: "index"},
    {name: "home", route: "index"},
    {name: "projects", route: "index"}
  ],

  slyScrollObject: null,

});