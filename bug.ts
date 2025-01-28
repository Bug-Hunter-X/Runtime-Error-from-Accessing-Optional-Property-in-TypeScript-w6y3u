function printName(person: {firstName: string, lastName?: string}): void {
  console.log(person.firstName + ' ' + person.lastName);
}

printName({firstName: 'John'}); // This will cause a runtime error if lastName is accessed