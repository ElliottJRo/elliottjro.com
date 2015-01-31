export default Ember.Controller.extend({
  navigationLinks: [
    {name: "foundation", route: "index"},
    {name: "home", route: "index"},
    {name: "projects", route: "index"}
  ],

  slyScrollObject: null,


  init: function() {
    var slyOb = this.get("slyScrollObject");
    var $frame = $(".frame");
    var $wrap = $frame.parent();
    
    Ember.Logger.debug("applicationController::init - called", Ember.$(".frame"));

    var slyOb = $frame.sly({
      speed: 300,
      easing: 'easeOutExpo',
      activatePageOn: 'click',

      // Scrollbar
      scrollBar:     $wrap.find('.scrollbar'),  // Selector or DOM element for scrollbar container.
      dragHandle:    true, // Whether the scrollbar handle should be draggable.
      dynamicHandle: true, // Scrollbar handle represents the ratio between hidden and visible content.
      minHandleSize: 50,    // Minimal height or width (depends on sly direction) of a handle in pixels.
      clickBar:      true, // Enable navigation by clicking on scrollbar.
      syncSpeed:     0.8,   // Handle => SLIDEE synchronization speed, where: 1 = instant, 0 = infinite.
      scrollBy: 100,
    });

  }

});