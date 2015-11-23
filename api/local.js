try {
    require.resolve('aws-sdk');
    require.resolve('hapi');
} catch(e) {
    console.error('Unmet dependencies, please run:', 'npm install aws-sdk hapi');
    process.exit(e.code);
}

var Hapi = require('hapi'),
    server = new Hapi.Server(),
    AWS = require('vogels').AWS;

AWS.config.update({
    region: 'us-east-1'
});

AWS.config.credentials = new AWS.SharedIniFileCredentials({
    profile: 'default'
});

server.connection({
    host: 'localhost',
    port: 8000,
    routes: { cors: true }
});

(function () {
    var endpoint = require('./controllers/issues/create.js');

    server.route({
        method: 'POST',
        path: '/issues',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/issues/index.js');

    server.route({
        method: 'GET',
        path: '/issues',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/issues/update.js');

    server.route({
        method: 'PUT',
        path: '/issues/{id}',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/issues/show.js');

    server.route({
        method: 'GET',
        path: '/issues/{id}',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/stances/create.js');

    server.route({
        method: 'POST',
        path: '/stances',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/stances/index.js');

    server.route({
        method: 'GET',
        path: '/stances',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/stances/update.js');

    server.route({
        method: 'PUT',
        path: '/stances/{id}',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/stances/show.js');

    server.route({
        method: 'GET',
        path: '/stances/{id}',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/votes/create.js');

    server.route({
        method: 'POST',
        path: '/votes',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/votes/index.js');

    server.route({
        method: 'GET',
        path: '/votes',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());
(function () {
    var endpoint = require('./controllers/sessions/create.js');

    server.route({
        method: 'POST',
        path: '/sessions',
        handler: function (request, reply) {
            var context = {
                    done: function(err, data) {
                        if (err) data = { error: err.message };
                        reply(null, data);
                    },
                    succeed: function(data) {
                        reply(null, data);
                    },
                    fail: function(err) {
                        reply(null, { error: err.message });
                    }
                },
                event = {
                    headers: request.headers,
                    payload: request.payload,
                    params: request.params,
                    query: request.query
                };

            event.headers.Authorization = event.headers.authorization;

            endpoint.handler(event, context);
        }
    });
}());

server.start(function (err) {
    if (err) throw err;
    console.log('Server running at:', server.info.uri);
});
