import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isEditing: Ember.computed.alias('component-issue-stance.isEditing'),
    content: function() {
        return this.get('page');
    }
});
