//Function : Block of code are design to perticuler task. You can control your code using function.
//return: Give back result and stop the code execution. 


// Problem 1:  Create a function to check if a number is Prime or Not

function prime_num(num)
{
  var count = 0;
  for(var i = 1; i <= num; i++)
  {
    if(num % i == 0)
    {
      count++;
    }
    
  }
  
  if(count == 2){
    return true;
  }else{
    return false;
  }
}

var Result1 = prime_num(7); 

console.log(Result1);

//Problem 2: Use the above function to print the Primes from 2 to a given limit

var limit = 50; 

for(var i = 2; i <= limit; i++){
  
  var prime_number = prime_num(i);
  
  if(prime_number == true){
    console.log(i, "Prime");
  }
}


//Problem 3: Use the same function to print Non-Primes from 2 to a given limit

var limit = 50;

for(var i = 2; i <= limit; i++){
  
  var primes = prime_num(i);
  
  if(primes == false){
    console.log(i, "Not a Prime");
  }
}

//Problem 4: Write a function to check if the char is a small case or not.

function checkChar(char)
{
  var lower = "abcdefghijklmnopqrstuvwxyz";
  
  for(var i = 0; i <= lower.length; i++){
    
    if(char == lower[i])
    {
      return true;
    }
  }
    return false;

}

var char = checkChar("j");

if(char == 1){
  console.log("small case");
}else{
  console.log("Not a small case");
}

//Problem 5: Write a function to replace spaces in a given string with '-' .

function replaceSpace(input)
{
  var result_str = "";
  
  for(var i = 0; i < input.length; i++){
    if(input[i] == " "){
      result_str = result_str + "-";
    }else{
      result_str = result_str + input[i];
    }
  }
  
  return result_str;
}

var output = replaceSpace("My Life");

console.log(output);





