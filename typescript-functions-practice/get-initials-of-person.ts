/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: Person): string {
  return `${person.firstName.charAt(0)}${person.lastName.charAt(0)}`;
}
