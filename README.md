# FrontEnd BootCamp Course
Just learning the basics of Front End development (JS, HTML, CSS)

<img align="left" width="35" height="35" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">

## JavaScript
#### 1. Variables
  - `const`: for variables that are not expected to change
  - `let`: for variables that are expected to change
#### 2. Operators
#### 3. Functions, Conditionals & Loops
#### 4. Built-in JavaScript methods
#### 5. Callback functions
  - A callback function is a function that is passed as an argument to another function
  ```
  const myArray = [2,4,5];
  const callback = (item) => (item * 2);
  myArray.map(callback); // Once the map function has iterated the array, the callback returns the value multiplied by 2
  ```
#### 6. JavaScript primitives
#### 7. JavaScript dates
#### 8. Regular expressions
  - A regular expresion `RegExp` is used to match a text with a certain pattern
  ```
  const myStr = "hello world, 2023 @ more of a string";
  /^[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(myStr); // We matched the exact pattern of myStr
  ```
#### 9. JavaScript String methods
  - Most used String methods
  1) `replaceAll()`: returns a string with all matches of a `pattern` replaced by a `replacement` (in this case, the `pattern` is a `RegExp`):
  ```
  cons myStr = "My Dog jumped on the bed. My dog is a bad Dog";
  const newStr = myStr.replaceAll(/Dd{1}og)/g, "cat"); // We replace cat for all Dog/dog instances
  ```
  2) `toUpperCase()`: returns the string value converted to uppercase
  4) `substring()`: returns a specific substring from a string within a specified range
  6) `trim()`: removes the whitespaces around the string and returns a new string
  ```
  const myStr = "  Hello World!  ";
  myStr.trim(); // Expected output: "Hello World!"
  ```
  8) `match()`: retrieves the result of matching a string against a `RegExp`
  ```
  const myStr = "I'm learning JavaScript";
  const found = myStr.match(/[A-Z]g/); // Expected output: Array["I","J","S"]
  ```
#### 10. JavaScript Array methods
  - Most used Array methods
  1) `push()`,`pop()`,`shift()`,`unshift()`
  ```
  const myArray = [1,2,3,4,5]
  myArray.pop();       // Pops the element '5' out of the array
  myArray.push(6);     // Pushes the element '6' at the end of the array
  myArray.shift();     // Removes the first element which is '1'
  myArray.unshift(0);  // Adds the element '0' at the beginning of the array
  ```
  2) `slice()`: returns the portion of an array from `start` to `end`
  ```
  const myArray = [1,2,3,4,5,6];
  const myCopyArray = myArray.slice(3); // Expected output: [4.5.6]
  ```
  3) `splice()`: changes the content of an array by removing or replacing existing elements and/or adding new elements in place
  4) `findIndex()`: returns the index of the first element that satisfies the callback function given as a parameter
  ```
  const myArray = [1,2,12,33];
  const callback = (element) => element > 13;
  myArray.findIndex(callback); // Expected output: 3
  ```
  5) `map()`: creates a new array with the outputs of calling the callback function on every element of the array
  6) `forEach()`: executes the callback function for each element of the array
  ```
  const myArray = ['a','b','c'];
  myArray.forEach((elem) => console.log(elem)); // Expected output: 'a', 'b', 'c'
  ```
  7) `includes()`: determines whether an array includes the given element returning `false` or `true`
  8) `filter()`: creates a portion of the array filtered by the given function
  ```
  const myArray = ['tree', 'sun', 'dog', 'sky'];
  const newArray = myArray.filter((elem) => elem.length == 3); // Expected output: Array['sun', 'dog', 'sky']
  ```
  10) `reduce()`: 
#### 11. Math utilities

<br>[Course by freeCodeCamp.org](https://youtu.be/zJSY8tbf_ys) 
