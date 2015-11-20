import Ember from 'ember';

export default Ember.Component.extend({
    open: true,
    onClose: null,
    expose: function() {
        this.set('targetObject.component-' + this.get('id'), this);
    }.on('init'),
    openAction: function() {
        if (!this.get('open') && this.get('onClose')) {
            this.get('onClose')();
            this.set('onClose', null);
        }
    }.observes('open'),
    actions: {
        close: function close() {
            this.set('open', false);
        }
    }
});
