var vogels = require('vogels'),
    Joi = require('joi');

var Vote = vogels.define('Vote', {
    tableName: 'GovVote-Votes',
    hashKey: 'issue',
    rangeKey: 'user',

    timestamps: true,

    schema: Joi.object().keys({
        id:         vogels.types.uuid().required(),
        user:     Joi.string().required(),
        issue:    Joi.string().required(),
        stance:   Joi.string().required(),
    }).options({ stripUnknown : true })
});

module.exports = Vote;
