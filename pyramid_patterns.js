// print pyramit pattern

//1 
for(var i = 1; i<=5; i++){
  var star = "";
  for(var j = 1; j <= i; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
// * 
// * * 
// * * * 
// * * * * 
// * * * * * 


//2 
for(var i = 1; i <= 5; i++){
  var num = "";
  for(var j = 1; j <= i; j++){
    num = num + j + " ";
  }
  console.log(num);
}
//Output 
// 1 
// 1 2 
// 1 2 3 
// 1 2 3 4 
// 1 2 3 4 5

//3 
for(var i = 5; i >= 1; i--){
  var star = "";
  for(var j = 1; j <= i; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

//4 
for(var i = 5; i >= 1; i--){
  var num = "";
  for(var j = 1; j <= i; j++){
    num = num + j + " ";
  }
  console.log(num);
}
//Output 
// 1 2 3 4 5 
// 1 2 3 4 
// 1 2 3 
// 1 2 
// 1 

//5 
for(var i = 1; i <= 5; i++){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + " ";
  }
  for(var j = 1; j <= i; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
//     * 
//    * * 
//   * * * 
//  * * * * 
// * * * * * 

//6 
for(var i = 1; i <= 5; i++){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + " ";
  }
  for(var j = 1; j <= i; j++){
    star = star + j + " ";
  }
  console.log(star);
}
//Output 
//     1 
//    1 2 
//   1 2 3 
//  1 2 3 4 
// 1 2 3 4 5 


//7 
for(var i = 5; i >= 1; i--){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + " ";
  }
  for(var j = 1; j <= i; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
// * * * * * 
//  * * * * 
//   * * * 
//    * * 
//     * 

//8 
for(var i = 5; i >= 1; i--){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + " ";
  }
  for(var j = 1; j <= i; j++){
    star = star + j + " ";
  }
  console.log(star);
}
//Output 
// 1 2 3 4 5 
//  1 2 3 4 
//   1 2 3 
//    1 2 
//     1 



//9 
for(var i = 1; i <= 5; i++){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + "  ";
  }
  for(var j = 1; j <= i; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
//         * 
//       * * 
//     * * * 
//   * * * * 
// * * * * *


//10 
for(var i = 5; i >= 1; i--){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + "  ";
  }
  for(var j = 1; j <= i; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
// * * * * * 
//   * * * * 
//     * * * 
//       * * 
//         * 
        
//11
for(var i = 1; i <= 5; i++){
  var star = "";
  for(var j = 1; j <= 5; j++){
    star = star + "* ";
  }
  console.log(star);
}
//Output 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 
// * * * * * 

//12
for(var i = 1; i <= 5; i++){
  var star = "";
  for(var j = 1; j <= 5; j++){
    if(i == 1 || i == 5) {
      star = star + "* ";
    }else if(j == 1 || j == 5){
      star = star + "* ";
    }else {
      star = star + "  ";
    }
  }
  console.log(star);
}
//Output 
// * * * * * 
// *       * 
// *       * 
// *       * 
// * * * * * 

//13
for(var i = 1; i <= 5; i++){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + " ";
  }
  for(var j = 1; j <= i; j++){
    if(j == 1 || j == i){
    star = star + "* ";
    }else if( i == 5){
      star = star + "* ";
    }else{
      star = star + "  ";
    }
  }
  console.log(star);
}
//Output 
//     * 
//    * * 
//   *   * 
//  *     * 
// * * * * *

//14
for(var i = 5; i >= 1; i--){
  var star = "";
  for(var k = 5 - i; k >= 1; k--){
    star = star + " ";
  }
  for(var j = 1; j <= i; j++){
    if(j == 1 || j == i){
    star = star + "* ";
    }else if( i == 5){
      star = star + "* ";
    }else{
      star = star + "  ";
    }
  }
  console.log(star);
}
//Output 
// * * * * * 
//  *     * 
//   *   * 
//    * * 
//     * 
    

//15
var count = 1;
for(var i = 1; i <= 4; i++){
  var num = "";
  for(var j = 1; j <= i; j++){
    num = num + count + " ";
    count++;
  }
  console.log(num);
}
//Output 
// 1 
// 2 3 
// 4 5 6 
// 7 8 9 10 


//16 
for(var i = 0; i <= 4; i++){
  var num = "";

    for(var k = 5 - i; k >= 1; k--){
    num = num + " ";
  }
  for(var j = 0; j <= i; j++){
    if(j == 0 || j == i){
      num = num + 1 + " ";
    }else {
    num = num + i + " ";
    }
  }
  console.log(num);
}
//Output 
//     1 
//    1 1 
//   1 2 1 
//  1 3 3 1 
// 1 4 4 4 1
 

//17
for(var i = 1; i <= 5; i++){
  var num = "";
  for(var j = 1; j <= i; j++){
    num = num + i + " ";
  }
  console.log(num);
}
//Output 
// 1 
// 2 2 
// 3 3 3 
// 4 4 4 4 
// 5 5 5 5 5 

//18 
for(var i = 5; i >= 1; i--){
  var num = "";
  for(var j = 5; j >= i; j--){
    num = num + i + " ";
  }
  console.log(num);
}
//Output 
// 5 
// 4 4 
// 3 3 3 
// 2 2 2 2 
// 1 1 1 1 1 


//19 
for(var i = 5; i >= 1; i--){
  var num = "";
  for(var j = 5; j >= 6 - i; j--){
    num = num + j + " ";
  }
  console.log(num);
}
//Output 
// 5 4 3 2 1 
// 5 4 3 2 
// 5 4 3 
// 5 4 
// 5 

//20 
for(var i = 5; i >= 1; i--){
  var num = "";
  for(var j = 1; j <= i; j++){
    num = num + i + " ";
  }
  console.log(num);
}
//Output 
// 5 5 5 5 5 
// 4 4 4 4 
// 3 3 3 
// 2 2 
// 1 


//21
for(var i = 1; i<=5; i++){
  var star = "";
  for(var j = 1; j <= i; j++){
    star = j + " " + star;
  }
  console.log(star);
}

//Output 
// 1 
// 2 1 
// 3 2 1 
// 4 3 2 1 
// 5 4 3 2 1
