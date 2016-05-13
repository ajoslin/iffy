'use strict'

module.exports = function iffy (condition, onTrue, onFalse) {
  return condition ? onTrue() : (onFalse ? onFalse() : undefined)
}
