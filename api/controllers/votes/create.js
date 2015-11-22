var async = require('async'),
    Vote = require('../../models/vote');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function update(next) {
            if (!admin) {
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
