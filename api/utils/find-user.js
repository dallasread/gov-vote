var User = require('../models/user'),
    config = require('../config');

module.exports = function findUser(event, outgoingData, done) {
    var noUser = new Error('User not logged in.'),
        auth = event.headers && event.headers.Authorization;

    if (!auth || !auth.length) {
        return done(noUser);
    }

    auth = auth.split(':');

    User.get(auth[0], function(err, user) {
        if (err || !user || user.get('accessToken') !== auth[1]) {
            return done(err || noUser);
        }

        if (user.get('id') === config.admin) {
            user.admin = true;
        }

        done(null, user);
    });
};
