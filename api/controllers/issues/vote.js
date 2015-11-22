var async = require('async'),
    Stance = require('../../models/stance'),
    Vote = require('../../models/vote');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        userID = null;

    async.series([
        function auth(next) {
            next();
        },
        function update(next) {
            if (!event.vote.user || !event.vote.stance) {
                return next();
            }

            Stance.get(event.vote.stance, function(err) {
                if (err) {
                    return next(new Error('Stance does not exist.'));
                }

                Vote.create(event.vote, function(err, vote) {
                    if (err) {
                        return next(err);
                    }

                    outgoingData.vote = vote;

                    next();
                });
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
