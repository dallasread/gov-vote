export default {
    name: 'api',
    initialize: function(container, application) {
        return;
        // return FB.getLoginStatus().then(function(response) {
        //     if (response.status === 'connected') {
        //         FB.api('/me', {}).then(function(response) {
        //             console.log(response);
        //         });
        //         container.lookup('controller:application')
        //             .set('session.isAuthenticated', true);
        //     }
        // });
    }
};
