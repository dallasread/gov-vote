var async = require('async'),
    User = require('../../models/user'),
    Vote = require('../../models/vote');

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

        function createUser(next) {
            if (outgoingData.id) {
                return next();
            }

            User.create({
                id: event.userID,
                name: event.name
            }, function(err, user) {
                if (err) {
                    return next(err);
                }

                outgoingData = user.toJSON();
                next();
            });
        },

        function findVotes(next) {
            Vote
                .scan()
                .where('userID').equals(outgoingData.id)
                .exec(function(err, votes) {
                    if (err) {
                        return next(err);
                    }

                    outgoingData.votes = votes.Items;
                    next();
                });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
