import {
  defineConfig
} from 'astro/config';

import react from '@astrojs/react';

import tailwindcss from '@tailwindcss/vite';


import netlify from '@astrojs/netlify';


export default defineConfig({
  integrations: [react()],

  vite: {
    assetsInclude: ['**/*.glb', '**/*.glb'],

    plugins: [tailwindcss()]
  },

  adapter: netlify()
});