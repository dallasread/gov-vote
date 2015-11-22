var async = require('async'),
    Issue = require('../../models/issue');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function update(next) {
            if (!admin || !event.issue) {
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
