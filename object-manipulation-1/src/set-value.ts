/* exported setValue */

// sets the property of the object specified by 'key' to the new 'value'
// returns the updated object after setting the new value

function setValue(
  object: Record<string, unknown>,
  key: string,
  value: any
): any {
  object[key] = value;
  return object;
}
