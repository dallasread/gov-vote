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

        function show(next) {
            Issue.get(event.id, function(err, issue) {
                if (err) {
                    return next(err);
                }

                if (user.admin || issue.get('active')) {
                    outgoingData.issue = issue;
                }

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
