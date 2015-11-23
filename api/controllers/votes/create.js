var async = require('async'),
    Vote = require('../../models/vote'),
    findUser = require('../../utils/find-user');

module.exports.handler = function(event, context) {
    var outgoingData = {};

    async.series([
        function auth(next) {
            findUser(event, outgoingData, function(err, u) {
                if (!u) {
                    return next(new Error('User not logged in.'));
                }

                event.vote.user = u.get('id');
                next();
            });
        },

        function update(next) {
            if (!event.vote.user) {
                return next();
            }

            Vote.create(event.vote, function(err, vote) {
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
