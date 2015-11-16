import Ember from 'ember';

export default Ember.Component.extend({
    expose: function() {
        this.setContent();
    }.on('init'),
    setContent: function() {
        this.set('content',
            this.get('item').get( this.get('attr') )
        );
    }.observes('attr'),
    updateAttr: function () {
        this.get('item').set(
            this.get('attr'),
            this.get('content')
        );
    }.observes('content')
});
