/* exported defaults */

//CANT USE OBJECT METHODS... SO JUST USE FOR IN LOOP?
//function that modifies target object, by adding keys it does not have from source object.
//

function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
) {
  for (let key in source) {
    if (typeof target[key] === 'undefined') {
      target[key] = source[key];
    }
  }
  return target;
}
