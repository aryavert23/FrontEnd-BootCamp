/*
You get an array of numbers, return the sum of all of the positives ones.
Example [1,-4,7,12] => 1 + 7 + 12 = 20
Note: if there is nothing to sum, the sum is default to 0.
*/

// With function
function positiveSum(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++){
      // Check if arr element is positive
      if(arr[i] > 0){
         sum += arr[i];
      }
    }
    // If sum is greater than 0, it means that the array had positive elements
    if(sum > 0){
      return sum;
    }
    // In the other case, it had all negative elements or it was empty
    else{
      return 0;
    }
  }

// *** Ouput ***
console.log(positiveSum([1,2,3,4]));
console.log(positiveSum([1,-1,3,-2]));
console.log(positiveSum([-1,-2,-3]));
console.log(positiveSum([]));