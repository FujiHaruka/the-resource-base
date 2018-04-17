/**
 * Data types
 * @module DataTypes
 */
'use strict'

const {DataTypes} = require('clay-constants')
const {isProduction} = require('the-check')
const theHash = require('the-hash').default

module.exports = DataTypes

if (!isProduction()) {
  module.exports = theHash(module.exports).toProxy({name: 'DataTypes', unknownCheck: true})
}
