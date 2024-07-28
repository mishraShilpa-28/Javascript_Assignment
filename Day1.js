// Activity 1: Variable Declaration
//Task 1: Declare a variable using var, assign it a number, and log the value to the console.
var a;
a = 10;
console.log(a);
//Task 2: Declare a variable using let, assign it a number, and log the value to the console.
let str = "shilpa";
console.log(str);

//--------------------------------------------------Activity 2: constant declaration----------------------------------------------------
// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
// Const : The const declaration declares block-scoped local variables. The value of a constant can't be changed through reassignment using the assignment operator, but if a constant is an object, its properties can be added, updated, or removed. ***The const declaration creates an immutable reference to a value

const b = false;
console.log(b);

 // --------------------------------------------------Activity 3: Data Type---------------------------------------------------------------
//Task 4: Create variable of different dta types(number, string, boolean, object, array) and log each variable's type using the typeof operator
  
// Number : All JavaScript numbers are stored as decimal numbers (floating point). Numbers can be written with, or without decimals.
let x1 = 10;
let x2 = 10.32;
typeof(x1);
typeof(x2);

// String : A string (or a text string) is a series of characters like "John Doe". Strings are written with quotes. You can use single or double quotes.
 let str1 = "Shilpa Mishra XC60";
 let str2 = 'Shilpa Mishra XC60';
 typeof(str1);
 typeof(str2);

 // Dynamic Types: JavaScript has dynamic types. This means that the same variable can be used to hold different data types.

let x;       // Now x is undefined
 x = 5;       // Now x is a Number
 x = "John";  // Now x is a String
 typeof(x);

 // Boolean : Booleans can only have two values: true or false. **Booleans are often used in conditional testing. 

 let w = 5;
 let y = 5;
 let z = 6;
 typeof(w);
 typeof(y);
 typeof(z);
 //(w == y)       // Returns true
// (w == z)       // Returns false

//  Arrays: avaScript arrays are written with square brackets. Array items are separated by commas.
//**The following code declares (creates) an array called cars, containing three items (car names):

const cars = ["Saab", "Volvo", "BMW"];
typeof(cars);

//  Objects:JavaScript objects are written with curly braces {}. Object properties are written as name:value pairs, separated by commas.

const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};
typeof(person);
//The object (person) in the example above has 4 properties: firstName, lastName, age, and eyeColor.

// Undefined: In JavaScript, a variable without a value, has the value undefined. The type is also undefined.
 
let car;    // Value is undefined, type is undefined

// typeof : The typeof operator returns the data type of a JavaScript variable.
typeof null           // Returns object
typeof "John"         // Returns string
typeof ("John"+"Doe") // Returns string
typeof 3.14           // Returns number
typeof 33             // Returns number
typeof (33 + 66)      // Returns number
typeof true           // Returns boolean
typeof false          // Returns boolean
typeof 1234n          // Returns bigint
typeof Symbol()       // Returns symbol
typeof x              // Returns undefined

//------------------------------------------- Activity 4:  Reassigning Variable-----------------------------------------------------------
// Task 5: Declare a variable using let, assign it an initail value, reassign a new value and log value to the console.

let c ;
c = 24;
console.log(c);
c = "shilpa";
console.log(c);

//--------------------------------------------Activity 5: Understanding const-------------------------------------------------------------
//Task 6: Try to reassigning a variable declared with const and observe the error.

const v = 10;
console.log(v);
v = 'shilpa ji';
console.log(v);

// TypeError: invalid assignment to const "x"
//The JavaScript exception "invalid assignment to const" occurs when it was attempted to alter a constant value. JavaScript const declarations can't be re-assigned or redeclared.
