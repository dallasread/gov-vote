import Ember from 'ember';

export function dynamicAttr(args) {
    return args[0].get(args[1]);
}

export default Ember.Helper.helper(dynamicAttr);
