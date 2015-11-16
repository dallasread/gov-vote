import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    needs: ['application'],
    checkedStance: false,
    actions: {
        check: function check(stance) {
            this.set('checkedStance', stance);
        },
        vote: function vote() {
            if (this.get('checkedStance')) {
                if (!this.get('session.isAuthenticated')) {
                    this.set('controllers.application.component-login-modal.open', true);
                } else {
                    alert('save!');
                }
            }
        },
        suggest: function suggest() {
            if (!this.get('session.isAuthenticated')) {
                this.set('controllers.application.component-login-modal.open', true);
            } else {
                this.transitionTo('issue.stance.page', this.model.id, 'suggest', 'wiki');
            }
        }
    }
});
