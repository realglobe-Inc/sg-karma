# sg-karma

karma + webpack でテストするために必要なパッケージのミニマルセット。

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
