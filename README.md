# FrontEnd-BootCamp
My learning process of Front End Development

<img align="left" width="35" height="35" src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png">

## JavaScript
#### 1. Variables
  - _const_: for variables that are not expected to change
  - _let_: for variables that are expected to change
2. Operators
3. Functions, Conditionals & Loops
4. Built-in JavaScript methods
5. Callback functions
  - A callback function is a function that is passed as an argument to another function
  <br>For example:
  ```
  const myArray = [2,4,5];
  const callback = (item) => (item * 2);
  myArray.map(callback); // Once the map function has iterated the array, the callback returns the value multiplied by 2
  ```
6. JavaScript primitives
7. JavaScript dates
8. Regular expressions
  - A regular expresion `RegExp` is used to match a text with a certain pattern
  <br>For example:
  ```
  const myStr = "hello world, 2023 @ more of a string";
  /^[a-z ]+,[0-9 ]+@[a-z ]+$/.exec(myStr); // We matched the exact pattern of myStr
  ```
9. JavaScript String methods
10. JavaScript Array methods
11. Math utilities

<br>[Course by freeCodeCamp.org](https://youtu.be/zJSY8tbf_ys) 
