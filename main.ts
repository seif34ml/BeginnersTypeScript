interface Person {
    firstName: string;
    lastName: string;
    age: number;
    address:string;
    id:string;
  }
  const person1: Person = {
    firstName: "Jane",
    age: 25,
    lastName:"seif",
    address:'121 m',
    id:'123'


  };
  // Using Partial to create a type with optional properties
  type PartialPerson = Partial<Person>;
  
  // Example usage
  const partialPerson: PartialPerson = {
    firstName: "John",
    age:25
    // lastName and age are optional in PartialPerson
  };
  
  // Function accepting Partial<Person> as an argument
  function printPerson(person: PartialPerson) {
      let returnedPerson={...person1,...person}
   console.log(returnedPerson);
    console.log(`First Name: ${returnedPerson.firstName || 'N/A'}`);
    console.log(`Last Name: ${returnedPerson.lastName || 'N/A'}`);
    console.log(`Age: ${returnedPerson.age || 'N/A'}`);
  }
  
  // Example calling the function with a partial person object
  const partialPerson2: PartialPerson = {
    firstName: "Jane",
    age: 25,
  };
  
  printPerson(partialPerson2);



/////////////////////////////////////////////////////////////

// Exclude certain properties from an object
// type ExcludedPerson<T,k extends keyof T>={
//     [P in Exclude<keyof T,k>]:T[P]
// } 

// type ExtractPerson<T,K extends keyof T>={
//     [P in K]:T[P]
// }

type excludePerson<T, K extends keyof T >={
    [P in Exclude<keyof T,K>]:T[P]
}
type includePerson<T, K extends keyof T >={
    [P in K]:T[P]
}

const pExcluded:excludePerson<Person,'address'>={
    firstName:'s',
    age: 35,
    id:'123',
    lastName:"seif",
}


const pIncluded:includePerson<Person,'firstName'>={
    firstName:person1.firstName, 
}


console.log(pExcluded);
console.log(pIncluded);


/////////////////////////////////////////////////////////////////////////////

type MyPerson = {
    name: string;
    age: number;
    address: string;
  };
  
  type PersonNameAndAge = Pick<MyPerson, 'name' | 'age'>;
     // Resulting type: { name: string; age: number; }
    // same as extract

  type PersonWithoutNameAndAge = Pick<MyPerson, 'name' | 'age'>;
  // Resulting type: { address: string;}
 // same as exclude


 /////////////////////////////////////////////////////////////////////////////////////////////

//  Record is useful when you want to define a type for objects 
//  with known keys and a consistent value type. It provides a way to ensure that the structure
//  of your objects follows a specific pattern.

//Here's the basic syntax of Record:

type NumberDictionary = Record<string, number>;

// Example usage
const myNumbers: NumberDictionary = {
  one: 1,
  two: 2,
  three: 3,
};

// Define a type for a dictionary where keys are string literals and values are boolean
type BooleanFlags = Record<'isLogged' | 'isAdmin' | 'isActive', boolean>;

// Example usage
const userFlags: BooleanFlags = {
  isLogged: true,
  isAdmin: false,
  isActive: true,
};


console.log(userFlags);



