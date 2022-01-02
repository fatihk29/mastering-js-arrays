let processData = function (...coll) {
  console.log(coll);
  let newArray = [];
  for (let val of coll) {
    if (Array.isArray(val)) {
      newArray.push(val);
    } else {
      newArray.push(Array.from(val));
    }
  }
  console.log(newArray);
  return newArray;
};

processData();
console.log('processData=>', processData());
