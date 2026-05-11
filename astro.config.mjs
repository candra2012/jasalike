// astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import icon from 'astro-icon'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url' // pakai 'node:url' lebih eksplisit

export default defineConfig({
  // HAPUS: compressHTML (biarkan astro-compress yang kerja)
  site: 'https://jasalike.my.id',
  output: 'static',
  trailingSlash: 'ignore',
  integrations: [mdx(), icon(), compress()],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          logger: { warn: () => {} },
        },
      },
    },
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
        '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
        '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        '@content': fileURLToPath(new URL('./src/content', import.meta.url)),
        '@pages': fileURLToPath(new URL('./src/pages', import.meta.url)),
        '@public': fileURLToPath(new URL('./public', import.meta.url)),
        '@post-images': fileURLToPath(new URL('./public/posts', import.meta.url)),
        '@project-images': fileURLToPath(new URL('./public/projects', import.meta.url)),
      },
    },
    // cegah masalah bundling di CF
    ssr: {
      noExternal: [
        'accessible-astro-components',
        'astro-icon',
      ],
    },
  },
})
