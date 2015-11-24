import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.find('issue', params.issue_id);
    },

    setupController(controller, model) {
        controller.set('model', model);

        this.store.peekAll('vote', { issue: model.get('id') }).filter(function(vote) {
            if (vote.get('issue.id') === model.get('id')) {
                vote.get('stance').then(function(stance) {
                    controller.set('checkedStance', stance);
                });
            }
        });
    }
});
