import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
const __dirname = dirname(fileURLToPath(import.meta.url))
export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                'rts-origins': resolve(__dirname, 'rts-origins/index.html'),
                'what-is-rts': resolve(__dirname, 'what-is-rts/index.html'),
                'warcraft': resolve(__dirname, 'warcraft/index.html'),
                'command-and-conquer': resolve(__dirname, 'command-and-conquer/index.html'),
                'age-of-empires': resolve(__dirname, 'age-of-empires/index.html'),
                'starcraft': resolve(__dirname, 'starcraft/index.html'),
                'starcraft2': resolve(__dirname, 'starcraft2/index.html'),
                'e-sports': resolve(__dirname, 'e-sports/index.html'),
                'legacy': resolve(__dirname, 'legacy/index.html')
            },
        },
    },
})