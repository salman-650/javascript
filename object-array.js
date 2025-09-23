const students = [
    {name:"bino", age:21, grade:"A"},
    {name:"salman", age:20, grade:"A+"},
    {name:"firnas", age:14, grade:"B"}

   ]

   //accessing data

   console.log(students[0].name);
   console.log(students[1].grade);
   

   //looping through object array
   students.forEach(stdnt => {
    console.log(`${stdnt.name} is ${stdnt.age} years old.`);
    
   })