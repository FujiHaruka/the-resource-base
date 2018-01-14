/**
 * Resource for the DB
 * @class TheResource
 * @extends ClayResource
 * @extends ListenMixed
 */
'use strict'

const {
  listenMix,
  writeOnceMix
} = require('./mixins')
const {ClayResource} = require('clay-resource')
const {create: clayResourceName} = require('clay-resource-name')

const TheResourceBase = listenMix(ClayResource)

/** @lends TheResource */
class TheResource extends TheResourceBase {
  constructor (...args) {
    super(...args)
    this.db = null
    this.closed = false
  }

  get resourceName () {
    return clayResourceName(this)
  }

  close () {
    this.db = null
    this.removeAllListeners()
    this.closed = true
  }
}

module.exports = Object.assign(TheResource, {
  WriteOnce: class TheResourceWriteOnce extends writeOnceMix(TheResource) {}
})