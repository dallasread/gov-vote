var async = require('async'),
    Issue = require('../../models/issue'),
    findUser = require('../../utils/find-user');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        user = {};

    async.series([
        function auth(next) {
            findUser(event, outgoingData, function(err, u) {
                if (u) {
                    user = u;
                }

                next();
            });
        },

        function update(next) {
            if (!user.admin || !event.issue) {
                return next();
            }

            event.issue.id = event.id;

            Issue.update(event.issue, function(err, issue) {
                if (err) {
                    return next(err);
                }

                outgoingData.issue = issue;

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
