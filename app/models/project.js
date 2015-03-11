import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({

    name: attr('string'),
    url: attr('string'),
    image: attr('string'),
    tech: attr('array')

});