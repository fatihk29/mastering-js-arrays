// for in loop

let array1 = [3, 5, 7, 9, 11, 13, 15, 17, 18, 19, 20, 21];

for (let key in array1) {
  console.log("key", key);
}

// for of loop

for (let value of array1) {
  console.log("value", value);
}

let total = 0;

for (let value of array1) {
  total += value;
}

console.log("total=>", total);
