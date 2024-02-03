// Create an object with the following functionality

// Ability to add student details and 3 subject marks
// Methods to find the student with the least and highest total


let details = {
  data : [],
  addStudent: function(nam, math, sci, eng){
    let obj = {
      name : nam,
      math : math,
      science : sci,
      english : eng,
    }
    this.data.push(obj);
  },
  lowScore: function(){
    let lowest_student;
    let pad_min = Infinity;
    for(let i = 0; i < this.data.length; i++){
      let current_student = this.data[i];
      let total = current_student.math + current_student.science + current_student.english;
      if(total < pad_min){
        pad_min = total;
        lowest_student = current_student;
      }
    }
    return lowest_student;
  },
  
  highScore: function(){
    let highest_student;
    let pad_max = -Infinity;
    for(let i = 0; i < this.data.length; i++){
      let current_student = this.data[i];
      let total = current_student.math + current_student.science + current_student.english;
      if(total > pad_max){
        pad_max = total;
        highest_student = current_student;
      }
    }
    return highest_student;
  }
}

details.addStudent("Heena", 10, 20, 30);
details.addStudent("Raha", 20, 30, 40);
details.addStudent("Vikram", 30, 40 ,50);

console.log(details.data);
console.log(details.lowScore());
console.log(details.highScore());