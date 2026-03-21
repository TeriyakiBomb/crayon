import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import purgecss from '@fullhuman/postcss-purgecss'
import yaml from 'js-yaml'

const yamlPlugin = {
  name: 'yaml',
  transform(src, id) {
    if (id.endsWith('.yaml') || id.endsWith('.yml')) {
      return { code: `export default ${JSON.stringify(yaml.load(src))}`, map: null }
    }
  }
}

export default defineConfig({
  plugins: [svelte(), yamlPlugin],
  css: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === 'production' ? [
          purgecss({
            content: ['./index.html', './demo/**/*.{js,ts,svelte,html}'],
            defaultExtractor: content => content.match(/[\w\-\.]+/g) || []
          })
        ] : [])
      ]
    }
  }
})
