/* exported getValue */

// return the value in object at the key property

function getValue(object: Record<string, unknown>, key: string): any {
  return object[key];
}
