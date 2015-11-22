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
            var _ = this,
                issue = _.store.createRecord('issue', {
                    title: _.get('title'),
                    permalink: _.get('permalink'),
                    description: _.get('description')
                });
                
            this.transitionToRoute('issue', issue.save());
        },
    }
});
