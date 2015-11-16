import Ember from 'ember';

export default Ember.Component.extend({
    open: true,
    expose: function() {
        this.set('targetObject.component-' + this.get('id'), this);
    }.on('init'),
    actions: {
        close: function close() {
            this.set('open', false);
        }
    }
});
