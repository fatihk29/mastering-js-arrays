let array1 = [false, 1, 2, 3, 4, 5, 0, "array1", { a: 1, b: 2 }, [3, 6]];

console.log("array1[3]=>", array1[3]);
console.log("array1[2]=>", array1);

array1[7] = "self";
array1[100] = "22";
console.log("array1", array1);

console.log("array1[67]=>", array1[67]);
// array1 is sparse array