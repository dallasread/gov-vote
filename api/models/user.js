var vogels = require('vogels'),
    Joi = require('joi');

var User = vogels.define('User', {
    tableName: 'GovVote-Users',
    hashKey: 'id',

    timestamps: true,

    schema: {
        id:        Joi.string(),
        apiKey:    vogels.types.uuid(),
        apiSecret: vogels.types.uuid(),
        email:     Joi.string().lowercase(),
        name:      Joi.string(),

        votes:     Joi.array(),
    }
});

module.exports = User;
