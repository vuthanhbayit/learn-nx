import { isDefined, isNumeric } from './is'

/**
 * @param value
 * @param unit
 * @return {string}
 * @example toCssUnit(10) => '10px'
 * @example toCssUnit('20.2') => '20.2px'
 * @example toCssUnit('5rem') => '5rem'
 */
export const toCssUnit = (value?: string | number, unit = 'px') => {
  if (!isDefined(value)) return undefined

  return isNumeric(value) ? `${value}${unit}` : String(value)
}
