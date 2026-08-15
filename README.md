# Crayon

A Sass-first CSS toolkit combining utility classes, design tokens, functions, and mixins for component-scoped styling for projects working a production scale.

[Full docs](https://crayoncss.com)
[Why does this exist?](https://crayoncss.com/docs/introduction.html)

## Installation

```sh
yarn add crayon-css
yarn add --dev sass-embedded
```

```sh
pnpm add crayon-css
pnpm add --save-dev sass-embedded
```

```sh
npm install crayon-css
npm install --save-dev sass-embedded
```

Crayon works best with frameworks that support co-located scoped `<style>` blocks. The recommended workflow combines utility classes with mixins in those scoped styles.

## Vue/Vite

Create or add to your global stylesheet (e.g. `src/assets/main.scss`):

```scss
@use 'crayon-css' as crayon;
```

Then import it in your `main.js` / `main.ts`:

```js
import './assets/main.scss'
```

You can also use Crayon's functions directly in component `<style>` blocks:

```vue
<style lang="scss" scoped>
@use 'crayon-css' as crayon;

.card {
  padding: crayon.size(4);
  border-radius: crayon.rounded("lg");
  color: crayon.color("slate-800");

  @include crayon.dark {
    color: crayon.color("slate-200");
  }
}
</style>
```

## Svelte/SvelteKit

Add to your root `+layout.svelte`:

```svelte
<style lang="scss">
@use 'crayon-css' as crayon;
</style>
```

Use functions and mixins in any component:

```svelte
<style lang="scss">
@use 'crayon-css' as crayon;

h1 {
  font-size: crayon.font-size("3xl");
  padding: crayon.size(6) 0;

  @include crayon.screen("md") {
    font-size: crayon.font-size("5xl");
  }
}
</style>
```

## Astro

Add the Vite Sass load path config in `astro.config.mjs`:

```mjs
import { defineConfig } from 'astro/config';

export default defineConfig({
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          loadPaths: ['node_modules'],
        },
      },
    },
  },
});
```

Create `src/styles/crayon.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in your base layout frontmatter so it applies everywhere:

```md
---
// src/layouts/Layout.astro
import '../styles/crayon.scss';
---
```

Use Crayon's mixins in any `.astro` component:

```html
<style lang="scss">
  @use 'crayon-css' as crayon;

  .card {
    @include crayon.box($p: 6, $rounded: "xl", $bg: "white", $border: "slate-200");
    @include crayon.vstack(4);
  }
</style>
```

## Ember

Requires **Polaris / Embroider + Vite** — classic Ember CLI is not supported.

Configure Vite to resolve Sass packages from `node_modules`:

```mjs
// vite.config.mjs
export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        loadPaths: ['node_modules'],
      },
    },
  },
});
```

Add a Sass entry point and import it in `app.js`:

```scss
// app/styles/crayon.scss
@use 'crayon-css' as crayon;
```

```js
// app/app.js
import './styles/crayon.scss';
```

For scoped component styles (highly recommended), set up [ember-scoped-css](https://github.com/auditboard/ember-scoped-css):

```gjs
<template>
  <div class="card bg-blue-500">Hello</div>
  <style lang="scss" scoped>
    @use "crayon-css" as crayon;
    .card {
      padding: crayon.size(4);
      border-radius: crayon.rounded("lg");
    }
  </style>
</template>
```

## React (Experimental)

> [!WARNING]
> Crayon can be used in React projects that compile Sass, but the recommended component-scoped workflow has not yet been tested thoroughly. Third-party tools such as [styled-jsx](https://github.com/vercel/styled-jsx) or [Astroturf](https://astroturfcss.github.io/astroturf/) can work, but these integrations are not officially supported by Crayon.

### Vite

Create a global stylesheet, e.g. `src/assets/main.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in `main.jsx` / `main.tsx`:

```tsx
import './assets/main.scss'
```

### Next.js

Configure Next.js to use `sass-embedded`:

```ts
// next.config.ts
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  sassOptions: {
    implementation: 'sass-embedded',
  },
}

export default nextConfig
```

Create `app/globals.scss`:

```scss
@use 'crayon-css' as crayon;
```

Import it in the root layout:

```tsx
// app/layout.tsx
import './globals.scss'
```

## Usage

### Utility classes

Crayon generates utility classes similar to Tailwind — use them directly in your markup:

```html
<div class="flex items-center justify-between p-4 bg-blue-500 text-white rounded-lg">
  <h2 class="text-xl bold">Hello</h2>
  <button class="px-4 py-2 bg-white text-blue-500 rounded-md">Click</button>
</div>
```

### CSS variables

Crayon also generates CSS custom properties on `:root` for colours (`--color-blue-500`), font sizes (`--text-lg`), font weights (`--font-weight-bold`), border radii (`--rounded-lg`), and breakpoints (`--sm`, `--md`, etc.), so you can use them in plain CSS or inline styles without Sass.

### Sass functions

When you need values in custom styles, Crayon exposes lookup functions:

```scss
@use 'crayon-css' as crayon;

.custom {
  padding: crayon.size(4);            // 1rem (4 × 4px base, converted to rem)
  color: crayon.color("red-500");     // colour value from the palette
  font-size: crayon.font-size("lg");  // font size in rem
  border-radius: crayon.rounded("xl");  // border radius in rem
  border-width: crayon.border-width("2"); // border width
}
```

### Mixins

```scss
@use 'crayon-css' as crayon;

.hero {
  padding: crayon.size(8);

  @include crayon.screen("md") {
    padding: crayon.size(16);
  }

  @include crayon.dark {
    background: crayon.color("slate-900");
  }

  @include crayon.hover {
    opacity: 0.9;
  }
}
```

| Mixin | Description |
|-------|-------------|
| `screen($breakpoint)` | Responsive min-width media query (`sm`, `md`, `lg`, `xl`, `2xl`) |
| `dark` | Dark mode via `prefers-color-scheme: dark` |
| `hover` | `:hover` state |
| `focus` | `:focus` state |
| `active` | `:active` state |

## Customisation

All of Crayon's defaults — colours, sizes, breakpoints, fonts, grid columns, border radii, and more — are defined in [`src/_config.scss`](src/_config.scss). Have a look at that file to see everything you can override.

To customise, create a wrapper file in your project that forwards Crayon with your config:

```scss
// src/styles/_crayon.scss
@forward 'crayon-css' with (
  $base-size: 8px,
  $font-family: "Inter, system-ui, sans-serif",
  $colors: (
    "brand-50": #f0f0ff,
    "brand-500": #6200ee,
    "brand-900": #1a0044,
    // ...
  )
);
```

Then use your wrapper everywhere instead of `crayon-css` directly:

```scss
@use "crayon" as crayon;

.card {
  padding: crayon.size(4);          // uses your custom $base-size
  color: crayon.color("brand-500"); // uses your custom palette
}
```

This keeps all your overrides in one place. Every other file just does `@use "crayon"` and gets the customised version. If you don't create a wrapper, you get the defaults.
