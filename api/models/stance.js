var vogels = require('vogels'),
    Joi = require('joi');

var Stance = vogels.define('Stance', {
    tableName: 'GovVote-Stances',
    hashKey: 'id',

    timestamps: true,

    schema: Joi.object().keys({
        id:         vogels.types.uuid().required(),

        title:      Joi.string().required(),
        permalink:  Joi.string().required(),
        active:     Joi.boolean().default(false).required(),

        overview:   Joi.string().required(),
        audio:      Joi.any(),
        video:      Joi.any(),
        documents:  Joi.any(),
        // comments: DS.attr('string'),

        issue:      Joi.string().required()
    }).options({ stripUnknown : true })
});

module.exports = Stance;
