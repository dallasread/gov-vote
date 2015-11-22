var async = require('async'),
    Issue = require('../../models/issue');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function show(next) {
            Issue.get(event.id, function(err, issue) {
                if (err) {
                    return next(err);
                }

                if (admin || issue.get('active')) {
                    outgoingData.issue = issue;
                }

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
