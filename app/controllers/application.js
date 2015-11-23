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
        facebookResponse(response, done) {
            var _ = this;

            GovVoteAPI.sessionsCreate(response.authResponse, function(err, user) {
                console.log(user);
                alert('Authorization: ' + user.get('id') + ':' + user.get('accessToken'));

                Ember.$.ajaxPrefilter(function(options, oriOpt, jqXHR) {
                    jqXHR.setRequestHeader(
                        'Authorization',
                        user.get('id') + ':' + user.get('accessToken')
                    );
                });

                _.set('session.isAuthenticated', true);
                _.set('component-login-modal.open', false);
                _.set('session.user', user);

                if (done) { done(); }
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
