import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

var Application = Ember.Route.extend(ApplicationRouteMixin).extend({
    model: function() {
        return this.store.findAll('issue');
    },
    setupController: function setupController(controller, model) {
        var _ = this;

        controller.set('model', model);

        _.store.findAll('stance').then(function() {
            _.store.findAll('vote');
        });
    }
});

export default Application;
