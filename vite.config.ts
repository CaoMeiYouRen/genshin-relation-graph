import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
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
    esbuild: {
        target: [
            'chrome70',
            'es2019',
        ],
    },
    build: {
        target: [
            'chrome70',
            'es2019',
        ],
    },
})
