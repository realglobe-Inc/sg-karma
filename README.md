# sg-karma

karma + webpack でテストするために必要なパッケージのミニマルセット。

[![Build Status][bd_travis_shield_url]][bd_travis_url]
[![npm Version][bd_npm_shield_url]][bd_npm_url]
[![JS Standard][bd_standard_shield_url]][bd_standard_url]

[bd_travis_url]: http://travis-ci.org/realglobe-Inc/sg-karma
[bd_travis_shield_url]: http://img.shields.io/travis/realglobe-Inc/sg-karma.svg?style=flat
[bd_npm_url]: http://www.npmjs.org/package/sg-karma
[bd_npm_shield_url]: http://img.shields.io/npm/v/sg-karma.svg?style=flat
[bd_standard_url]: http://standardjs.com/
[bd_standard_shield_url]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg


## Install

```sh
$ npm i -D sg-karma
```

## Usage

bin が使える。

```sh
$ ./node_modules/.bin/sg-karma --help

  Usage: sg_karma [options] [command]


  Commands:

    init     karma.conf.js と test/test_index.karma.js を作る
    travis   .travis.yml に karma 用の設定を追加する
    render   test/*test.js から karma 用の test/*test.karma.js を生成する

  Options:

    -h, --help  output usage information
```
