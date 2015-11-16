import Ember from 'ember';

export function wordUnlessBoolean(a, b, c) {
    return a ? b : c;
}

export default Ember.Helper.helper(wordUnlessBoolean);
