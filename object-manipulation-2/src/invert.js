"use strict";
/* exported invert */
//CANT USE OBJECT METHODS... SO JUST USE FOR IN LOOP?
//function that takes object as parameter, and switches the values from keys(name) and keyname(values)
//new empty object
//for key in object
//push into new object but as key values
//for key values in object
//push into new object but as keys
function invert(source) {
    let newObject = {};
    for (let key in source) {
        let newValues = key;
        let newPropNames = source[key];
        newObject[newPropNames] = newValues;
    }
    return newObject;
}
