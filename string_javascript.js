//Problem 1 : Given a string count the number of words in that string

var str = "Focus on where you want to go.";

if(str.length > 0) {
  var count = 1;
  for(var i = 0; i < str.length; i++){
    if(str[i] == " "){
    count++;
    }
  }
console.log("Number of words in given string are :", count);
}else{
  console.log("No words");
}

//Problem 2 : Given a string in lower case convert it to upper case

var name = "heyy... how are you !";

var lower = "abcdefghijklmnopqrstuvwxyz \"'!@$%^&*()?.";
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ \"'!@$%^&*()?.";

var result = "";

for(var i = 0; i < name.length; i++){
  for(var j = 0; j < lower.length; j++){
    if(name[i] == lower[j]){
      result = result + upper[j];
      break;
    }
  }
}
console.log(result);

//Problem 3 : Given an array of string count the overall total number of characters

var names = ["shweta", "kavita", "Pooja", "Hemali", "Meera", "Himani", "Tulsi"];

var count = 0;
for(var i = 0; i<names.length; i++){
  name = names[i];
  for(var j = 0; j < name.length; j++){
    count++;
  }
}
console.log(count);