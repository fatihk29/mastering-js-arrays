let growthRate = [1.1, 0.5, -1.3, 1.4, 2.1, 0.8, 1.5, 0.3, -0.4];

let months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

let growthRateSorted = [...growthRate].sort((a, b) => {
  return a - b;
});

console.log('growthRateSorted=>', growthRateSorted);

let jMonths = [...months]
  .sort((a, b) => {
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    if (a.toLowerCase() < b.toLowerCase()) return 1;
    return 0;
  })
  .splice(4, 3);

console.log('jMonths=>', jMonths);
