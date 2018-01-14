/**
 * Mixin for writeOnce
 * @function writeOnceMix
 */
'use strict'

function writeOnceMix (Class) {
  class WriteOnce extends Class {
    update () {
      this.throwWriteOnceError('update')
    }

    updateBulk () {
      this.throwWriteOnceError('updateBulk')
    }

    destroy () {
      this.throwWriteOnceError('destroy')
    }

    destroyBulk () {
      this.throwWriteOnceError('destroyBulk')
    }

    throwWriteOnceError (operation) {
      const resourceName = this.resourceName || this.name || this.constructor.name
      throw new Error(`Can not ${operation} on "${resourceName}" because it is marked as write-once`)
    }
  }

  return WriteOnce
}

module.exports = writeOnceMix