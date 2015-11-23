import DS from 'ember-data';

export default DS.RESTAdapter.extend({
    host: 'http://localhost:8000'
  // host: 'https://d60u7metbl.execute-api.us-east-1.amazonaws.com',
  // namespace: 'dev'
});
