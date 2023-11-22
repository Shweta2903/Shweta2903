//Array - A single variable can store multiple values. 

var fruits =  ["Apple", "Mango", "Orange", "Pineapple", "Grapes", "Watermelon"];

var firstElement = fruits[0];
var lastElement = fruits[fruits.length - 1];
console.log(fruits);
console.log(fruits.length);
console.log(firstElement, lastElement);

//Problem 1 : Given an array print the position (starting with 1) and the element in a single line.


var num_of_fruits = fruits.length; 
for(var i = 0; i < num_of_fruits; i++){
  console.log(i+1, fruits[i]);
}

//Problem 2 : Given a character in lower case print the upper case character

var char = "n";

var lower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for(var i = 0; i < lower.length; i++){
  if(char == lower[i]){
    console.log(upper[i]);
  }
}

//Problem 3 : Given an array of numbers find the average of all the even numbers.

var num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

var sum = 0;
var count = 0;

for(var i = 0; i < num.length; i++){
  if(num[i] % 2 == 0){
    count++;
    sum = sum + num[i]; 
  }
}
console.log("Average of all the even numbers is:", sum/count);

//Problem 4: Find the maximum number in the given array. 

var arr = [29, -40, 51, -32, 69, -99, -21, 10, -47, 75, 50, -16, 35, 46];

var max_num = -Infinity;

for(var i = 0; i < arr.length; i++){
  if(arr[i] > max_num){
    max_num = arr[i];
  }
}
console.log(max_num);










