import DS from 'ember-data';

var Issue = DS.Model.extend({
    stance: DS.belongsTo('stance', { async: false }),
    issue: DS.belongsTo('issue', { async: false }),
    user: DS.attr('string')
});

export default Issue;
