var async = require('async'),
    Stance = require('../../models/stance'),
    findUser = require('../../utils/find-user');

module.exports.handler = function(event, context) {
    var outgoingData = { stances: [] },
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

        function index(next) {
            var query = Stance
                .scan();

            if (event.issue) {
                query = query.where('issue').equals(event.issue);
            }

            if (!user.admin) {
                query = query.where('active').equals(true);
            }

            query.exec(function(err, stances) {
                if (err) {
                    return next(err);
                }

                outgoingData.stances = stances.Items;

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
