import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
export default <Partial<Config>>{
    theme: {
        extend: {
        }
    },
    plugins: [],
    content: [
        `~/components/**/*.{vue,js,ts}`,
        `~/layouts/**/*.vue`,
        `~/pages/**/*.vue`,
        `~/composables/**/*.{js,ts}`,
        `~/plugins/**/*.{js,ts}`,
        `~/App.{js,ts,vue}`,
        `~/app.{js,ts,vue}`,
        `~/Error.{js,ts,vue}`,
        `~/error.{js,ts,vue}`
    ]
}