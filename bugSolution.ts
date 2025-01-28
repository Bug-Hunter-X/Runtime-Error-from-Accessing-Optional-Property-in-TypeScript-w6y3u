function printName(person: {firstName: string, lastName?: string}): void {
  const lastName = person.lastName || ''; // Handle the case where lastName is undefined
  console.log(person.firstName + ' ' + lastName);
}

printName({firstName: 'John'}); // This will now work correctly
printName({firstName: 'Jane', lastName: 'Doe'}); // This also works correctly