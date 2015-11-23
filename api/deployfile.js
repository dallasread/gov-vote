var deployer = require('api-deploy').configure({
        sdk: {
            name: 'GovVoteAPI',
            url: 'https://d60u7metbl.execute-api.us-east-1.amazonaws.com/dev',
            path: '../api-sdk.js'
        },
        swagger: {
            path: './swagger.json'
        },
        routes: {
            '/issues': {
                'get': './controllers/issues/index.js',
                'post': './controllers/issues/create.js'
            },
            '/issues/{id}': {
                'get': './controllers/issues/show.js',
                'put': './controllers/issues/update.js'
                // 'delete': './controllers/issues/delete.js'
            },
            '/stances': {
                'get': './controllers/stances/index.js',
                'post': './controllers/stances/create.js'
            },
            '/stances/{id}': {
                'get': './controllers/stances/show.js',
                'put': './controllers/stances/update.js',
                // 'delete': './controllers/issues/delete.js'
            },
            '/votes': {
                'get': './controllers/votes/index.js',
                'post': './controllers/votes/create.js'
            },
            '/sessions': {
                'post': './controllers/sessions/create.js'
            },
            // '/sessions/auth': {
            //     'post': './controllers/sessions/auth.js'
            // }
        }
    }),
    awsDefaults = {
        lambda: {
            role: 'arn:aws:iam::347191724861:role/Lambda'
        },
        aws: {
            profile: 'default',
            region: 'us-east-1',
            require: 'require(\'vogels\').AWS'
        },
        uglify: {
            // mangle: false,
            // compress: {
            //     unused: false
            // }
        }
    };

deployer.plugins.lambda.configure(awsDefaults);
deployer.plugins.apigateway.configure(awsDefaults);
deployer.plugins.local.configure(awsDefaults);

module.exports = deployer;
