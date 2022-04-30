import { isDefined, isNumeric } from "./is.mjs";
export const toCssUnit = (value, unit = "px") => {
  if (!isDefined(value))
    return void 0;
  return isNumeric(value) ? `${value}${unit}` : String(value);
};
