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

        function update(next) {
            // if (!user.admin) {
            //     return next();
            // }

            delete event.payload.stance.id;

            Stance.create(event.payload.stance, function(err, stance) {
                if (err) {
                    return next(err);
                }

                outgoingData.stance = stance;

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
