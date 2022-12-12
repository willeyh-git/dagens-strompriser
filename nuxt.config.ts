// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            title: 'Nuxt3 Template',
            htmlAttrs: {
                lang: 'en'
            },
            meta: [
                { name: 'viewport', content: 'width=device-width, initial-scale=1' }
            ],
            noscript: [
                { children: 'Javascript is required' }
            ]
        }
    },
    modules: [
        'nuxt-headlessui',
        'nuxt-api-party',
        'nuxt-icon',
        '@morev/vue-transitions/nuxt',
        '@pinia/nuxt',
        '@nuxtjs/i18n',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/html-validator'
    ],
    typescript: {
        strict: true
    },
    tailwindcss: {
        cssPath: '~/assets/css/tailwind.css',
        configPath: 'tailwind.config.ts',
        exposeConfig: false,
        injectPosition: 0,
        viewer: true
    },
    // Optionally change the default prefix.
    headlessui: {
        prefix: 'Headless'
    },
    apiParty: {
        // Needed for the names of the composables
        name: 'json-placeholder'
    },
    server: {
        host: '0'
    },
})
