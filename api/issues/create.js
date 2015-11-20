var async = require('async'),
    Issue = require('../models/issue');

module.exports.handler = function(event, context) {
    var outgoingData = {};

    async.series([
        function authenticate(next) {
            next();
        },
        function create(next) {
            Issue.create(event, next);
        }
    ], function(err) {
        if (err) {
            context.fail(err);
        } else {
            context.succeed(outgoingData);
        }
    });
};
