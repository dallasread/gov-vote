import DS from 'ember-data';

var Issue = DS.Model.extend({
    stance: DS.belongsTo('stance', { async: true }),
    issue: DS.belongsTo('issue', { async: true }),
    user: DS.attr('string')
});

export default Issue;
