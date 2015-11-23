var vogels = require('vogels'),
    Joi = require('joi');

var User = vogels.define('User', {
    tableName: 'GovVote-Users',
    hashKey: 'id',
    rangeKey: 'accessToken',

    timestamps: true,

    schema: {
        id:        Joi.string(),
        accessToken: Joi.string(),

        apiKey:    vogels.types.uuid(),
        apiSecret: vogels.types.uuid(),
        email:     Joi.string().lowercase(),
        name:      Joi.string(),

        votes:     Joi.array(),
    }
});

module.exports = User;
