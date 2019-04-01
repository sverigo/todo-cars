module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-webpack', 'karma-coverage', 'karma-jasmine-html-reporter'],
        files: [
            './node_modules/angular/angular.js',
            './app/app.webpack.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './app/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            './app/app.webpack.js': ['webpack', 'coverage']
        },
        reporters: ['progress', 'coverage', 'kjhtml'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        webpack: {
        },
        coverageReporter: {
            type: 'html',
            dir: 'coverage/'
        },
        htmlReporter: {
            outputFile: 'reports/index.html',
            pageTitle: 'Unit Tests',
            groupSuites: true,
            useCompactStyle: true,
            useLegacyStyle: true
        }
    });
}