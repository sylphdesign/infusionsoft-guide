module.exports = {
    // base: 'infusionsoft-guide',
    title: 'Landing Page Builder - Guide',
    description: 'Walk-through for the landing page builder',
    themeConfig: {
        logo: '/images/inf-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/guide/' },
            { text: 'Request More Help', link: '/request/' },
        ],
        sidebar: [
            '/guide/',
            {
                title: 'Marketplace',
                collapsable: false,
                children: [
                    '/guide/marketplace/'
                ]
            },
            {
                title: 'Editor',
                children: [
                    '/guide/editor/overview/',
                    '/guide/editor/elements/',
                    '/guide/editor/sections/',
                    '/guide/editor/manage-layout/'
                ]
            },
            {
                title: 'Forms',
                children: ['/guide/forms/']
            },
            {
                title: 'Mobile Optimization',
                children: ['/guide/mobile-optimization/']
            },
            {
                title: 'Publish',
                children: [
                    '/guide/publish/analytics-tracking/',
                    '/guide/publish/facebook-sharing/',
                    '/guide/publish/wordpress/'
                ]
            },
            {
                title: 'Advanced',
                children: [
                    '/guide/advanced/'
                ]
            }
        ],
        lastestUpdate: 'Last Updated',
        serviceWorker: {
            updatePopup: true // Boolean | Object, default to undefined.
                // If set to true, the default text config will be:
                // updatePopup: {
                //    message: "New content is available.",
                //    buttonText: "Refresh"
                // }
        }
    }
}