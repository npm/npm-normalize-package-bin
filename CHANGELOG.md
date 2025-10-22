# Changelog

## [5.0.0](https://github.com/npm/npm-normalize-package-bin/compare/v4.0.0...v5.0.0) (2025-10-22)
### ⚠️ BREAKING CHANGES
* align to npm 11 node engine range (#99)
### Bug Fixes
* [`d0ab675`](https://github.com/npm/npm-normalize-package-bin/commit/d0ab675dc89b39d7e132d1c6c4e9d08bd1ea2182) [#99](https://github.com/npm/npm-normalize-package-bin/pull/99) align to npm 11 node engine range (#99) (@owlstronaut)
### Chores
* [`9b7b39a`](https://github.com/npm/npm-normalize-package-bin/commit/9b7b39a244949e8d835abb6461a4578cd1422a07) [#93](https://github.com/npm/npm-normalize-package-bin/pull/93) postinstall workflow updates (#93) (@owlstronaut)
* [`19a6ff9`](https://github.com/npm/npm-normalize-package-bin/commit/19a6ff9761108d8d2a2decd1fd2546adc9290e44) [#98](https://github.com/npm/npm-normalize-package-bin/pull/98) bump @npmcli/template-oss from 4.26.0 to 4.27.1 (#98) (@dependabot[bot], @npm-cli-bot)

## [4.0.0](https://github.com/npm/npm-normalize-package-bin/compare/v3.0.1...v4.0.0) (2024-09-03)
### ⚠️ BREAKING CHANGES
* `npm-normalize-package-bin` now supports node `^18.17.0 || >=20.5.0`
### Bug Fixes
* [`a1c7cb8`](https://github.com/npm/npm-normalize-package-bin/commit/a1c7cb8015043ab527f1557197d017251141d63d) [#89](https://github.com/npm/npm-normalize-package-bin/pull/89) align to npm 10 node engine range (@hashtagchris)
### Chores
* [`cf43a5d`](https://github.com/npm/npm-normalize-package-bin/commit/cf43a5d29f2f10f1a8f19b1e08c8dd3e0dfb23a6) [#89](https://github.com/npm/npm-normalize-package-bin/pull/89) run template-oss-apply (@hashtagchris)
* [`a2e246b`](https://github.com/npm/npm-normalize-package-bin/commit/a2e246b5a62c8ad99d88997b30678062b7c20bd2) [#87](https://github.com/npm/npm-normalize-package-bin/pull/87) bump @npmcli/eslint-config from 4.0.5 to 5.0.0 (@dependabot[bot])
* [`1799d4b`](https://github.com/npm/npm-normalize-package-bin/commit/1799d4b2acdc59df8c26ce5faee339694dcc59df) [#77](https://github.com/npm/npm-normalize-package-bin/pull/77) bump @npmcli/template-oss to 4.22.0 (@lukekarrys)
* [`65d9e5f`](https://github.com/npm/npm-normalize-package-bin/commit/65d9e5f27483bb15c2932dd5dbcc2345db257cf5) [#88](https://github.com/npm/npm-normalize-package-bin/pull/88) postinstall for dependabot template-oss PR (@hashtagchris)
* [`34b5912`](https://github.com/npm/npm-normalize-package-bin/commit/34b5912d7ffc40bd2d35bce3f529b272a65af820) [#88](https://github.com/npm/npm-normalize-package-bin/pull/88) bump @npmcli/template-oss from 4.23.1 to 4.23.3 (@dependabot[bot])

## [3.0.1](https://github.com/npm/npm-normalize-package-bin/compare/v3.0.0...v3.0.1) (2023-05-02)

### Bug Fixes

* [`1ebb83b`](https://github.com/npm/npm-normalize-package-bin/commit/1ebb83b091ccfd7d7f9ec8432d627ef57265f553) [#41](https://github.com/npm/npm-normalize-package-bin/pull/41) apply slash normalizer before bin path join (#41) (@antongolub)

## [3.0.0](https://github.com/npm/npm-normalize-package-bin/compare/v2.0.0...v3.0.0) (2022-10-10)

### ⚠️ BREAKING CHANGES

* `npm-normalize-package-bin` is now compatible with the following semver range for node: `^14.17.0 || ^16.13.0 || >=18.0.0`

### Features

* [`06ee481`](https://github.com/npm/npm-normalize-package-bin/commit/06ee48159e7938c76927a3b649dfae8178af386f) [#23](https://github.com/npm/npm-normalize-package-bin/pull/23) postinstall for dependabot template-oss PR (@lukekarrys)

## [2.0.0](https://github.com/npm/npm-normalize-package-bin/compare/v1.0.1...v2.0.0) (2022-08-22)


### ⚠ BREAKING CHANGES

* make node engines ^12.13.0 || ^14.15.0 || >=16.0.0

### Bug Fixes

* replace deprecated String.prototype.substr() ([f7f3bc4](https://github.com/npm/npm-normalize-package-bin/commit/f7f3bc441299c755b25ebbd08e919c2da86f314e))


### Dependencies

* @npmcli/template-oss ([#12](https://github.com/npm/npm-normalize-package-bin/issues/12)) ([45a35c3](https://github.com/npm/npm-normalize-package-bin/commit/45a35c3d3ce0fb75247a4411a9ad03cac694bae4))
