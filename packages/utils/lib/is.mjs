export const isObject = (val) => toString.call(val) === "[object Object]";
export const isNumber = (val) => typeof val === "number";
export const isNumeric = (val) => isNumber(val) || /^-?\d+(\.\d+)?$/.test(val);
export const isDefined = (val) => val !== void 0 && val !== null;
export const isUndefined = (val) => !isDefined(val);
