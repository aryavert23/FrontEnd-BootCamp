/*
Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
*/

// With function
function evenOddFunc(number){
    if(number % 2 == 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}
// With arrow function
evenOrOdd = (number) => number % 2 == 0 ? "Even": "Odd";

// *** Output ***
console.log(evenOddFunc(3));
console.log(evenOrOdd(2));