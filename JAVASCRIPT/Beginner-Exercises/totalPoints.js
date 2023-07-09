/*
Our team's match results are recorded in a collection of strings.
Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.

For example: ["3:1", "2:2", "0:1", ...]

Points are awarded for each match as follows:
    if x > y: 3 points (win)
    if x < y: 0 points (loss)
    if x = y: 1 point (tie)

We need to write a function that takes this collection and returns the number of points our team (x).
*/

function points(games) {
    let sum = 0;
    for(let i=0; i<games.length;i++){
      const parts = games[i].split(":");
      
      if(parts[0] > parts[1]){
        sum += 3;
      }
      else if (parts[0] == parts[1]){
        sum += 1;  
      }
    }
    return sum;
  }

// *** Output ***
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));