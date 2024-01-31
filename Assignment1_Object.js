// Problem 1 : Given an array find the unique items in the array

let arr = ["A", "B", "C", "B", "D", "A", "D", "B"];

let unique = {};

  for(let i = 0; i < arr.length; i++)
    {
      unique[arr[i]] = true;
    }

let result = Object.keys(unique);
console.log(result); //[ 'A', 'B', 'C', 'D' ]



// Problem 2 : Given a string print, the number of times each character appears

let name = "moonoon";

let char = {};

for(let i = 0; i < name.length; i++){

  if(char[name[i]] >= 1)
  {
      char[name[i]]++; 
    }
    else
    {
      char[name[i]] = 1;
    }
  }

console.log(char); //{ m: 1, o: 4, n: 2 }
