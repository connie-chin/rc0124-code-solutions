/* exported omit */

//CANT USE OBJECT METHODS... SO JUST USE FOR IN LOOP?
//function that takes an object(source) strings(keys) as parameters. returns a new object w keys removed
//new empty object
//loop through keys in source
  //if keys are not found in source,
    //push key and value into new object
  //return new object

function omit(source: Record<string, unknown>, keys: string[]): any {
  let newObject: any = {};
  for (const propNames in source) {
    if (!keys.includes(propNames)) {
      newObject[propNames] = source[propNames];
    }
  }
  return newObject;
}
