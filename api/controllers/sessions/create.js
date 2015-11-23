var async = require('async'),
    config = require('../../config'),
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
        },

        function createUser(next) {
            if (outgoingData.id || !event.userID) {
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
        },

        function setAdmin(next) {
            if (outgoingData.id === config.admin) {
                outgoingData.admin = true;
            }

            next();
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
