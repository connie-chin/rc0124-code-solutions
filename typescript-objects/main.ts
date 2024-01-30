interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

interface Pet {
  name?: string;
  kind?: string;
}

const student: StudentProps = {
  firstName: 'Connie',
  lastName: 'Chin',
  age: 27,
};

const fullName: string = student.firstName + ' ' + student.lastName;
console.log('value of fullName: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'behavioral therapist';
console.log('value of student.livesInIrvine: ', student.livesInIrvine);
console.log(
  'value of student.previousOccupation: ',
  student.previousOccupation
);
console.log('value of student: ', student);

const vehicle: Vehicle = {
  make: 'toyota',
  model: 'CHR',
  year: 2021,
};

vehicle['color'] = 'blue';
console.log("value of vehicle['color']: ", vehicle['color']);
vehicle['isConvertible'] = false;
console.log("value of vehicle['isConvertible']: ", vehicle['isConvertible']);
console.log(vehicle);

const pet: Pet = {
  name: 'georgie',
  kind: 'pug',
};
delete pet.name;
delete pet.kind;
console.log('value of pet: ', pet);
