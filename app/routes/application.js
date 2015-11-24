import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

var Application = Ember.Route.extend(ApplicationRouteMixin).extend({
    model: function() {
        return Ember.RSVP.hash({
            issues: this.store.findAll('issue'),
            stances: this.store.findAll('stance')
        });
    }
});

export default Application;
