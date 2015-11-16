import Ember from 'ember';

export default Ember.Controller.extend({
    resetPermalink: function resetPermalink() {
        this.set(
            'permalink',
            this.get('title')
                .replace(/\s+/g, '-')
                .replace(/[^A-Za-z0-9-]/g, '')
                .toLowerCase()
        );
    }.observes('title'),
    actions: {
        suggest: function suggest() {
            console.log(this.get('permalink'), 'redirect to page');
        },
    }
});
