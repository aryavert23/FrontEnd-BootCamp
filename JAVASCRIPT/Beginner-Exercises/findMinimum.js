/*
Given an array of integers your solution should find the smallest integer.

For example:
    Given [34, 15, 88, 2] your solution will return 2
    Given [34, -345, -1, 100] your solution will return -345
*/


function findSmallestInt(args) {
    let min = args[0];
    for(let i=1; i<args.length; i++){
        if(args[i]<min){
            min = args[i];
        } 
    }
    return min;
}
  
// *** Output ***
console.log(findSmallestInt([2,45,67,1,33,-5]));