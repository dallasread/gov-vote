import Ember from 'ember';

export default Ember.Controller.extend({
    isEditing: Ember.computed.alias('component-issue-stance.isEditing'),
    content: function() {
        return this.get('page');
    }
});
