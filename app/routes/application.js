import Ember from 'ember';
import ApplicationRouteMixin from 'ember-simple-auth/mixins/application-route-mixin';

var Application = Ember.Route.extend(ApplicationRouteMixin).extend({
    model: function() {
        return this.store.findAll('issue');
    }
});

export default Application;
