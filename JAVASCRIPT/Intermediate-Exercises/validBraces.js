/*
Write a function that takes a string of braces, and determines if the order of the braces is valid. 
It should return true if the string is valid, and false if it's invalid.
All input strings will be nonempty, and will only consist of parentheses, brackets and curly braces: ()[]{}.

For example:
    "(){}[]"   =>  True
    "([{}])"   =>  True
    "(}"       =>  False
    "[(])"     =>  False
    "[({})](]" =>  False
*/

function validBraces(braces){
    const validPairs = {"(":")", "{":"}", "[":"]"}; // Opening braces as keys and closing braces as values
    const stack = [];
    
    for(let ch of braces){
      // Check if there are keys in the string
      if(validPairs[ch]){ 
        // We push only the opening braces
        stack.push(validPairs[ch]);
      }
      // Check if the closing brace matches with the opening brace in the TOS
      else if(stack.length > 0 && stack[stack.length-1] == ch){
        // We pop from the stack since they are a valid pair
        stack.pop();
      }
      else{
        return false;
      }
    }
     // If our stack is empty, it means all pairs were valid
      return stack.length == 0;
}

// *** Output ***
console.log(validBraces("[(){]"));
console.log(validBraces(["[]{]{{[]"]));
console.log(validBraces("[{}]"));