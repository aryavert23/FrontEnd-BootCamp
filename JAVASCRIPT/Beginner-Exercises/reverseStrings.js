/*
Complete the solution so that it reverses the string passed into it.
    'world'  =>  'dlrow'
    'word'   =>  'drow'
*/

function solution(str){
    // We convert first the str to an array of char
    const arr_ch = Array.from(str);
    let new_str = '';
    
    for(let i=arr_ch.length-1; i >= 0 ; i--){
        new_str += arr_ch[i];
    }
    return new_str;
  }

// *** Output ***
console.log(solution('world'));