//Problem 1: Print the numbers from the given starting point till ending point (including both start and end).

var n = 1;
while(n <= 10)
{
  console.log(n);
  n++;
}

//Problem 2: Print the odd numbers from 0 till the given limit
var a = 0;
while(a <= 25)
{
  if(a % 2 != 0)
  {
  console.log(a, "Odd number");
  }
  a++;
}

//Problem 3: Print the sum of all the multiples of 3 from 0 to the given limit
var n = 0; 
var sum = 0;
while(n <=30)
{
 if(n % 3 == 0){
   console.log(n);
   sum = sum+n;
 }
 n++;
}
   console.log("Total sum of multiples of 3 from 0 to 30 are: ",sum);
   
//Problem 4: Print the average of even numbers from 1 to 100 (both included)
var num = 1;
sum = 0;
while(num <= 100)
{
  if(num % 2 == 0)
  {
    console.log(num);
    sum = sum + num;
  }
  num++;
} console.log("avarage of even numbers from 1 to 100 are: ", sum/50)

