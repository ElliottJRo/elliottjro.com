import Ember from 'ember';
import Uploader from 'elliottjro/objects/uploader';


export default Ember.TextField.extend({

    type: 'file',
    tagname: 'input',
    files: null,
    attributeBindings: ['multiple'],

    filesDidChange: (function() {
        var uploadUrl = this.get('url');
        var files = this.get('files');

        var uploader = Uploader.create({
            url: uploadUrl
        });

        if (!Ember.isEmpty(files)) {
            uploader.upload(files[0]);
        }
    }).observes('files'),

    click: function(event) {
        this._super(event);
        Ember.Logger.info("Click event caught!");
    },

    change: function(event) {

        var input = event.target;

        if (!Ember.isEmpty(input.files)) {
            Ember.set(this, 'files', input.files);
        }
    }


});