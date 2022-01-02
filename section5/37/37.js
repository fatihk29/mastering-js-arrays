let arr = [
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

console.log(arr.sort());

let arr2 = [11, 15, -10, 500, -25, 0, 323, 112, -4];
let compareNum = function (a, b) {
  // if (a < b) {
  //   return -1;
  // } else if (b < a) {
  //   return 1;
  // } else {
  //   return 0;
  // }
  // return a < b ? -1 : b < a ? 1 : 0;
  return a - b;
};
arr2.sort();

console.log(arr2.sort(compareNum));
console.log(arr2.sort((a, b) => a - b));

let compareString = (a, b) => {
  let x = a.toLowerCase();
  let y = b.toLowerCase();

  if (x < y) return -1;
  if (y < x) return 1;
  return 0;
};

console.log(arr.sort(compareString));