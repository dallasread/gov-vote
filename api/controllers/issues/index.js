var async = require('async'),
    Issue = require('../../models/issue');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function create(next) {
            var query = Issue.scan();

            if (!admin) {
                query = query.where('active').equals(true);
            }

            query.exec(function(err, issues) {
                if (err) {
                    return next(err);
                }

                outgoingData.issues = issues.Items;

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
