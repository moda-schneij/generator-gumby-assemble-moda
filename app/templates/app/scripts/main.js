require.config({
    shim: {
        app: {
            deps: ['jquery', 'gumby', 'init']
        },
        gumby: {
            deps: ['jquery']
        },
        plugins: {
            deps: ['jquery']
        },
        init: {
            deps: ['jquery', 'gumby', 'retina', 'fixed', 'skiplink', 'toggleswitch', 'checkbox', 'radiobtn', 'tabs', 'navbar', 'validation', 'images']
        },
        retina: {
            deps: ['jquery', 'gumby']
        },
        fixed: {
            deps: ['jquery', 'gumby']
        },
        skiplink: {
            deps: ['jquery', 'gumby']
        },
        toggleswitch: {
            deps: ['jquery', 'gumby']
        },
        checkbox: {
            deps: ['jquery', 'gumby']
        },
        radiobtn: {
            deps: ['jquery', 'gumby']
        },
        tabs: {
            deps: ['jquery', 'gumby']
        },
        navbar: {
            deps: ['jquery', 'gumby']
        },
        validation: {
            deps: ['jquery', 'gumby']
        },
        images: {
            deps: ['jquery', 'gumby']
        }
    },
    paths: {
        gumby: 'libs/gumby',
        retina: 'libs/ui/gumby.retina',
        fixed: 'libs/ui/gumby.fixed',
        skiplink: 'libs/ui/gumby.skiplink',
        toggleswitch: 'libs/ui/gumby.toggleswitch',
        checkbox: 'libs/ui/gumby.checkbox',
        radiobtn: 'libs/ui/gumby.radiobtn',
        tabs: 'libs/ui/gumby.tabs',
        navbar: 'libs/ui/gumby.navbar',
        validation: 'libs/ui/jquery.validation',
        // parallax: '../components/gumby-parallax/gumby.parallax',
        images: '../components/gumby-images/gumby.images',
     /*install extension with bower, include here, as init dependancy, and shim with
     jquery and gumby deps*/
     /*remove extension by getting removing init dependancy, path reference here, and shim*/
        init: 'libs/gumby.init',
        jquery: 'libs/jquery-1.10.1.min',
        plugins: 'plugins',
        app: 'app'
    }
});

require(['jquery', 'plugins', 'init', 'app'], function () {
    // all app code in app.js
});
