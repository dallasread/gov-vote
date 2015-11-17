import Ember from 'ember';

export function wordIf(a, b, c, d) {
    return a === b ? c : d;
}

export default Ember.Handlebars.makeBoundHelper(wordIf);
