import { isObject } from "./is.mjs";
export function hasOwnProperty(obj, v) {
  if (!isObject(obj))
    return false;
  return Object.prototype.hasOwnProperty.call(obj, v);
}
