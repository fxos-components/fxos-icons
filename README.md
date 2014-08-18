# gaia-icons

## Installation

```bash
$ bower install gaia-components/gaia-icons
```

## Usage

```html
<span data-icon="camera"></span>
```

## Examples

- [Example](http://gaia-components.github.io/gaia-icons/)

## Contributions

If you wish to make changes to the icon-font you'll need to follow these steps:

1. Add, remove or change repsective `.svg` files inside `images/`
2. Run `$ npm install` to get pull in all the required build tools.
3. Make sure you `fontforge` and `ttfautohint` installed on your machine. The [grunt-webfont](https://github.com/sapegin/grunt-webfont#installation) readme outlines the prerequisites.
4. Run `$ grunt`
5. Load `index.html` locally in your browser and check your icon looks good.
6. Submit a pull-request
7. Module owner will review, land, and stamp a new version.

## Gaia usage

Gaia hackers, please read the introduction to ['Version controlled packages in Gaia'](https://gist.github.com/wilsonpage/3d7f636a78db66f8f1d7) to find out how to use this package in your Gaia app.

## Current owners

- Wilson Page [:wilsonpage]
