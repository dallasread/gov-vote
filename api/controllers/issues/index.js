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

        function create(next) {
            var query = Issue.scan();

            if (!user.admin) {
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
