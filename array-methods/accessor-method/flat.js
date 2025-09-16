//flatterns nested array into a single-level array (depth)

const nested = [1,[2,[3]]];

const flat1 = nested.flat();
console.log(flat1);

const flat2 = nested.flat(2);
console.log(flat2);



