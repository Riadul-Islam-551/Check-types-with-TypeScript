import z from "zod";

//Zod validation
const UserSchema = z.object({
  name: z.string().min(3).max(20),
  userName: z.string(),
  email: z.email().regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/),
  passwordForm: z
    .object({
      password: z
        .string()
        .regex(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
        ),
      confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
      error: "password not match",
      path: ["confirmPassword"],
    }),
  age: z.number(),
  isActive: z.boolean(),
  birthDate: z.date(),
  phone: z.string().regex(/^(?:\+88|88)?01[3-9]\d{8}$/),
  gender: z.enum(["male", "female"]),
  hobbies: z.array(z.string()),
  address: z.object({
    city: z.string(),
    country: z.string(),
    holding: z.string(),
  }),
  profile: z.url(),
  website: z.url(),
  favoriteColor: z.string(),
  experience: z.number(),
  skills: z.array(z.string()),
  role: z.enum(["student", "graduate", "jobHolder"]),
  about: z.string().refine((val) => val.length <= 150, {
    error: "about section must be in 150 character",
  }),
});

type UserType = z.infer<typeof UserSchema>;

const userData: UserType = {
  name: "Riadul",
  userName: "riadul123",
  email: "riadul@gmail.com",
  passwordForm: {
    password: "Ri123456uL%",
    confirmPassword: "Ri123456uL%",
  },
  age: 25,
  isActive: true,
  birthDate: new Date("2001-09-03"),
  phone: "01403780263",
  gender: "male",
  hobbies: ["Reading", "Cycling", "Traveling"],
  address: {
    city: "Dhaka",
    country: "Bangladesh",
    holding: "2/1",
  },
  profile: "https://www.npmjs.com/package/zod",
  website: "https://www.npmjs.com/package/zod",
  favoriteColor: "#ff2523",
  experience: 7,
  skills: ["TypeScript", "React", "Node.js"],
  role: "student",
  about: "I am Riadul Islam and I am 24 years old",
};

const result = UserSchema.safeParse(userData);

// console.log(result);

if (result.success) {
  console.log(result.data);
} else {
  console.log(result.error);
}

//Primitive Data Type: String
function greeting(person: string): string {
  return `Hello ${person}, Welcome to TypeScript`;
}

// console.log(greeting("Riadul"));

//Primitive Data Type: Number
function add(a: number, b: number): number {
  return a + b;
}

// console.log("The addition of two number is = ", add(5, 6));

//Primitive data type
const person2: { name: string; age: number; isActive: boolean } = {
  name: "Riadul",
  age: 23,
  isActive: true,
};

// console.log("Person Details", person2);

//non-primitive data type:Array
const number1: number[] = [1, 5, 7, 3, 9];
function pushInArray(a: number): number[] {
  number1.push(a);
  return number1;
}

// console.log("Array", pushInArray(21));

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

// console.log(`My name is ${person3.name}. I live in ${person3.address.city}.`);

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

// console.log(`${person4.name} activeness : ${person4.isActive}`);

//generics
function getTheFirstElement<T>(arr: T[]): string {
  return `the first element is ${arr[0]}`;
}

// console.log(getTheFirstElement([2, 3, 4]));
// console.log(getTheFirstElement(["Rahim", "Karim", "Barkat"]));
