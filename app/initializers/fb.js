import FB from 'ember-cli-facebook-js-sdk/fb';

export default {
    name: 'fb',
    initialize() {
        return FB.init({
            appId: '518529864982040',
            version: 'v2.5',
            xfbml: false
        });
    }
};
