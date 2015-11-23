var async = require('async'),
    Stance = require('../../models/stance'),
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
            Stance.get(event.params.id, function(err, stance) {
                if (err) {
                    return next(err);
                }

                if (user.admin || stance.get('active')) {
                    outgoingData.stance = stance;
                }

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
