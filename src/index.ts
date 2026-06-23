//Primitive Data Type: String
function greeting(person: string): string {
  return `Hello ${person}, Welcome to TypeScript`;
}

console.log(greeting("Riadul"));

//Primitive Data Type: Number
function add(a: number, b: number): number {
  return a + b;
}

console.log("The addition of two number is = ", add(5, 6));

//Primitive data type
const person2: { name: string; age: number; isActive: boolean } = {
  name: "Riadul",
  age: 23,
  isActive: true,
};

console.log("Person Details", person2);

//non-primitive data type:Array
const number1: number[] = [1, 5, 7, 3, 9];
function pushInArray(a: number): number[] {
  number1.push(a);
  return number1;
}

console.log("Array", pushInArray(21));

//type
type User = {
  name: string;
  age: number;
  address: {
    city: string;
  };
};

const person3: User = {
  name: "Riadul Islam",
  age: 23,
  address: {
    city: "Dhaka",
  },
};

console.log(`My name is ${person3.name}. I live in ${person3.address.city}.`);

//interface
interface newUser extends User {
  isActive: boolean;
  readonly id: string;
}

const person4: newUser = {
  name: "Saiful",
  age: 25,
  address: {
    city: "Khulna",
  },
  isActive: true,
  id: "per1234",
};

console.log(`${person4.name} activeness : ${person4.isActive}`);

//generics
function getTheFirstElement<T>(arr: T[]): string {
  return `the first element is ${arr[0]}`;
}

console.log(getTheFirstElement([2, 3, 4]));
console.log(getTheFirstElement(["Rahim", "Karim", "Barkat"]));
