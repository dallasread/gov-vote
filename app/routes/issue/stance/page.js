import Ember from 'ember';

var page;

export default Ember.Route.extend({
    model: function model(params) {
        page = params.page;
        return this.modelFor('issue.stance');
    },
    afterModel: function() {
        this.controllerFor('issue.stance.page').set('page', page);
    }
});
