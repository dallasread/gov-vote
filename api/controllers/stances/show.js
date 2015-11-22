var async = require('async'),
    Stance = require('../../models/stance');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function show(next) {
            Stance.get(event.id, function(err, stance) {
                if (err) {
                    return next(err);
                }

                if (admin || stance.get('active')) {
                    outgoingData.stance = stance;
                }

                next();
            });
        }
    ], function(err) {
        context.done(err, outgoingData);
    });
};
