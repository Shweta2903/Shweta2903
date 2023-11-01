//Problem 1: Given the year of birth, if the age is between 13 and 19 (both included) print Teenage and in between 20 and 29 (both included) print Twenties

var year_of_birth = 2006;
var age = 2023 - year_of_birth;

if(age >=13 && age <= 19)
{
  console.log("Teenage");
} 
else if( age >= 20 && age <= 29)
{
  console.log("Twenties");
}

//Problem 2 : Given any character, if it is a vowel print "Vowel"
//vowel are a, e, i, o and u

var character = "o";

if(character == "a" || character == "e" || character == "i" || character == "o" || character == "u")
{
  console.log("Vowel");
} 
else
{
  console.log("Not a vowel");
}

//Problem 3 : Given and character if it is a consonant print "Consonant"
var character = "z";

if(character != "a" && character != "e" && character != "i" && character != "o" && character != "u")
{
  console.log("Consonant");
} 
else
{
  console.log("Not a Consonant");
}

//Problem 4: Given 3 numbers (all different values), print which is greatest
var a = 25;
var b = 60; 
var c = 100;

if( a > b && a > c)
{
  console.log("a is greatest");
}
else if( b > a && b > c)
{
  console.log("b is greatest");
}
else 
{
  console.log("c is greatest");
}


//Problem 5: Given the days of the week in short format "Sun", "Mon" ... print in long format "Sunday", "Monday", ...

var days = "mon";

switch (days) {
  case 'sun':
    console.log("Sunday")
    break;
    case 'mon':
    console.log("Monday")
    break;
    case 'tue':
    console.log("Tuseday")
    break;
    case 'wed':
    console.log("Wednesday")
    break;
    case 'thus':
    console.log("Thusday")
    break;
    case 'fri':
    console.log("Friday")
    break;
    case 'sat':
    console.log("Saturday")
    break;
  
  default:
    console.log("Wrong Input")
}
