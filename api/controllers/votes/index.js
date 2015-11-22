var async = require('async'),
    Vote = require('../../models/vote');

module.exports.handler = function(event, context) {
    var outgoingData = {};

    async.series([
        function index(next) {
            Vote
                .scan()
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
