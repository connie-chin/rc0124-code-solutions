'use strict';
/* exported toObject */
function toObject(keyValuePair) {
  let key = keyValuePair[0];
  let value = keyValuePair[1];
  const object = { [key]: value };
  return object;
}
