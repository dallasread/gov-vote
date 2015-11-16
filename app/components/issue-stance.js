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
        save: function save() {
            if (this.get('stance.id') === 'suggest') {
                var data = this.get('stance').toJSON();
                data.id = Date.now();
                var stance = this.store.createRecord('stance', data);
                stance.set('issue', this.get('stance.issue'));
                this.get('targetObject').transitionToRoute('issue', stance.get('issue'));
            } else {
                alert('update');
            }
        },
        edit: function edit() {
            this.set('isEditing', !this.get('isEditing'));
        }
    }
});
