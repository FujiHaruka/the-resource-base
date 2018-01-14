/**
 * Test for TheResource.
 * Runs with mocha.
 */
'use strict'

const TheResource = require('../lib/TheResource')
const {ok, equal} = require('assert')
const {create: theDb} = require('the-db')
const asleep = require('asleep')

describe('the-resource', () => {
  before(() => {
  })

  after(() => {
  })

  it('Do test', async () => {
    ok(new TheResource('hoge'))

    const db = theDb({
      dialect: 'memory'
    })

    const User = db.load(TheResource, 'User')
    const History = db.load(TheResource.WriteOnce, 'History')

    let listenCreated
    User.listenToCreate(({created}) => {
      listenCreated = created
    })

    await User.create({name: 'foo'})

    await asleep(10)
    ok(listenCreated)
    equal(listenCreated.name, 'foo')

    const history = await History.create({})
    const {error} = await history.update({foo: 'bar'}).catch((error) => ({error}))
    ok(error)

    await db.close()
  })
})

/* global describe, before, after, it */
