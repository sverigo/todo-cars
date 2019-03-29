module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        plugins: ['karma-jasmine', 'karma-chrome-launcher', 'karma-webpack'],
        files: [
            './app/app.webpack.js',
            './node_modules/angular-mocks/angular-mocks.js',
            './app/**/*.spec.js'
        ],
        exclude: [],
        preprocessors: {
            './app/app.webpack.js': ['webpack']
        },
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
        webpack: {    
        }
    });
}