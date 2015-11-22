// db store schema
// db return schema

var Generator = require('generate-js'),
    vogels = require('vogels'),
    Joi = require('joi'),
    UUID = require('./uuid'),

    JOI_VALIDATE_OPTIONS = {
        abortEarly: false,
        stripUnknown: true
    };

var Item = Generator.generate(function Item(DBModel, vogelsItem) {
    var _ = this;

    _.defineProperties({
        DBModel: DBModel,
        vogelsItem: vogelsItem
    });
});

Item.definePrototype({

    get: function get(path) {
        var _ = this,
            splitPath = path.split('/'),
            last = splitPath.pop(),
            obj = _.vogelsItem.attrs;

        for (var i = 0; i < splitPath.length; i++) {
            if (obj[splitPath[i]] !== void(0)) {
                obj = obj[splitPath[i]];
            } else {
                return;
            }
        }

        return obj[last];
    },

    set: function set(path, value) {
        var _ = this,
            splitPath = path.split('/'),
            last = splitPath.pop(),
            setObj = {},
            obj = setObj;

        for (var i = 0; i < splitPath.length; i++) {
            obj = obj[splitPath[i]] = {};
        }

        obj[last] = value;

        _.vogelsItem.set(setObj);
        return _;
    },

    update: function update(attrs) {
        var _ = this;

        _.vogelsItem.set(attrs);
        return _;
    },

    save: function save(done) {
        var _ = this;

        _.vogelsItem.save(done);
    },

    destroy: function destroy(options, done) {
        var _ = this;

        _.vogelsItem.destroy.apply(_.vogelsItem, arguments);
    },

    toJSON: function toJSON() {
        var _ = this,

        result = Joi.validate(JSON.parse(JSON.stringify(_.vogelsItem)), _.DBModel.returnSchema, JOI_VALIDATE_OPTIONS);

        return result.value;
    }
});

/*
 * itemName {String}
 * tableName {String}
 * hashKey {String}
 * storeSchema {Joi_schema}
 * returnSchema {Joi_schema}
 * UUID {Function}
 * useUUID {Boolean}
 */
var _DBModel = Generator.generate(function DBModel(options) {
    var _ = this;

    _.defineProperties(options);

    _.defineProperties({
        vogelsTable: vogels.define(options.tableName, {
            tableName: options.tableName,
            hashKey : options.hashKey,

            // add the timestamp attributes (updatedAt, createdAt)
            timestamps : true,

            schema: options.storeSchema
        }),

        save: function save(data, options, done) {
            options[_.itemName].save(done);
        },

        create: function create(data, options, done) {
            _DBModel.proto.create.call(_, data, options, done);
        },

        read: function read(data, options, done) {
            _DBModel.proto.read.call(_, data, options, done);
        },

        update: function update(data, options, done) {
            _DBModel.proto.update.call(_, data, options, done);
        },

        destroy: function destroy(data, options, done) {
            _DBModel.proto.destroy.call(_, data, options, done);
        }
    });
});

_DBModel.definePrototype({
    Item: Item,
    returnSchema: Joi.object(),
    storeSchema: Joi.object(),
    UUID: UUID,

    create: function create(data, options, done) {
        var _ = this,
            params = {};

        params.ConditionExpression = 'attribute_not_exists(' + _.hashKey + ')';
        // params.ConditionExpression = '#i <> :x';
        // params.ExpressionAttributeNames = {'#i' : 'id'};
        // params.ExpressionAttributeValues = {':x' : 123};

        if (_.useUUID) {
            var retry = arguments[3];

            if (typeof retry === 'number') {
                retry --;
            } else {
                retry = 5;
            }

            data[_.hashKey] = _.UUID();
        }

        _.vogelsTable.create(
            data,
            params,
            function (err, item) {
                if (err) {
                    if (_.useUUID && retry > 0) {
                        create.call(_, data, options, done, retry);
                    } else {
                        done(new Error('The '+_.hashKey+': `'+data[_.hashKey]+'` already exists.'));
                    }
                } else {
                    options[_.itemName] = _.Item.create(_, item);
                    done();
                }
            }
        );
    },

    read: function read(data, options, done) {
        var _ = this,
            params = {};

        _.vogelsTable.get(data[_.hashKey], params, function(err, item) {
            if (err) return done(err);
            if (!item) return done(new Error(_.itemName + ' could not be found.'));

            options[_.itemName] = _.Item.create(_, item);

            done();
        });
    },

    update: function update(data, options, done) {
        var _ = this,
            params = {};

        _.vogelsTable.update(data, params, function (err, item) {
            if (err) return done(err);
            if (!item) return done(new Error(_.itemName + ' could not be found.'));

            options[_.itemName] = _.Item.create(_, item);

            done();
        });

    },

    destroy: function destroy(data, options, done) {
        var _ = this,
            params = {};

        _.vogelsTable.destroy(data[_.hashKey], params, function (err, item) {
            if (err) return done(err);
            if (!item) return done(new Error(_.itemName + ' could not be found.'));

            options[_.itemName] = _.Item.create(_, item);

            done();
        });
    },

    readItems: function readItems(arr, done) {
        var _ = this,
            params = {};

            arr = arr || [];

        _.vogelsTable.getItems(arr, params, function (err, items) {
            if (err) return done(err);
            if (!items) return done(new Error(_.itemName + '(s) could not be found.'));

            items = items.map(function (item) { return _.Item.create(_, item);});

            done(null, items);
        });
    }
});

module.exports = _DBModel;
