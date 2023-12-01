//Problem 1: Write a custom function that has the same behavior of inbuilt Array Join Function 

let myArr = ['a', 'bb', 'ccc', 'ddddd'];

function arrJoin(a){
  let output = ""; 
  let lastIndex = myArr.length - 1;
  
  if(a == undefined){
    for(let i = 0; i <= lastIndex; i++){
      if(i != lastIndex){
        output = output + myArr[i] + ',' ;
      }else{
        output = output + myArr[i];
      }
    }
  }else{
    for(let i = 0; i <= lastIndex; i++){
      if(i != lastIndex){
        output = output + myArr[i] + a ;
      }else{
        output = output + myArr[i];
      }
    }
  }
  
  return output; // a/bb/ccc/ddddd
}

let s = arrJoin('/');
console.log(s);

console.log(myArr.join('/')); // a/bb/ccc/ddddd


//Problem 2: Write a custom function that has the same behavior of inbuilt Array Last Index Of Function

const animals = ['Dodo', 'Tiger', 'Penguin', 'Dodo', 'Penguin', 'Dodo'];

function lastIndexof(find){

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

let result = lastIndexof('Dodo');
console.log(result);

console.log(animals.lastIndexOf('Dodo')); // 5


//Problem 3: Write a custom function that has the same behavior of inbuilt Array Slice Function

const arr1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];


function arrSlice(start, finish){
 
  let output = [];
  
    if(finish >= 0){
      for(let i = start; i < finish; i++){
        let value = arr1[i];
        output.push(value);
      }
    }else{
      for(let i = start; i < arr1.length; i++){
         let value = arr1[i];
         output.push(value);
      }
    }
  return output;// [ 'camel', 'duck', 'elephant' ]
}

let a = arrSlice(2, 5);
console.log(a);


console.log(arr1.slice(2, 5)); // [ 'camel', 'duck', 'elephant' ]


//Problem 4: Write a custom function that has the same behavior of inbuilt String Substring Function

let string = "consonants";
 
function strTosubstr(m, n){
   
   let str = '';
   
  if(m >= 0 && n >= 0){
    for(let i = m; i < n; i++){
      str = str + string[i];
    }
  }else if(m >= 0){
    for(let i = m; i < string.length; i++){
      str = str + string[i];
    }
  }
   
    return str; //son
}
 
let x = strTosubstr(3, 6);
let y = strTosubstr(2);
 
 console.log(string.substring(3, 6)); //son 
 
 //Problem 5: Write a custom function that has the same behavior of inbuilt Array Includes Function

let pets = ['cat', 'dog', 'bat',];

function ele_include(pet){
  let includes = false; 

  for(let i = 0; i <pets.length; i++){
    if(pets[i] == pet){
      includes = true;
    }
  }
  return includes; // true
}

ele_include('dog'); 

console.log(pets.includes('dog'));