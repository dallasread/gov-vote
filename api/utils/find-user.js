var User = require('../models/user'),
    config = require('../config');

module.exports = function findUser(event, outgoingData, done) {
    var auth = event.Authorization || event.authorization;

    if (!auth || !auth.length) {
        return done();
    }

    auth = auth.split(':');

    User.get({
        id: auth[0],
        accessToken: auth[1]
    }, function(err, user) {
        if (user && user.get('id') === config.admin) {
            user.admin = true;
        }

        done(err, user);
    });
};
