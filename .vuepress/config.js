module.exports = {
    // base: 'infusionsoft-guide',
    title: 'Landing Page Builder - Guide',
    description: 'Walk-through for the landing page builder',
    themeConfig: {
        logo: '/images/inf-logo.svg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Guide', link: '/docs/' },
            { text: 'Request More Help', link: '/request/' },
        ],
        sidebar: [
            '/docs/',
            {
                title: 'Marketplace',
                collapsable: false,
                children: [
                    '/docs/marketplace/'
                ]
            },
            {
                title: 'Editor',
                children: [
                    '/docs/editor/overview/',
                    '/docs/editor/elements/',
                    '/docs/editor/sections/',
                    '/docs/editor/manage-layout/'
                ]
            },
            {
                title: 'Forms',
                children: ['/docs/forms/']
            },
            {
                title: 'Mobile Optimization',
                children: ['/docs/mobile-optimization/']
            },
            {
                title: 'Publish',
                children: [
                    '/docs/publish/analytics-tracking/',
                    '/docs/publish/facebook-sharing/',
                    '/docs/publish/wordpress/'
                ]
            },
            {
                title: 'Advanced',
                children: [
                    '/docs/advanced/'
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