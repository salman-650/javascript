let person = { name: "salman", age: 21, city: "kottakkal"};
console.log(person);


person.country = "india";
console.log(person);

delete person.city;
console.log(person);


if (person.age >= 18){
    console.log("the person is an adult");
    
}

