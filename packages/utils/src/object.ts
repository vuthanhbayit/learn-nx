import { isObject } from './is'

export function hasOwnProperty<T>(obj: T, v: PropertyKey) {
  if (!isObject(obj)) return false

  return Object.prototype.hasOwnProperty.call(obj, v)
}
