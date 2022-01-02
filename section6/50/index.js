let scores = [80, 50, 0, 100, 90, 80, 75];

let sum = scores.reduce((acc, val) => {
  console.log('acc', acc);
  return acc + val;
}, 0);

let personalData = [{ firstName: 'da' }, { lastName: 'aasd' }, { score: 85 }];

let obj = personalData.reduce((acc, item) => {
  return Object.assign(acc, item);
}, {});
