import {defineConfig} from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: "/vxt-docs/",
    title: "Vxt",
    description: "Docs for vxt",
    head: [
        ["link", {rel: "icon", href: "/vxt-docs/logo.svg"}]
    ],
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            {text: 'Home', link: '/'},
            {text: 'Examples', link: '/examples'}
        ],

        sidebar: [
            {
                text: 'Getting Started',
                items: [
                    {text: 'Quick Start', link: '/quick-start'},
                    {
                        text: 'Config', link: '/config',
                        items: [
                            {text: "Vite Config", link: "/config.vite"},
                            {text: "Manifest", link: "/config.manifest"},
                        ]
                    },
                    {text: 'Examples', link: '/examples'},
                    {text: 'FAQ', link: '/faq'}
                ]
            }
        ],

        socialLinks: [
            {icon: 'github', link: 'https://github.com/noah227/create-vxt'}
        ]
    }
})
