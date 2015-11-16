import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function(transition) {
        transition.abort();
        this.controllerFor('application').set('component-login-modal.open', true);
    }
});
