# data-vis-assets

A collection of various assets for Data Visualization assembled from inspiring sources. The assets are organized with [Catalog](https://www.catalog.style/).

## Quickstart

- `yarn install`
- `yarn start`

To deploy on GitHub Pages:

- `yarn build`

To create a build and run it locally (assuming that [`serve`](https://github.com/zeit/serve) is installed globally):

- `yarn run catalog-build`
- `serve catalog/build/`

## Notes

- Dependabot:
  - [Config file validator](https://dependabot.com/docs/config-file/validator/).
  - [Documentation](https://docs.github.com/en/github/administering-a-repository/configuration-options-for-dependency-updates).
  - [`open-pull-requests-limit`](https://docs.github.com/en/code-security/supply-chain-security/keeping-your-dependencies-updated-automatically/configuration-options-for-dependency-updates#open-pull-requests-limit): _This option has no impact on security updates, which have a separate, internal limit of ten open pull requests._ Dependabot [security updates](https://github.com/joaopalmeiro/data-vis-assets/security/dependabot) != Dependabot [version updates](https://github.com/joaopalmeiro/data-vis-assets/network/updates). Keep `Dependabot alerts` enabled and `Dependabot security updates` disabled [here](https://github.com/joaopalmeiro/data-vis-assets/settings/security_analysis) (to avoid PRs).
  - [Enabling or disabling Dependabot security updates for an individual repository](https://docs.github.com/en/code-security/supply-chain-security/managing-vulnerabilities-in-your-projects-dependencies/configuring-dependabot-security-updates#managing-dependabot-security-updates-for-your-repositories).
- [Linguist](https://github.com/github/linguist/blob/master/lib/linguist/languages.yml).
- `yarn upgrade`.
- Visual Studio Code has a command called _Transform to Uppercase_ (there is also a command called _Transform to Lowercase_) that is useful for standardizing hexadecimal color codes. On the _Keyboard Shortcuts_ page (`cmd+k cmd+s`), you can define a _Keybinding_ (`cmd+u`, for example) to apply this command more easily.
- This code snippet "simulates" a line break:

````markdown
```color-palette|horizontal
colors:
   - {}
```
````
