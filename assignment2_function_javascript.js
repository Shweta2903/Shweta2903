//Problem 1: Write a custom function that has the same behavior of inbuilt Array Join Function 

let myArr = ['a', 'bb', 'ccc', 'ddddd'];

function arrJoin(myArr){
  let output = ""; 
  let lastIndex = myArr.length - 1;
  
  for(let i = 0; i <= lastIndex; i++){
    if(i != lastIndex){
      output = output + myArr[i] + "/" ;
    }else{
      output = output + myArr[i];
    }
  }
  return output; // a/bb/ccc/ddddd
}

arrJoin(myArr);

console.log(myArr.join('/')); // a/bb/ccc/ddddd


//Problem 2: Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Penguin', 'Dodo'];

function lastIndex(animals){
  let find = 'Dodo';
  let lastIndex_ofarr = animals.length - 1; 
  let output = null;
  
  for(let i = lastIndex_ofarr; i >= 0; i--){
    if(animals[i] == find){
      output = i;
      break;
    }
  }
  return output; // 5
}

lastIndex(animals);

console.log(animals.lastIndexOf('Dodo')); // 5


//Problem 3: Write a custom function that has the same behavior of inbuilt Array Slice Function

const arr1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];


function arrSlice(arr){
  let start = 2;
  let finish = arr.length;
  let output = [];
  
  for(let i = start; i < finish; i++){
    let value = arr[i];
    output.push(value);
  }
  
  return output;// [ 'camel', 'duck', 'elephant' ]
}

arrSlice(arr1);

console.log(arr1.slice(2, 5)); // [ 'camel', 'duck', 'elephant' ]


//Problem 4: Write a custom function that has the same behavior of inbuilt String Substring Function

let string = "consonants";
 
function strTosubstr(string){
   let first = 3;
   let last = 6;
   let str = '';
   
   for(let i = first; i < last; i++){
     str = str + string[i];
   }
    return str; //son
}
 
strTosubstr(string);

 
 console.log(string.substring(3 ,6)); //son 
 
 //Problem 5: Write a custom function that has the same behavior of inbuilt Array Includes Function

let pets = ['cat', 'dog', 'bat',];

function ele_include(pets){
  let includes = false; 

  for(let i = 0; i <pets.length; i++){
    if(pets[i] == 'dog'){
      includes = true;
    }
  }
  return includes; // true
}

ele_include(pets);

console.log(pets.includes('dog'));