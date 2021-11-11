# 11ty-tools

[![Lint](https://github.com/garraflavatra/11ty-tools/actions/workflows/lint.yml/badge.svg)](https://github.com/garraflavatra/11ty-tools/actions/workflows/lint.yml)
![GitHub last commit](https://img.shields.io/github/last-commit/garraflavatra/11ty-tools)
[![npm](https://img.shields.io/npm/v/11ty-tools)](https://www.npmjs.com/package/11ty-tools)

This package provides an advanced asset pipeline for [Eleventy], the simpler static site generator.

JavaScript ([ECMAScript] is supported) and [Sass]/SCSS assets will be compiled using [webpack], a static module bundler for the web. This plugin also configures [11ty-image] to optimize internal and external images. Furthermore, it minimizes Eleventy's HTML output using [html-minifier].

## Installation

The easiest way to use this plugin, is by using my preconfigured [11ty-template]. If you want to install it yourself, you should do something like this:

```shell
npm install 11ty-tools --save-dev
```

```js
// .eleventy.js
const tools = require("11ty-tools");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(tools);
  //...
};
```

```js
// webpack.config.js
module.exports = require("11ty-tools/lib/webpack-config");
```

## Features

### Asset processing

#### JavaScript/ECMAScript

Any valid JavaScript file put in `src/assets/js/*.js` will get processed and put in the asset manifest. Files in subdirectories will _not_ get processed, unless they're imported by a file matching the pattern above.

#### Sass/SCSS

Any valid Sass or SCSS file that is imported in `src/assets/style/bundle.js` will get processed and put in the asset manifest.

#### Webfonts

Local font files that are referenced to in Sass or SCSS will get a hashed output name too. Make sure you download them into your project using [google-webfonts-helper] (e.g. into `src/assets/fonts`).

#### How to use assets

There are two ways to using assets.

You could get the absolute path to your asset by using the `{% asset 'name' %}` shortcode and feeding it with the asset name (e.g. `interactive.js` or `mystyles.css`). The relative path will be resolved from the asset manifest (living in `out/_proc/manifest.json`) generated by the [webpack-assets-manifest] plugin.

However, sometimes it is useful to inline an asset right in your HTML. You could do that by using `{% inlineasset 'name' %}`. The raw asset contents will be read from the file and returned by the shortcode. Make sure that you put `<style>` `</style>` or script tags around the shortcode, as it won't automatically do that for you.

### Images

You can have your images processed by using the `{% image 'path'[, 'alt'[, 'sizes']] %}` shortcode. Parameters:

- `path` **(required)**: The path to the image. Can be internal (e.g. `img/cat.png`) or external (e.g. `https://somesite.io/image.jpeg`).
  NOTE: internal images are automatically provided with the prefix `src/site/img/`. If you would like to include an image outside that folder, add a leading slash to the path. There is no global config option to disable or change the base path.
- `alt` **(recommended)**: Alt text for screen readers.
- `sizes`: see [`sizes`] on MDN HTML documentation.

## Contributing

> Included in [CONTRIBUTING.md]

Any type of contribution is very welcome! Provisionally, I'm not going to put a lot of effort into contribution guidelines as this isn't a huge project.

## License

> Included in [LICENSE.md]

Copyright 2021 Romein van Buren <<romein@vburen.eu>>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

[ecmascript]: https://en.wikipedia.org/wiki/ECMAScript
[eleventy]: https://www.11ty.dev
[sass]: https://sass-lang.com
[webpack]: https://webpack.js.org
[11ty-image]: https://www.11ty.dev/docs/plugins/image/
[html-minifier]: https://github.com/kangax/html-minifier
[11ty-template]: https://github.com/garraflavatra/11ty-template
[`sizes`]: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/source#attr-sizes
[google-webfonts-helper]: https://google-webfonts-helper.herokuapp.com/fonts
[webpack-assets-manifest]: https://github.com/webdeveric/webpack-assets-manifest
[contributing.md]: https://github.com/garraflavatra/11ty-tools/blob/main/CONTRIBUTING.md
[license.md]: https://github.com/garraflavatra/11ty-tools/blob/main/LICENSE.md
