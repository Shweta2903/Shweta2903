//Problem 1 : You are given a number N you need to find sum of all the even numbers which are less than or equal to N.

var number = 40;
var sum = 0;

for(var i = 1; i <= number; i++)
{
  if(i % 2 == 0)
  {
    sum = sum + i;
  }
}

console.log(sum);

//Problem 2: You are given a number N , derive variable x which is floor of a number you get when 24 is divided by N.
//In case x is 0, print "Too Low"
//In case it is not possible to generate valid number, print "-1"
//All other case, print value of x 

var number = 9;

var x = Math.floor(24/number);

if(x == 0)
{
  console.log("Too Low");
}else if(number == 0)
{
  console.log("-1")
}else{
  console.log(x);
}

//Problem 3: You are given a number N, for all number in range [1,N], including N you have to print a string as per following rules:
//print FizzBuzz if number is multiple of both 3 & 5.
//print Buzz if number is multiple of 5 only.
//print Fizz if number is multiple of 3 only.
//Else in other case print value to N. 

var N = 100;

for(var i = 1; i <= N; i++)
{
  if(i % 3 == 0 && i % 5 == 0){
    console.log("FizzBuzz");
  }else if(i % 5 == 0)
  {
    console.log("Buzz");
  }else if(i % 3 == 0)
  {
    console.log("Fizz");
  }else
  {
    console.log(i);
  }
}

//Problem 4: Electricity consumption is measured via slab rates of particuler wattage capacity,
//which is as follow:
//first 0 - 50 unit consumption = 3 Rs/unit
//next 51 - 150 unit consumption = 5 Rs/unit
//more than 150 unit consumption = 10 Rs/unit
//Apart from slab rates, a fixed charges of Rs. 80 is also added to every bill
//You are given total amount of bill N,you need to find to total unit consumed.

var bill_amount = 2710;

var units = 0;

var bill = bill_amount - 80 ;
if(bill <= 150) 
{
  units = bill/3 ; 
}else if(bill <= 650)
{
  units = 50 + (bill - 150)/5 ;
}else
{
  units = 50 + 100 + (bill - 150 - 500)/10 ;
}

console.log(units, "units consumed");


//Problem 5: Given an array, which has N integers. 
//you need to print the smallest and largest element present in the array each on a new lines.
 
var n = [10, 3, 95, -5, 59, 63, 0, 45];

var smallest = Infinity;
var largest = -Infinity;

for(var i = 0; i < n.length; i++)
{
  if(n[i] > largest){
    largest = n[i];
  }
  if(n[i] < smallest){
    smallest = n[i]; 
  }
}

console.log(largest, "largest");
console.log(smallest, "smallest");


//Problem 6: You are given an array of N integers, You need to print yes if 42 is present in array else print no.

var n = [20, 30, 5, 50, 90, 0];

var is_present = false; 
for(var i = 0; i < n.length; i++)
{
  if(n[i] == 42){
    is_present = true;
    break;
  }
 
}
if(is_present){
  console.log("Yes");
}else{
  console.log("No");
}


//Problem 7: You are given an array of N integers,you need to print Odd if sum of all the odd number present in array is more than sum of all the even number present in array, else print Even. 

var arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];

var odd_sum = 0;
var even_sum = 0;

for(var i = 0; i < arr.length; i++){
  if(arr[i] % 2 != 0){
    odd_sum = odd_sum + arr[i];
  }else{
    even_sum = even_sum + arr[i];
  }
}

if(odd_sum > even_sum){
  console.log("ODD")
}else{
  console.log("EVEN");
}


//Problem 8: You are given an array of N integers, Write a program to print the ceil of avarage of integers present in the array. 

var arr = [5, 10, 15, 20, 25, 30, 35, 40, 45, 50];

var sum = 0;
var number_of_integers = arr.length; 

for(var i = 0; i < number_of_integers; i++){
  sum = sum + arr[i];
}

var ceil_of_avrg = Math.ceil(sum/number_of_integers);

console.log(ceil_of_avrg);
