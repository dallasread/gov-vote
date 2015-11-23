var async = require('async'),
    Vote = require('../../models/vote'),
    findUser = require('../../utils/find-user');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        user = null;

    async.series([
        function auth(next) {
            findUser(event, outgoingData, function(err, u) {
                if (u) {
                    user = u;
                }

                next();
            });
        },

        function index(next) {
            if (!user) {
                next();
            }

            Vote
                .scan()
                .where('user').equals(user.get('id') + '1')
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
