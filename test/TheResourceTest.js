/**
 * Test for TheResource.
 * Runs with mocha.
 */
'use strict'

const TheResource = require('../lib/TheResource')
const {ok, equal} = require('assert')

describe('the-resource', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', () => {
    ok(new TheResource('hoge'))
  })
})

/* global describe, before, after, it */
