import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function beforeModel() {
        var _ = this,
            exists = _.store.getById('stance', 'suggest');

        if (!exists) {
            _.store.createRecord('stance', {
                id: 'suggest',
                issue: _.modelFor('issue')
            });
        }
    },
    model: function model(params) {
        var _ = this;

        return _.store.find('stance', params.stance_id);
    },
    activate: function() {
        this._super();
        Ember.$('body').css('overflow', 'hidden');
    },
    deactivate: function() {
        this._super();
        Ember.$('body').css('overflow', '');
        this.store.find('stance', 'suggest').then(function (stance) {
            stance.deleteRecord();
        });
    }
});
