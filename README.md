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

If you wish to make changes to the icon font you'll need to follow these steps:

1. Add, remove or change respective `.svg` files inside `images/`.
2. Run `$ npm install` to get pull in all the required build tools.
3. Make sure you have `fontforge` and `ttfautohint` installed on your machine. The [grunt-webfont](https://github.com/sapegin/grunt-webfont#installation) installation guide outlines the prerequisites.
4. Run `$ grunt`.
5. Load `index.html` locally in your browser and check your icon looks good.
6. Submit a pull request.
7. Module owner will review, land, and stamp a new version.

## Guidelines

For best results, it is recommended to follow these guidelines:

* Make the document 30px × 30px (In Inkscape: File > Document Properties... > Custom size).
* Make the icon 24px × 24px.
* Center the icon (In Inkscape: Object > Align and Distribute... > Align relative to page).
* Make sure to have only one `<path>` with no overlap per icon.
* Optimise the icons using [svgo](https://github.com/svg/svgo), then export to plain SVG file (`$ inkscape -l icon.svg icon.svg`).

Please also make sure new icons naming is consistent with existing ones:

* Use lower case only.
* Separate words with hyphens.
* Use meaningful words rather than acronyms (e.g. `top-left-crop-corner` instead of <span style="text-decoration:line-through">`t-l-crop-corner`</span>).

## Gaia usage

Gaia hackers, please read the introduction to ['Version controlled packages in Gaia'](https://gist.github.com/wilsonpage/3d7f636a78db66f8f1d7) to find out how to use this package in your Gaia app.

## Get a report

You can get a report of unused icons on a project by doing:
```bash
$ node bin/report.js path/to/your/project/
```

Please note, that dynamically inserted icons may still be marked as unused in the report.

## Current owners

- Wilson Page [:wilsonpage]
