// Given a square matrix print both the diagonals

let arr = [];
arr.push([1, 2, 3]);
arr.push([4, 5, 6]);
arr.push([7, 8, 9]);

let leftDiagonal = [];
let rightDiagonal = [];

for(let i = 0; i < arr.length; i++){
  for(let j = i; j <= i; j++){
    leftDiagonal.push(arr[i][j]);
  }
}
console.log(leftDiagonal); // [ 1, 5, 9 ]

for(let i = 0; i < arr.length; i++){
  for(let j = arr.length-1-i; j >= 0; j--){
    rightDiagonal.push(arr[i][j]);
    break;
  }
}
console.log(rightDiagonal); //[ 3, 5, 7 ]

//Given a matrix print it in the form of a snake
let arr1 = [];
arr1.push([1, 2, 3, 4]);
arr1.push([4, 5, 6, 7]);
arr1.push([7, 8, 9, 10]);

let resultArr = [];
for(let i = 0; i < arr1[0].length; i++){
  if(i%2 == 0){
    for(let j = 0; j < arr1.length; j++){
      resultArr.push(arr1[j][i]);
      console.log(arr1[j][i]);
    }
  } else {
    for(let k = arr1.length - 1; k >= 0; k--){
      console.log(arr1[k][i]);
      resultArr.push(arr1[k][i]);
    }
  }
}
console.log(resultArr); //[  1, 4, 7, 8,  5, 2, 3, 6, 9, 10, 7, 4 ]

