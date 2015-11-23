import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.find('issue', params.issue_id);
    },
    afterModel: function(model) {
        if (!model.get('stances.length')) {
            return this.store.find('stance', { issue: model.get('id') });
        }
    },
    setupController(controller, model) {
        this.store.filter('vote', function(i) {
            if (model === i.get('issue')) {
                controller.set('checkedStance', i.get('stance'));
            }
        });

        controller.set('model', model);
    }
});
