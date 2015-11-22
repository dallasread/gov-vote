var async = require('async'),
    Stance = require('../../models/stance');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function update(next) {
            if (!admin || !event.stance) {
                return next();
            }

            event.stance.id = event.id;

            Stance.update(event.stance, function(err, stance) {
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
