/**
 * Created by rjuliani on 5/28/16.
 */
var vendorFiles = require('./vendor-js.json');
var vendorCss = require('./vendor-css.json');

module.exports = {
    paths: {
        public: 'dist',
        watched: ['app']
    },

    files: {
        javascripts: {
            joinTo: {
                'app/js/app.js': ['app/scripts/app.js', 'app/scripts/modules/**/*.module.js', 'app/scripts/modules/**/*.js'],
                'app/js/base.js': vendorFiles
            }
        },
        stylesheets: {
            joinTo: {
                'css/app.css': ['app/styles/app.scss'],
                'css/vendor.css': vendorCss,
                'css/bootstrap.css': ['app/styles/bootstrap.scss']
            }
        },
        templates: {
            joinTo: {
                'app/js/app-templates.js': [
                    /^app\/scripts\/modules\//
                ]
            }
        }
    },
    conventions: {
    },
    plugins: {
        sass: {
            mode: 'native',
            includePaths: ['app/styles/app', 'app/styles/bootstrap']
        },
        jshint: {
            options: {
                multistr: true,
                laxcomma: true
            },
            warnOnly: true
        },
        babel: {
            pattern: /\.(es6|jsx)$/
        },
        html2js: {
            options: {
                base: 'app/scripts/modules',
                useStrict: true
            }

        },
        uglify: {
            mangle: false
        },
        assetsmanager: {
            copyTo: {
                'vendor' : ['bower_components/*']
            }
        }

    },
    modules: {
        wrapper: false
    }
};