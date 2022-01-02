let array1 = [5, 10, 15, 20, 25],
  array2 = [2, 4, 6, 8, 10],
  array3 = ['abc', 'def', 'hello', 'world'];

let combinedArray = [...array1, ...array2, ...array3];
console.log('combinedArray=>', combinedArray);

let combinedArray2 = array1.concat(array2, array3);

console.log('combinedArray2=>', combinedArray2);
