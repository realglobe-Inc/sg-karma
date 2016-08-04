/**
 * Test case for module.
 * Runs with karma.
 */
'use strict'

const assert = require('assert')
const co = require('co')

describe('karma', () => {
  it('can test', () => co(function * () {
    let {hoge} = { hoge: 1 }
    assert.equal(hoge, 1)
  }))
})

/* global describe, it */
