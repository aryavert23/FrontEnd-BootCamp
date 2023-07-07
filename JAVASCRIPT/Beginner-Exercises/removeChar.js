/*
 Create a function that removes the first and last characters of a string. 
 You're given one parameter, the original string. You don't have to worry with strings with less than two characters
*/

function removeChar(str){
    const arr_ch = Array.from(str);
    let new_str = '';
     
    for(let i=1; i<arr_ch.length-1; i++){
       new_str += arr_ch[i]; 
    }
    return new_str;
   };

// *** Output ***
console.log('koke');