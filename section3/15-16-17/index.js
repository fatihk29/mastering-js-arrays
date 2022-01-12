// Iterating an Array with for loop

let array1 = [10, 11, 12, 13, 14, 15, 16, 17, 18];

// for loop

for (let i = 0; i < array1.length; i += 1) {
  console.log("element", i, "=>", array1[i]);
}

// Exercise 2 Question 22

let students = ["Ahmet", "John", "Mert", "Ayse", "Zeynep", "haydar", "bengu"];

let studentsFormatted = [];
// Exercise 2 Solving 2
for (let i = 0; i < students.length; i += 1) {
  // studentsFormatted.push(students[i].toLocaleLowerCase());
  studentsFormatted[i] = students[i].toLocaleLowerCase();
}

console.log("studentsFormatted", studentsFormatted);
