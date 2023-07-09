/*
Given an array of integers, return a new array with each value doubled.

For example:
[1, 2, 3] --> [2, 4, 6]
*/

function maps(x){
    let new_arr = new Array(x.length);
    for(let i=0; i<x.length; i++){
      new_arr[i] = x[i] * 2;
    }
    return new_arr;
}

// With arrow function
function arrMaps(x){
    return x.map(n => n*2);
}

// *** Output ***
console.log(maps([1,2,3]));