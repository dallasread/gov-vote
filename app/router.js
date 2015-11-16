import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('issues-new', {
    path: '/new'
  });

  this.route('issue', {
      path: '/:issue_id'
  }, function() {
    this.route('stance', {
        path: '/:stance_id'
    }, function() {
        this.route('page', {
            path: '/:page'
        });
    });
    
    this.route('suggest');
  });

  this.route('issues', {
      path: '/'
  }, function() {});
  this.route('login');
});

export default Router;
