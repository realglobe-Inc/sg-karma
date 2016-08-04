#!/usr/bin/env node

const commander = require('commander')
const { join } = require('path')
const filecopy = require('filecopy')
const fs = require('fs')
const assert = require('assert')
const through2 = require('through2')
const fileExists = require('file-exists')

commander
  .command('init')
  .description('karma.conf.js と test/test_index.karma.js を作る')
  .action(init)

commander
  .command('travis')
  .description('.travis.yml に karma 用の設定を追加する')
  .action(travis)

commander
  .command('render')
  .description('test/*test.js から karma 用の test/*test.karma.js を生成する')
  .action(render)

commander.parse(process.argv)

function init () {
  filecopy(
    join(__dirname, '../src/karma.conf.js'),
    'karma.conf.js',
    { force: false }
  )
  filecopy(
    join(__dirname, '../src/test_index.karma.js'),
    'test/test_index.karma.js',
    { force: false, mkdirp: true }
  )
}

function travis () {
  console.log(`
  残念！ 実装していませんでした！
  手動で以下の設定を .travis.yml に追加してね。

addons:
  firefox: "43.0"

before_install:
- export DISPLAY=:99.0
- sh -e /etc/init.d/xvfb start

`)
}

function render () {
  let browser = require(join(process.cwd(), 'package.json')).browser
  assert.ok(browser)
  let testFiles = fs.readdirSync('test').filter(file => file.endsWith('test.js'))

  for (let file of testFiles) {
    // *.js -> *.karma.js
    let newFile = file.split('.').slice(0, -1).concat('karma.js').join('.')
    if (fileExists('test/' + newFile)) {
      continue
    }
    let reader = fs.createReadStream(join('test', file))
    let writer = fs.createWriteStream(join('test', newFile))
    let throgh = through2(function (chunk, enc, callback) {
      let string = chunk.toString()
      let browsered = string.replace(/\/lib/g, '/' + browser)
      let karmad = browsered.replace(/mocha/g, 'karma')
      this.push(Buffer.from(karmad))
      callback()
    })
    reader.on('error', (err) => { throw err })
    throgh.on('error', (err) => { throw err })
    writer.on('error', (err) => { throw err })
    writer.on('finish', () => {
      console.log(`File generated: test/${newFile}`)
    })
    reader.pipe(throgh).pipe(writer)
  }
}
