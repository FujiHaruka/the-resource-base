/**
 * Base of the-resource
 * @module the-resource-base
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

const DataTypes = _d(require('./DataTypes'))
const TheResource = _d(require('./TheResource'))
const create = _d(require('./create'))

module.exports = {
  DataTypes,
  TheResource,
  create,
  default: create,
}
