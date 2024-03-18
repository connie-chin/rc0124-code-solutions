"use strict";
/* exported pick */
//CANT USE OBJECT METHODS... SO JUST USE FOR IN LOOP?
//function that takes an object(source) strings(keys) as parameters. returns a new object w keys as the keys
//new empty object
//loop through keys in source
//if keys are found in source,
//push key and value into new object
//return new object
function pick(source, keys) {
    let newObject = {};
    for (let i = 0; i < keys.length; i++) { //going through keys array
        let propName = keys[i]; //assign values from keys at each index to propName
        if (source[propName] !== undefined) {
            //if the object we passed as parameter aka source at propName is undefined
            newObject[propName] = source[propName]; //source at propName, is being pushed into the new object at propName
        }
    }
    return newObject;
}
//opposite logic of defaults, same syntax
//source.hasOwnProperty(propName) && source[propName] === true
