//Problem 1: Print the Calendar date

var days_num = 0;
for(var month=1; month<=12; month++){
  var days_value = 31;
  
  switch (month) {
      case 1:console.log("_____January_____");
      break;
      case 2:console.log("_____February_____");
      break;
      case 3:console.log("_____March_____");
      break;
      case 4:console.log("_____April_____");
      break;
      case 5:console.log("_____May_____");
      break;
      case 6:console.log("_____June_____");
      break;
      case 7:console.log("_____July_____");
      break;
      case 8:console.log("_____August_____");
      break;
      case 9:console.log("_____September_____");
      break;
      case 10:console.log("_____October_____");
      break;
      case 11:console.log("_____November_____");
      break;
      case 12:console.log("_____December_____");
      break;
    
    default:
      console.log("_________________")
  }
  
  if(month == 2){
    days_value = 28;
  }
  if(month == 4 || month == 6 || month == 9 || month == 11){
    days_value = 30
  } 
  for(var day=1; day <= days_value; day++){
    console.log(day, "-",month);
    days_num++;
  }
}
console.log("Total days :",days_num);



//Problem 2: Print Prime Numbers

for(var i = 2; i<=1000; i++){
  var count = 0;
  for(var j = 1; j<= i; j++){
    if(i % j == 0){
      count++;
    }
  }
  if(count == 2){
    console.log(i, "prime")
  }
}













