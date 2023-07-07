/*
Return the average of the given array rounded down to its nearest integer.
The array will never be empty.
*/

function getAverage(marks){
    let sum = 0;
    for(let i = 0; i < marks.length; i++) {
      sum += marks[i];
    }
    return Math.floor(sum / marks.length);
}

// *** Output ***
console.log(getAverage([1,2,3,4,5]));