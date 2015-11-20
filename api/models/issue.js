var DBModel = require('../utils/db-model'),
    Joi = require('joi'),
    UUID = require('../utils/uuid').generateUUID('U-xxxxyxxxxyxxxxyxxxxy', 62);

var Issue = DBModel.create({
    itemName: 'issue',
    tableName: 'GovVote-Issues',
    hashKey : 'id',
    useUUID: true,
    UUID: UUID,

    storeSchema: Joi.object().keys({
        id: Joi.string(),
        password: Joi.string(),
        email: Joi.string().lowercase(),
    }).options({ stripUnknown: true, convert: true }),

    returnSchema: Joi.object().keys({
        id: Joi.string()
    })
});

module.exports = Issue;
