// astro.config.mjs
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import compress from 'astro-compress'
import icon from 'astro-icon'
import sitemap from '@astrojs/sitemap' 
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineConfig({
  site: 'https://jasalike.com',
  output: 'static',
  trailingSlash: 'ignore',
  
  // 👇 FITUR PREFETCH 👇
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover'
  },

  // 👇 TAMBAHKAN FITUR REDIRECTS DI SINI 👇
  redirects: {
    '/jasa-like-tiktok-permanen': '/like-tiktok'
  },
  // 👆 SELESAI 👆

  integrations: [
    mdx(), 
    icon(), 
    compress(), 
    sitemap({
      filter: (page) =>
        !page.includes('/dashboard') &&
        !page.includes('/admin-vote') &&
        !page.includes('/affiliate-jasalike') &&
        !page.includes('/kontak-admin') &&
        !page.includes('/404'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      serialize(item) {
        if (item.url === 'https://jasalike.com/' || item.url === 'https://jasalike.com') {
          item.priority = 1.0
          item.changefreq = 'weekly'
        }
        return item
      },
    })
  ],
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
    ssr: {
      noExternal: [
        'accessible-astro-components',
        'astro-icon',
      ],
    },
  },
})
