var async = require('async'),
    User = require('../../models/user');

module.exports.handler = function(event, context) {
    var outgoingData = {};

    async.series([
        function findUser(next) {
            User.get(event.userID, function(err, user) {
                if (err) {
                    return next(err);
                }

                if (user) {
                    outgoingData = user.toJSON();
                }

                next();
            });
        },

        function updateUser(next) {
            if (!outgoingData.id) {
                return next();
            }

            User.update({
                id: outgoingData.id,
                accessToken: event.accessToken
            }, function(err, user) {
                if (err) {
                    return next(err);
                }

                outgoingData = user.toJSON();
                next();
            });

            return next();
        },

        function createUser(next) {
            if (outgoingData.id) {
                return next();
            }

            User.create({
                id: event.userID,
                name: event.name,
                accessToken: event.accessToken
            }, function(err, user) {
                if (err) {
                    return next(err);
                }

                outgoingData = user.toJSON();
                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
