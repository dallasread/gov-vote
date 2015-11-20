import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    needs: ['application'],
    checkedStance: null,
    actions: {
        check(stance) {
            this.set('checkedStance', stance);
        },
        save() {
            alert('save!');
        },
        vote() {
            var _ = this,
                app = _.controllerFor('application');

            function act() {
                if (_.get('checkedStance')) {
                    if (_.get('session.isAuthenticated')) {
                        _.send('save');
                    } else {
                        app.set('component-login-modal.onClose', act);
                        app.set('component-login-modal.open', true);
                    }
                }
            }

            act();
        },
        suggest() {
            var _ = this,
                app = _.controllerFor('application');

            function act() {
                if (_.get('session.isAuthenticated')) {
                    _.transitionTo('issue.stance.page', _.model.id, 'suggest', 'overview');
                } else {
                    app.set('component-login-modal.onClose', act);
                    app.set('component-login-modal.open', true);
                }
            }

            act();
        }
    }
});
