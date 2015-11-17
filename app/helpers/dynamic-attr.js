import Ember from 'ember';

export function dynamicAttr(obj, attr) {
    return obj.get(attr);
}

export default Ember.Handlebars.makeBoundHelper(dynamicAttr);
