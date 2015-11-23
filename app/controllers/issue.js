import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    checkedStance: null,
    actions: {
        check(stance) {
            this.set('checkedStance', stance);
        },
        save() {
            var _ = this,
                data = {
                    issue: this.get('checkedStance.issue'),
                    stance: this.get('checkedStance'),
                    user: this.get('session.user.id')
                };

            _.store.filter('vote', function(item) {
                if (item.get('issue') === data.issue) {
                    item.deleteRecord();
                }
            }).then(function() {
                _.store.createRecord('vote', data).save();
            });

            alert('Saved!');
        },
        vote() {
            var _ = this,
                app = _.controllerFor('application');

            function act() {
                if (_.get('checkedStance')) {
                    if (_.get('session.user')) {
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
                if (_.get('session.user')) {
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
