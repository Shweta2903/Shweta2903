/*
**Circle Object**

1. Create an object with a key called **radius**
2. The object must have 2 methods,
    1. **circumference:** It will return the circumference of circle, and
    2. **area:** It will return the area of circle
*/

let Obj = {
  radius : 10,
  area : function(){
    return this.radius**2*Math.PI;
  },
  circumference : function(){
    return 2*this.radius*Math.PI;
  }
}
console.log(Obj.area());
console.log(Obj.circumference());

/*
# **Restaurant Dish**

**Part 1:** Given a list of dish data with category and price, **create a list of key-value pairs from the input**
Part 2: From the above data, Write a function i.e getDishesNames(data) that will take the above data as input and print all the dish's names available in the restaurant.
Part 3: From the above data, Write a function i.e getMaxPriceDish(data) that will take the above data as input and return an object of a dish having maximum price.
*/

dish = ["Paratha", "Masala Dosa", "Noodles", "Spring Rolls", "Samosa"]
category = ["North Indian", "South Indian", "Chinese", "Chinese", "North Indian"]
price  = [40, 80, 50, 60, 25]

 let data = [];
 for(let i = 0; i <dish.length; i++){
   let obj = {
     name: dish[i],
     price: price[i],
     category: category[i],
   }
   data.push(obj);
 }
 console.log(data);
 
function getDishesNames(data){
  for(let i = 0; i < data.length; i++){
    console.log(data[i].name);
  }
}
getDishesNames(data);

function getMaxPriceDish(data){
  let max = data[0].price;
  let current;
  for(let i = 0; i < data.length; i++){
    if(data[i].price > max){
      max = data[i].price;
      current = data[i];
    }
  }
  return current;
}
let maxObj = getMaxPriceDish(data);
console.log(maxObj);

/*
# **First Letter Capital**

1. Write a function that takes one parameter **(i.e array of string)** and returns array of string. **For Example : function firstLetterCapital(arr)**
2. The function should perform the given task: Given an array, it will return the array of strings having the first letter of each string will be capital.*/

function convertFirstCapitalLetter(word){

  let lower = 'abcdefghijklmnopqrstuvwxyz';
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  
  let bag = "";
  
  for(let i = 0; i < word.length; i++){
    for(let j = 0; j < lower.length; j++){
      if(word[0] === lower[j] && i === 0){
        bag = bag + upper[j];
      }
    }
    if(i != 0){
      bag = bag + word[i];
    }
  }
  return bag;
}

function firstLetterCapital(arr){
 let array1 = [];
 for(let i = 0; i < arr.length; i++){
   let word = convertFirstCapitalLetter(arr[i]);
   array1.push(word);
 }
   return array1;
}

let array = ["hi", "john", "how", "are", "you"];

let ResultArr = firstLetterCapital(array);
console.log(ResultArr);
