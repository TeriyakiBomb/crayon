# Crayon 0.11.0

This release fills gaps between utility classes and Sass mixins and expands the state and fluid composition APIs.

## New features

- Added `focus-visible`, `focus-within`, `enabled`, `disabled`, and `checked` state mixins.
- Added the `hide` display mixin as an alias for `hidden`.
- Added the `f-row` and `f-col` flex-direction aliases.
- Added `order-first` and `order-last` flex-order mixins.
- Added `border-x`, `border-y`, `border-t`, `border-r`, `border-b`, and `border-l` directional border-width mixins.
- Added grid auto-column, auto-row, and dense-flow mixins matching the existing utility classes.
- Added `min-w-full`, `min-w-min`, `min-w-max`, `min-w-fit`, `max-w-full`, `max-w-none`, `max-w-min`, `max-w-max`, and `max-w-fit` width mixins.
- Added `min-h-full`, `max-h-full`, and `max-h-none` height mixins.
- Added `fluid-px` and `fluid-py` for fluid horizontal and vertical padding.

## Improvements

- Reorganised the internal Sass sources by moving fluid mixins into Composition and SVG masks into Decorative; the root API remains unchanged.
- Improved README wording and reorganised SassDoc groups for consistent generated API navigation.
- Added SassDoc descriptions for the `sr-only` and `not-sr-only` accessibility mixins.

## Fixes

- Fixed divide mixins being grouped with border mixins in the generated API.

# Crayon 0.10.0

This release improves the Sass API, simplifies configuration, and adds full API documentation.

## New features

- Added generated SassDoc API documentation with SCSS and Sass examples.
- Added JSON SassDoc API export.
- Sizes can now use breakpoint names.
- Added `p-0`, `p-none`, `m-0`, and `m-none` utilities, including directional variants.
- Width and height mixins now accept viewport names.
- Added `w-vw` and `h-vh` utilities.
- Added fractional `min-w-*`, `max-w-*`, `min-h-*`, and `max-h-*` utilities.
- Width and height mixins now accept configured fraction strings.
- Added `container($center: true)`.
- Added `center`, `center-x`, and `center-y` utilities.
- Added `$reverse` to `stack`, `vstack`, and `hstack`.
- Added `min-size-*` and `max-size-*` utilities and mixins.
- Margin mixins now accept `$negative: true`.
- Added `minus-m`, `minus-mt`, `minus-mb`, `minus-ml`, `minus-mr`, `minus-mx`, and `minus-my`.
- Added `font-size($name)` and `font-weight($name)` mixins.
- Added `divide-x`, `divide-y`, `divide-style`, and `divide-color` mixins.
- Added `portrait` and `landscape` orientation mixins.
- Added positive and negative flex ordering utilities, including `order-none`, `order-first`, and `order-last`, plus the `order($value)` mixin.

## Improvements

- Simplified `$sizes` and `$font-sizes` configuration.
- Extended heading resets to `h1` through `h6`.
- Headings now inherit `font-size` and `font-weight`.
- Opacity lookup now accepts numeric and string keys.
- Improved grid mixin parameters and documentation.
- Improved SVG mask documentation.
- Changed development tooling from npm to Yarn.

## Fixes

- Fixed border-width and border-radius lookup with numeric configuration keys.
- Sizing mixins now report invalid strings and wrong-axis viewport names.

## Deprecations

- Deprecated `containers()`. Use regular CSS container queries instead.

## Breaking changes

- Replace negative margin mixins such as `-mt(4)` with `minus-mt(4)` or `mt(4, $negative: true)`.
- Remove `$rotate` and `$flip` arguments from `mask-squircle()` calls.
- Replace `$resolved-colors` references with `$palette`.
- `str-replace()` is no longer exposed through the root `crayon` namespace.
- The default `$border-widths` and `$opacities` keys are now numbers. Lookup functions continue to support string keys.
