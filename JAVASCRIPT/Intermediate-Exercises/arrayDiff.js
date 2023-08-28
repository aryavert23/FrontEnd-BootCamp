/*
Implement a difference function, which subtracts one list from another and returns the result.
It should remove all values from list a, which are present in list b keeping their order.

Example:
    arrayDiff([1,2],[1]) == [2]
    arrayDiff([1,2,2,2,3],[2]) == [1,3]
*/

function arrayDiff(a, b) {
    let newA = [];
    
    if(a.length === 0){
      return [];
    }
    else if(b.length === 0){
      return a;
    }
    
    a.forEach((elem) => {
      if(!(b.includes(elem))){
        newA.push(elem);
      }
    });
    
    return newA;
  }

// *** Output ***
console.log(arrayDiff([1,2,3,4],[2]));