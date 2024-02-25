import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
// https://vitejs.dev/config/

export default defineConfig({
    base: '/genshin-relation-graph/',
    plugins: [
        createVuePlugin({}),
    ],
    server: {
        port: 3000,
        open: true,
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },
    build: {
        minify: 'esbuild',
        sourcemap: false,
    },
    css: {
        postcss: {
            plugins: [
                {
                    postcssPlugin: 'internal:charset-removal',
                    AtRule: {
                        charset: (atRule) => {
                            if (atRule.name === 'charset') {
                                atRule.remove()
                            }
                        },
                    },
                },
            ],
        },
    },
})
