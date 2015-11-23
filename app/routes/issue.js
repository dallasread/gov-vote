import Ember from 'ember';

export default Ember.Route.extend({
    model(params) {
        return this.store.find('issue', params.issue_id);
    },

    afterModel(model) {
        if (!model.get('stances.length')) {
            return this.store.find('stance');
            // return this.store.find('stance', { issue: model.get('id') });
        }
    },

    setupController(controller, model) {
        controller.set('model', model);

        this.store.all('vote', { issue: model.get('id') }).filter(function(vote) {
            if (vote.get('issue.id') === model.get('id')) {
                vote.get('stance').then(function(stance) {
                    controller.set('checkedStance', stance);
                });
            }
        });
    }
});
