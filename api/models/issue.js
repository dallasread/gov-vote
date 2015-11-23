var vogels = require('vogels'),
    Joi = require('joi');

var Issue = vogels.define('Issue', {
    tableName: 'GovVote-Issues',
    hashKey: 'id',

    timestamps: true,

    schema: Joi.object().keys({
        id:           Joi.string().required(),
        active:       Joi.boolean().default(false).required(),
        title:        Joi.string().required(),
        description:  Joi.string().required(),
        domain:       Joi.string().required().default('ca')
    }).options({ stripUnknown : true })
});

module.exports = Issue;
