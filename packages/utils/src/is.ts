export const isObject = (val: any): val is object =>
  toString.call(val) === '[object Object]'

export const isNumber = (val: any): val is number => typeof val === 'number'

export const isNumeric = (val: any): val is number =>
  isNumber(val) || /^-?\d+(\.\d+)?$/.test(val)

export const isDefined = <T>(val: T): val is NonNullable<T> =>
  val !== undefined && val !== null

export const isUndefined = <T>(val: T) => !isDefined(val)
