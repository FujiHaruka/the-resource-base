/**
 * Resource for the DB
 * @class TheResource
 * @extends ClayResource
 * @extends ListenMixed
 */
'use strict'

const {ClayResource} = require('clay-resource')
const {create: clayResourceName} = require('clay-resource-name')
const {
  listenMix,
  writeOnceMix,
} = require('./mixins')

const TheResourceBase = listenMix(ClayResource)

/** @lends TheResource */
class TheResource extends TheResourceBase {
  /**
   * Cascade destroy condition
   * @example get cascaded () {
   *   return { User: (ref) => ({user: {$ref: ref}}) }
   * }
   */
  static get cascaded () {
    return {}
  }

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

  /**
   * Get ref of id
   * @param id - Id (or may be an entity)
   * @returns {string|Object}
   */
  refOf (id) {
    if (!id) {
      throw new Error(`id is required`)
    }
    const {$ref} = arguments[0]
    if ($ref) {
      return $ref
    }
    return super.refOf(id)
  }

  async invalidated (attributes) {
    throw new Error(`[TheResource] Not implemented`)
  }

  async refresh (entity) {
    const values = await this.invalidated({...entity})
    await entity.update(values)
  }
}

module.exports = Object.assign(TheResource, {
  WriteOnce: class TheResourceWriteOnce extends writeOnceMix(TheResource) {},
})
