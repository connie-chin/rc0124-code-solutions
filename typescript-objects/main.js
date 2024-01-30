'use strict';
let student = {
  firstName: 'Connie',
  lastName: 'Chin',
  age: 27,
};
let fullName = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);
student.livesInIrvine = false;
student.previousOccupation = 'behavioral therapist';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);
let vehicle = {
  make: 'toyota',
  model: 'CHR',
  year: 2021,
};
vehicle['color'] = 'blue';
console.log("value of vehicle['color']: ", vehicle['color']);
vehicle['isConvertible'] = false;
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log(vehicle);
let pet = {
  name: 'georgie',
  kind: 'pug',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
