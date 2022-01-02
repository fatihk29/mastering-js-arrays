let array1 = [];

array1.push(3, 23, 4, 56);
array1.unshift(-1);
console.log('array1', array1);
console.log('array length', array1.length);

array1[3] = array1[3] * 10;
console.log('array index 3=>', array1[3]);

const addItem = (num) => {
  array1.push(num);
};

addItem(120);
console.log('array1', array1);

const getItem = () => {
  return array1.shift();
};

console.log('getItem', getItem());
console.log('array1', array1);
