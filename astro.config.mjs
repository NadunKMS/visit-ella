// @ts-nocheck
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import swup from '@swup/astro';

import sitemap from '@astrojs/sitemap';

import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    site: 'https://example.com',
    integrations: [mdx(), sitemap(), tailwind(),
        swup({
            theme: 'slide',
            animationClass: 'transition-',
            containers: ['main','nav'],
            cache: true,
            preload: true,
            accessibility: true,
            forms: false,
            morph: false,
            parallel: false,
            progress: false,
            routes: true,
            smoothScrolling: true,
            updateBodyClass: true,
            updateHead: true,
            reloadScripts: true,
            debug: false,
            loadOnIdle: true,
            globalInstance: false,
          }),
        ],
});