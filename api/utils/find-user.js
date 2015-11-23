var User = require('../models/user');

module.exports = function findUser(event, outgoingData, done) {
    if (!event.Authorization || !event.Authorization.length) {
        return done();
    }

    var auth = event.Authorization.split(':');

    User.get({
        id: auth[0],
        accessToken: auth[1]
    }, function(err, user) {
        if (0 && user && user.get('id') === '10154515821574152') {
            user.admin = true;
        }

        done(user);
    });
};
