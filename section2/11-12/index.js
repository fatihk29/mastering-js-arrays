// push adds or more elements to the end of the array and return the length of the array

let array1 = [1, 2, 3, 4];
let length = array1.push(100, 1002);

console.log('array1=>', array1, '\n', 'length=>', length);

console.log('after pop method');
// pops removes an element from the end of the an array and return that item

let popped  = array1.pop();

console.log('array1=>', array1, '\n', 'popped =>', popped );

Array.prototype.pop.call(array1)

// unshift and shift

// remove or add to beginning of the array

let a = array1.unshift(55)

console.log('array1=>', array1, '\n', 'length=>', length, '\n', 'a', a);

// unshift is the equivalent of push meaning it adds to the array but it does it from the start shift