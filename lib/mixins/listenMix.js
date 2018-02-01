/**
 * Mixins for listen
 * @function listenMix
 */
'use strict'

const {
  ResourceEvents: {
    ENTITY_CREATE,
    ENTITY_CREATE_BULK,
    ENTITY_UPDATE,
    ENTITY_UPDATE_BULK,
    ENTITY_DESTROY,
    ENTITY_DESTROY_BULK,
    ENTITY_DROP
  }
} = require('clay-resource')

/** @lends listenMix */
function listenMix (Class) {
  /** @lends ListenMixed */
  return class ListenMixed extends Class {

    listenTo ({onCreate, onUpdate, onDestroy, onDrop}) {
      const closeFuncs = [
        onCreate && this.listenToCreate(onCreate),
        onUpdate && this.listenToUpdate(onUpdate),
        onDestroy && this.listenToDestroy(onDestroy),
        onDrop && this.listenToDrop(onDrop),
      ].filter(Boolean)
      return () => closeFuncs.map((close) => close())
    }

    /**
     * Listen to create
     * @param {function} onCreate
     * @returns {function} close function
     */
    listenToCreate (onCreate) {
      return this.listenEvents({
        [ENTITY_CREATE]: ({created}) => onCreate({
          created,
          event: ENTITY_CREATE
        }),
        [ENTITY_CREATE_BULK]: ({created}) => created.map((created) => onCreate({
          created,
          event: ENTITY_CREATE_BULK
        })),
      })
    }

    /**
     * Listen to update
     * @param {function} onUpdate
     * @returns {function} close function
     */
    listenToUpdate (onUpdate) {
      return this.listenEvents({
        [ENTITY_UPDATE]: ({id, updated, old}) => onUpdate({
          id,
          updated,
          event: ENTITY_UPDATE,
          old
        }),
        [ENTITY_UPDATE_BULK]: ({ids, updated, old}) => ids.map((id, i) => onUpdate({
          id,
          updated: updated[i],
          event: ENTITY_UPDATE_BULK,
          old: old[i]
        })),
      })
    }

    /**
     * Listen to destroy
     * @param {function} onDestroy
     * @returns {function} close function
     */
    listenToDestroy (onDestroy) {
      return this.listenEvents({
        [ENTITY_DESTROY]: ({id, destroyed, gone}) => (destroyed > 0) && onDestroy({
          id,
          destroyed,
          gone,
          event: ENTITY_DESTROY
        }),
        [ENTITY_DESTROY_BULK]: ({ids, destroyed, gone}) => ids
          .map((id, i) => ({id: ids[i], destroyed: destroyed[i], gone: gone[i]}))
          .map(({id, destroyed, gone}) => (destroyed > 0) && onDestroy({
            id,
            destroyed,
            gone: gone,
            event: ENTITY_DESTROY_BULK
          })),
      })
    }

    /**
     * Listen to drop
     * @param {function} onDrop
     * @returns {function} close function
     */
    listenToDrop (onDrop) {
      return this.listenEvents({
        [ENTITY_DROP]: ({dropped}) => onDrop(dropped, {
          event: ENTITY_DROP
        })
      })
    }

    listenEvents (handlers) {
      const closeFuncs = []
      for (const [event, handler] of Object.entries(handlers)) {
        this.addListener(event, async function eventListenerWrap (...args) {
          try {
            return await handler(...args)
          } catch (e) {
            console.error(`[the-resource][${this.resourceName}] Error on listener`, e)
            throw e
          }
        })
        closeFuncs.push(
          () => this.removeListener(event, handler)
        )
      }
      return () => closeFuncs.map((close) => close())
    }

  }

}

module.exports = listenMix


