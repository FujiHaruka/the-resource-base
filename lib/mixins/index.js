/**
 * Mixins
 * @module mixins
 */
'use strict'

const _d = (m) => 'default' in m ? m.default : m

const listenMix = _d(require('./listenMix'))
const writeOnceMix = _d(require('./writeOnceMix'))

module.exports = {
  listenMix,
  writeOnceMix,
}
