# Crayon

A Sass utility CSS toolkit. Familiar tailwind-flavoured utility classes with some stronger opinions - docs are WIP.

## Install

```bash
yarn add crayon-css
```

You'll also need `sass-embedded`:

```bash
yarn add -D sass-embedded
```

## Setup

### Vite (Vue, Svelte, etc.)

Import Crayon in your main stylesheet or entry point:

```scss
@use 'crayon-css';
```

That's it. Vite resolves the `sass` export automatically.

#### Vue

Create or add to your global stylesheet (e.g. `src/assets/main.scss`):

```scss
@use 'crayon-css';
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

#### Svelte

Import in your root layout or component:

```svelte
<style lang="scss">
@use 'crayon-css';
</style>
```

Or in a global stylesheet loaded from your `+layout.svelte` / entry point.

Using functions and mixins in component styles:

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

### Plain HTML / vanilla Sass

If you're compiling Sass yourself (without a bundler), add `node_modules` to your load paths:

```bash
sass --load-path=node_modules src/style.scss dist/style.css
```

Then in your Sass:

```scss
@use 'crayon-css';
```

Link the compiled CSS in your HTML:

```html
<link rel="stylesheet" href="dist/style.css">
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

