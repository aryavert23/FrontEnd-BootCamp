/*
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels.

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    const vowels = ['a','e','i','o','u'];
    const arr_ch = Array.from(str);
    let sum = 0;
    
    for(let i=0; i < arr_ch.length; i++){
      for(let j=0; j < vowels.length; j++ ){
        if(arr_ch[i] == vowels[j]){
          sum++;
        }
      }
    }
    return sum;
}

// *** Output ***
console.log(getCount("abracadabra"));