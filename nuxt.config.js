
export default {
    mode: 'universal',
    cache: true,
    parallel: true,
    hardSource: true,
    /*
    ** Headers of the page
    */
    head: {
        title: process.env.npm_package_name || '',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Cinzel+Decorative:400,700|Nunito:600' }
        ]
    },
    serverMiddleware: [
        // { path: 'pokemon', handler: '~/api/index.js' },
    ],
    /*
    ** Customize the progress-bar color
    */
    loading: { color: '#00fa9a' },
    /*
    ** Global CSS
    */
    css: [
        'fullcalendar/dist/fullcalendar.min.css',
        'quill/dist/quill.snow.css',
        'quill/dist/quill.bubble.css',
        'quill/dist/quill.core.css'
    ],
    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        { src: '@plugins/vuetify' },
        { src: '~plugins/full-calendar', ssr: false },
        { src: '~plugins/nuxt-quill-plugin.js', ssr: false },
        { src: '~plugins/moment', ssr: false },
    ],
    /*
    ** Nuxt.js dev-modules
    */
    buildModules: [
        '@nuxtjs/moment'
    ],
    moment: {
        defaultLocale: 'pt-br',
        locales: ['pt-br']
    },
    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/component-cache',
        '@nuxtjs/pwa',
        '@nuxtjs/moment',
    ],
    /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {
        }
    },

}
