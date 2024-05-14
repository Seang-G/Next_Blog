export function deepCopy(obj: any): any {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  const copy: any = Array.isArray(obj) ? [] : {};
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }
  return copy;
}