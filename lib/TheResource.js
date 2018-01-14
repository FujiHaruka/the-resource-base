/**
 * Resource for the DB
 * @class TheResource
 * @extends ClayResource
 * @extends ListenMixed
 */
'use strict'

const listenMix = require('./mixins/listenMix')
const {ClayResource} = require('clay-resource')

const TheResourceBase = listenMix(ClayResource)

/** @lends TheResource */
class TheResource extends TheResourceBase {
  constructor (...args) {
    super(...args)
    this.db = null
    this.closed = false
  }

  close () {
    this.db = null
    this.removeAllListeners()
    this.closed = true
  }
}

module.exports = TheResource