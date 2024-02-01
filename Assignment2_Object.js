// Problem 1 : Given a list of user data with name and age, create a list of key-value pairs from the input
// From the generated data, print the users whose age is more than 30


let name = ["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let age = [32, 30, 26, 28, 44];

let user = [];
let pad = "";

for(let i = 0; i < name.length; i++){
   let obj = {
    name: name[i],
    age: age[i]
  }
    user.push(obj);
    
    if(user[i].age > 30){
      pad = pad + user[i].name + " ";
   }
  
}
  console.log(user);
  console.log(pad);

// Output:
// [
//   { name: 'Nrupul', age: 32 },
//   { name: 'Prateek', age: 30 },
//   { name: 'Aman', age: 26 },
//   { name: 'Albert', age: 28 },
//   { name: 'Yogesh', age: 44 }
// ]
// Nrupul Yogesh



// Problem 2 : Given an object of student grades and their marks in the mentioned below format,
//print the highest scored student for each grade along with the total

let arr = [
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
		  {name: "Prateek", marks: [20, 30, 40]},
			{name: "Prinkesh", marks: [30, 40 ,50]}
			
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]},
				{name: "Kavita", marks: [30, 40 ,50]},
				{name: "Raha", marks: [40, 50 ,60]}
		]
	}
]


function sum_of_marks(marksArr){
  let sum = 0;
  for(let j = 0; j < marksArr.length; j++){
    sum = sum + marksArr[j];
  }  
  return sum;
}

function cal_students_marks(obj){
  let grade = obj.grade;
  let max_marks = -Infinity;
   
   for(let i = 0; i < obj.students.length; i++){
     let current_student = obj.students[i];
     let sum = sum_of_marks(current_student.marks);
    
     if(sum > max_marks){
       max_marks = sum;
       var name = current_student.name;
     }
   }
   return result = `${grade} - ${name} - ${max_marks}`;
  
}

for(let obj = 0; obj < arr.length; obj++){
  let highest = cal_students_marks(arr[obj]);
  console.log(highest);
}

// Output:
// V - Prateek - 90
// VI - Albert - 90
// VII - Sandhya - 90




