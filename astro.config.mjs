// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
    base: 'gdcheats',
    integrations: [
        starlight({
            title: 'GDCheats',
            social: {
                github: 'https://github.com/OmgRod/GDCheats',
            },
            pagefind: false,
            pagination: false,
        }),
    ],
    vite: {
      resolve: {
          alias: {
              '@': '/src',
          },
      },
    }
});