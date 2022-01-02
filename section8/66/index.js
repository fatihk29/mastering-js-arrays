let array1 = [5, 10, 20, 30, 40, 50];
let newArray = array1.slice(0, 5);
let newArray2 = array1.slice(2);

let test = function () {
  console.log(arguments);
  let argArray = Array.prototype.slice.call(arguments);
  console.log('argArray', Array.isArray(argArray));
};

test();
