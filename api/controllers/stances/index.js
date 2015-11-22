var async = require('async'),
    Stance = require('../../models/stance');

module.exports.handler = function(event, context) {
    var outgoingData = {},
        admin = true;

    async.series([
        function index(next) {
            var query = Stance
                .scan();

            if (event.issue) {
                query = query.where('issue').equals(event.issue);
            }

            if (!admin) {
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
