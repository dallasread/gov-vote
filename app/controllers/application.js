import Ember from 'ember';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isSidebarVisible: false,
    disableScroll: function() {
        if (this.get('isSidebarVisible')) {
            Ember.$('body, html').css('overflow', 'hidden');
        } else {
            Ember.$('body, html').css('overflow', '');
        }
    }.observes('isSidebarVisible'),
    actions: {
        invalidateSession() {
            this.get('session').invalidate();
        },
        toggleSidebar() {
            this.toggleProperty('isSidebarVisible');
        }
    }
});
