// object is a collection of key-value pairs
// used to multiple values in a single variable & the value

const person = {
    name: 'lisan',
    age: 20,
    isStudent: true
}
console.log(person.name);
console.log(person ["age"]);

//add or modify datas
person.city = "malappuram";
person.age = 21;

delete person.city;
console.log(person);


