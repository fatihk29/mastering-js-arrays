let originalArray = [
  'james',
  'Ari',
  'Simone',
  'Steve',
  'FAT',
  '',
  'HAn',
  '8',
  '9',
  'aab',
];

// let arr2 = arr;

// arr2.sort();
// console.log(arr2);

/// cloning an array

let arrSort = [...originalArray];

console.log('arrSort=>', arrSort.sort());
console.log('originalArray=>', originalArray);

// reverse an array
let arrReverse = Array.from(originalArray);

console.log('arrReverse=>', arrReverse);
console.log('originalArray=>', originalArray);
