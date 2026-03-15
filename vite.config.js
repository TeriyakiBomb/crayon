import { defineConfig } from 'vite'
import purgecss from '@fullhuman/postcss-purgecss'

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        ...(process.env.NODE_ENV === 'production' ? [
          purgecss({
            content: ['./index.html', './src/**/*.{js,ts,html}'],
            defaultExtractor: content => content.match(/[\w\-\.]+/g) || []
          })
        ] : [])
      ]
    }
  }
})
