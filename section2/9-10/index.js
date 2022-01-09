let array1 = [false, 1, 2, 3, 4, 5, 0, "array1", { a: 1, b: 2 }, [3, 6]];

console.log("array1 length =>", array1.length);

array1.length = 40; // not recommended

console.log("array1 length =>", array1.length);

//// Deleting array elements

delete array1[7]; // using the delete keyword does not modify the length of the array.

console.log("array1[7]", array1[7]);

console.log("array1 length =>", array1.length);
