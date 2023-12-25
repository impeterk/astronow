import rehypeExternalLinks from 'rehype-external-links'
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  markdown: {
    rehypePlugins: [
      [rehypeExternalLinks, {
        rel: ['nofollow', 'noopener', 'noreferrer'],
        target: '_blank'}]
    ]
  },
  integrations: []
});