/* global GovVoteAPI */

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
        facebookResponse(response) {
            var _ = this;

            GovVoteAPI.sessionsCreate(response.authResponse, function(err, user) {
                _.set('session.isAuthenticated', true);
                _.set('component-login-modal.open', false);
                _.set('session.user', user);
            });
        },
        facebookAuth() {
            var _ = this;

            FB.login(['email']).then(function(response) { // user_hometown
                if (response.status === 'connected') {
                    FB.api('/me').then(function(user) {
                        response.authResponse.name = user.name;
                        _.send('facebookResponse', response);
                    });
                } else {
                    alert('Something went wrong. Please try again.');
                }
            });
        }
    }
});
