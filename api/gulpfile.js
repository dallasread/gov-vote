var gulp = require('gulp'),
    config = require('./config'),
    deployer = require('api-deploy').create({
        defaults: {
            lambda: {
                memorySize: 128,
                role: 'arn:aws:iam::262478563235:role/lambda',
                runtime: 'nodejs',
                timeout: 60
            },
            aws: {
                profile: config.aws.profile,
                region: 'us-east-1'
            },
            uglify: {
                mangle: false,
                compress: {
                    unused: false
                }
            }
        },
        sdk: {
            name: 'GovVote',
            path: './sdk.js'
        },
        swagger: {
            path: './swagger.json'
        },
        routes: {
            '/issues': {
                'get': './issues/index.js',
                'post': './issues/create.js'
            },
            '/issues/{id}': {
                'get': './issues/show.js',
                'patch': './issues/update.js'
                // 'delete': './issues/delete.js'
            },
            '/issues/{id}/vote': {
                'post': './issues/vote.js'
            },
            // '/oauth/{provider}': {
            //     'get': './oauth/provider.js'
            // }
        }
    });

deployer.registerTasks(gulp);
