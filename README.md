# data-vis-assets

A collection of various assets for Data Visualization assembled from inspiring sources. The assets are organized with [Catalog](https://www.catalog.style/).

## Quick start

- `yarn install`
- `yarn start`

To deploy on GitHub Pages:

- `yarn build`

To create a build and run it locally (assuming that [`serve`](https://github.com/zeit/serve) is installed globally):

- `yarn run catalog-build`
- `serve catalog/build/`

## Notes

- Visual Studio Code has a command called _Transform to Uppercase_ (there is also a command called _Transform to Lowercase_) that is useful for standardizing hexadecimal color codes. On the _Keyboard Shortcuts_ page (`cmd+k cmd+s`), you can define a _Keybinding_ (`cmd+u`, for example) to apply this command more easily.
- This code snippet "simulates" a line break:

````
```color-palette|horizontal
colors:
   - {}
```
````
