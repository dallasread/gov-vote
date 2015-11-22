import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';
import FB from 'ember-cli-facebook-js-sdk/fb';

var Application = Ember.Route.extend(ApplicationRouteMixin).extend({
    model: function() {
        this.store.findAll('stance');
        this.store.findAll('vote');
        return this.store.findAll('issue');
    },
    setupController: function setupController(controller, model) {
        controller.set('model', model);

        FB.getLoginStatus().then(function(response) {
            if (response.status === 'connected') {
                controller.send('facebookResponse', response);
            }
        });
    }
});

export default Application;
