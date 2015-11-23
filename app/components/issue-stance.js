import Ember from 'ember';

export default Ember.Component.extend({
    isEditing: true,
    expose: function() {
        this.set('targetObject.component-issue-stance', this);

        if (this.get('stance.id') === 'suggest') {
            this.set('isEditing', true);
        } else {
            this.set('isEditing', false);
        }
    }.on('init'),
    actions: {
        changeStance: function changeStance(delta) {
            var _ = this,
                id = this.get('stance.id');

            this.get('stance.issue.stances').then(function(sts) {
                var stances = sts.get('currentState').filter(function(s) {
                        return s.id !== 'suggest';
                    }).map(function(s) {
                        return s.id;
                    }),
                    index = stances.indexOf(id),
                    newIndex = index + delta;

                if (newIndex < 0) {
                    newIndex = stances.length - 1;
                } else if (newIndex >= stances.length) {
                    newIndex = 0;
                }

                _.get('targetObject').transitionToRoute(
                    'issue.stance.page',
                    _.get('stance.issue'),
                    stances[newIndex],
                    _.get('targetObject.page')
                );
            });
        },
        save: function save() {
            if (this.get('stance.id') === 'suggest') {
                var data = this.get('stance').toJSON();
                data.id = this.get('newID');
                data.issue = this.get('stance.issue');
                var stance = this.store.createRecord('stance', data);
                stance.save();
                this.get('targetObject').transitionToRoute('issue', stance.get('issue'));
            } else {
                this.get('stance').save();
                this.set('isEditing', false);
            }

        },
        edit: function edit() {
            this.set('isEditing', !this.get('isEditing'));
        }
    }
});
