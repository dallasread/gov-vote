import Ember from 'ember';
import FB from 'ember-cli-facebook-js-sdk/fb';

export default Ember.Controller.extend({
    session: Ember.inject.service('session'),
    isSidebarVisible: false,
    disableScroll: function() {
        if (this.get('isSidebarVisible') && Ember.$(window).width() < 680) {
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
        },
        facebookAuth() {
            var _ = this;

            FB.init({
                appId: '518529864982040',
                version: 'v2.5',
                xfbml: false
            }).then(function() {
                FB.login(function(){}, {scope: 'publish_actions'}).then(function(response) {
                    if (response.status === 'connected') {
                        _.set('session.isAuthenticated', true);
                        _.set('component-login-modal.open', false);
                    } else {
                        alert('Something went wrong. Please try again.');
                    }
                });
            });
        }
    }
});
