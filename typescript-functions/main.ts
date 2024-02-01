function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('convertMinutesToSeconds(5): ', convertMinutesToSeconds(5));
console.log('convertMinutesToSeconds(10): ', convertMinutesToSeconds(10));

function greet(name: string): string {
  return 'Hey ' + name + '!';
}
console.log(greet('Spongebob'));
console.log(greet('Beavis'));

const getArea: any = (width: number, height: number): number => {
  return width * height;
};
console.log(getArea(17, 42));
console.log(getArea(22, 38));

// arrow function w object as parameter with firstname and lastname properties.. returning firstname
interface fullName {
  firstName: string;
  lastName: string;
}
const getFirstName: any = (person: fullName): string => {
  return person.firstName;
};
console.log(getFirstName({ firstName: 'Lelouche', lastName: 'Lamperouge' }));
console.log(getFirstName({ firstName: 'John', lastName: 'Henry' }));

const getLastElement: any = (array: any): any => {
  return array[array.length - 1];
};

console.log(getLastElement(['propane', 'and', 'propane', 'accessories']));
console.log(getLastElement([true, true, false, true]));

function callOtherFunction(otherFunction: any, params: unknown): any {
  return otherFunction(params);
}
console.log(callOtherFunction(convertMinutesToSeconds, 10));
console.log(callOtherFunction(getLastElement, ['hello', 'goodbye', 'Aloha']));
