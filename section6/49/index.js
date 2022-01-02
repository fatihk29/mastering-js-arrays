// filter method is used to create a subset array
// we filter out certain elements from the original array.

let scores = [80, 50, 0, 100, 90, 80, 75];

let passScores = scores.filter((val) => {
  return val >= 70;
});

let failScores = scores.filter((val) => {
  return val < 70;
});
