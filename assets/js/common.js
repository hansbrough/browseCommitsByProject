//The build will inline common dependencies in this file.

requirejs.config({
    baseUrl: _baseUrl+'/assets/js',
    paths: {
        'mixins':'./lib/mixins',
        'app':'./app'
    },
    shim: {

    },
    inlineText: false
});
