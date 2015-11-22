import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.find('issue', params.issue_id);
    },
    setupController(controller, model) {
        controller.set('model', model);
        this.store.filter('vote', function(i) {
            if (model === i.get('issue')) {
                controller.set('checkedStance', i.get('stance'));
            }
        });
    }
});
