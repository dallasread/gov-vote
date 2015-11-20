import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.find('issue', params.issue_id);
    },
    setupController(controller, model) {
        controller.set('model', model);
        controller.set('checkedStance', null);
    }
});
