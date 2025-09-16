// sort() - sorts elements of an array in ascending and descending order

let num = [10,23,45,68,23];
num.sort();
console.log(num);

//numeric sort ascending order
let numbers1 = [4,2,5,1,3];
numbers1.sort((a,b) => a - b);
console.log('numbers in ascending order: ',numbers1);


//numeric sort descending order
let numbers2 = [4,2,5,1,3];
numbers2.sort((a,b) => b - a);
console.log('numbers in descending order: ',numbers2);

//default string sort (ascending)
let fruits = ['banana', 'grape', 'melon', 'cherry'];
fruits.sort();
console.log(fruits);


let fruits2 = ['banana', 'grape', 'melon', 'cherry'];
fruits2.sort((a,b) => b.localeCompare(a));
console.log(fruits2);
