//Problem 1: If the number is divisible by 3, print a "multiple of 3".

var x = 270;

if(x % 3 == 0)
{
  console.log("multiple of 3");
}
else
{
  console.log(("not a multiple of 3"));
}

//Problem 2 : If a person is allowed to drive in India print "Apply for a license" or "NA".

persone_age = 20;
if(persone_age >= 18)
{
  console.log("Apply for a license");
}
else
{
  console.log("NA");
}

//Problem 3: Given 2 numbers a and b print which is greater or "both equal".
var a = 55;
var b = 90;

if(a > b)
{
  console.log("a is greater than b");
}
else if(a < b)
{
  console.log("b is greater than a")  
}
else
{
  console.log("both equal")
}

//Problem 4: given stored username and password and input username and password, Print if the user can login or not.
stored_username = "demo@gmail.com";
stored_password = 123456;

input_username = "shweta@gmail.com";
input_password = 123;

if(stored_username == input_username)
{
  if(stored_password == input_password)
  {
    console.log("Login Access")
  }
  else
  {
    console.log("You entered wrong password");
  }
}
else
{
  console.log("You entered wrong usename");
}


