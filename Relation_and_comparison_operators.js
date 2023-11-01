//Relation and comparison operators

//Greater than and greater than equal to 
/*The greater than operator > allows you to check if one value is greater than the
other. It returns true if the first value is greater than the second and false if
the second value is greater.*/
var a = 30;
var b = 20;

if(a > b){
  console.log("a is Greater than b");
}

a = 30;
b = 30;
console.log(a > b); //false
console.log(a >= b); //true

//Lesser than and lesser than equal to
/*The lesser than operator < allows you to check if one value is lesser than the
other. It returns false if the first value is greater than the second and true if
the second value is greater.*/

var x = 30;
var y = 70;

if(x < y){
  console.log("x is lesser than y");
}

x = 30;
y = 30;
console.log(x < y); //false
console.log(x <= y); //true

//Equality
/*The equality operator == lets you test if two values are equal or not. It accepts 2
inputs of any type and outputs true if they are equal and false if the are not
equal.*/
console.log(1 == 1); //true
console.log(1 == true); //true
console.log("Shweta" == "shweta"); //false
console.log(1 == 0); //false


//Inequality Operator
/*The inequality operator != performs the opposite function of the equality operator.
It accepts 2 inputs of any type and outputs false if they are equal and true if the
are not equal.*/
console.log(1 != 1); //false
console.log(1 != true); //false
console.log("Shweta" != "shweta"); //true
console.log(1 != 0); //true


