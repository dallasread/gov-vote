var async = require('async'),
    Vote = require('../../models/vote'),
    findUser = require('../../utils/find-user');

module.exports.handler = function(event, context) {
    var outgoingData = {};

    async.series([
        function auth(next) {
            findUser(event, outgoingData, function(err, u) {
                if (err) {
                    return next(err);
                }

                event.payload.vote = event.payload.vote || {};
                event.payload.vote.user = u.get('id');

                next();
            });
        },

        function update(next) {
            if (!event.payload.vote.user) {
                return next();
            }

            Vote.create(event.payload.vote, function(err, vote) {
                if (err) {
                    return next(err);
                }

                outgoingData.vote = vote;

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
