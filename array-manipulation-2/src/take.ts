/* exported take */

// if count is less than array length
// new array
// for loop going through array from element 0 up to count
// push elements of array into new array
// return new array
// else
// return array

function take(array: any[], count: number): any[] {
  if (count < array.length) {
    const newArray = [];
    for (let i = 0; i < count; i++) {
      newArray.push(array[i]);
    }
    return newArray;
  } else {
    return array;
  }
}
