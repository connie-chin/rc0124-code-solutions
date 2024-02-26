// a function that returns an object
// total property = start + end;
// odds property = odd integers from start to end;
// evens property evens from start to end;
// range property = array of integers from start to end
// average = average of all integers from start to end
// putting these into the object, returning object

interface NewObject {
  total?: number;
  odds?: number[];
  evens?: number[];
  range?: number[];
  average?: number;
}
function getRangeReport(start: number, end: number): any {
  const newObject: NewObject = {};
  newObject.total = 0;
  for (let i = start; i <= end; i++) {
    newObject.total += i;
  }
  newObject.odds = [];
  newObject.evens = [];
  for (let i = start; i <= end; i++) {
    if (i % 2 !== 0) {
      newObject.odds.push(i);
    } else {
      newObject.evens.push(i);
    }
  }
  newObject.range = [];
  for (let i = start; i <= end; i++) {
    newObject.range.push(i);
  }
  newObject.average = (start + end) / 2;
  return newObject;
}
console.log(getRangeReport(1, 10));
console.log(getRangeReport(1, 5));
