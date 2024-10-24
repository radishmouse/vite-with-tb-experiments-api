
Shows an example of building a Thunderbird add-on:
* with Vue/Vite and TypeScript
* and uses [one of the Experiments APIs](https://github.com/thunderbird/webext-support/tree/master/experiments/FileSystem)


## Dev Notes

* The code will only run in Thunderbird (v128+)
* The `watch` script relies on [entr](https://github.com/eradman/entr).
* You can use `npm` or `pnpm` (or probably `yarn`), but this README shows examples using `pnpm`

Install dependencies: `pnpm i`

Build with:
```sh
pnpm build
```

Or rebuild when files change:
```sh
# Make sure to install this first: https://github.com/eradman/entr
pnpm watch
```
