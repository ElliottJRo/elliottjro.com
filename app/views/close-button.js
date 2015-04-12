import Ember from 'ember';
import VelocityMixin from 'elliottjro/mixins/velocity-mixin';

export default Ember.View.extend(VelocityMixin,{
    
    tagName: 'button',

    click: function(e) {

        this.get("controller").send("closeMenuAction");

        e.preventDefault();

    },

    mouseEnter: function() {

        this.animate({
            rotateZ: ["45deg", "0deg"]
        }, {
            duration: 500,
            easing: [250, 15]
        });

    },

    mouseLeave: function() {

        this.animate("stop");

        this.animate("reverse",{
            duration: 500,
            easing: [250, 15]
        });

    },

});