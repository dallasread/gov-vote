import FB from 'ember-cli-facebook-js-sdk/fb';

export default {
    name: 'fb',
    initialize(container, app) {
        FB.init({
            appId: '518529864982040',
            version: 'v2.5',
            xfbml: false
        });

        FB.getLoginStatus().then(function(response) {
            if (response.status === 'connected') {
                container.lookup('controller:application')
                    .send('facebookResponse', response, function() {
                        app.advanceReadiness();
                    });
            } else {
                app.advanceReadiness();
            }
        });

        return app.deferReadiness();
    }
};
