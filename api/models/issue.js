var vogels = require('vogels'),
    Joi = require('joi');

var Issue = vogels.define('Issue', {
    tableName: 'GovVote-Issues',
    hashKey: 'id',

    timestamps: true,

    schema: Joi.object().keys({
        id:           vogels.types.uuid().required(),
        active:       Joi.boolean().default(false).required(),
        title:        Joi.string().required(),
        permalink:    Joi.string().required(),
        description:  Joi.string().required()
    }).options({ stripUnknown : true })
});

module.exports = Issue;
