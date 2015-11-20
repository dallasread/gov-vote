import Ember from 'ember';

export default Ember.Route.extend({
    beforeModel: function() {
        var _ = this,
            app = _.controllerFor('application');

        if (!app.get('session.isAuthenticated')) {
            app.set('component-login-modal.onClose', function() {
                if (app.get('session.isAuthenticated')) {
                    _.transitionTo('issues-new');
                }
            });

            _.transitionTo('login');
        }

        return;
    }
});
