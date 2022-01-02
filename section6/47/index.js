let arr = [3, 15, 25, 6, 8, 12];
let total = 0;
for (let val of arr) {
}

arr.forEach((val) => {
  total += val;
});

console.log(total);

let personalData = [
  { firstName: 'Ali', lastName: 'Yilmaz', yas: 40 },
  { firstName: 'Zeynep', lastName: 'Seda', yas: 18 },
  { firstName: 'ğ', lastName: 'Seda', yas: 18 },
  { firstName: 'Metin', lastName: 'Hakki', yas: 41 },
  { firstName: 'Hakan', lastName: 'Erdogan', yas: 18 },
];

personalData.forEach((val) => {
  val.yas < 20 ? (val.pass = false) : (val.pass = true);
});


console.log(personalData)