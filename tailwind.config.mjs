// In pwp-rts-timeline/tailwind.config.mjs
import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}", // Scan Astro & React files
        "./node_modules/flowbite/**/*.js" // For Flowbite JS components
    ],
    theme: {
        extend: {
            // If you had any theme customizations (you said you didn't have an old tailwind.config),
            // you can add them here later if needed.
        },
    },
    plugins: [
        flowbitePlugin()
    ],
};
