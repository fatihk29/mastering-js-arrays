// The purpose of the map method is to create a new array from an existing array.

let arr = [3, 15, 25, 6, 8, 12];

let newArray = arr.map((val, idx, theArray) => {
  console.log('val', val, 'idx', idx);

  return val * val;
});
