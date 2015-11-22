var async = require('async'),
    User = require('../../models/user');

module.exports.handler = function(event, context) {
    var outgoingData = {};

    async.series([
        function sessionsCreate(next) {
            User
                .scan
                .where('apiKey').equals(event.user.apiKey)
                .where('apiSecret').equals(event.user.apiSecret)
                .exec(function (err, users) {
                    if (err || !users.Items.length) {
                        return next(new Error('No user found.'));
                    }

                    outgoingData = users.Items[0];

                    next();
                });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
