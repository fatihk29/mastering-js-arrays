let personalData = [
  { firstName: 'Ali', lastName: 'Yilmaz', yas: 40 },
  { firstName: 'Zeynep', lastName: 'Seda', yas: 18 },
  { firstName: 'ğ', lastName: 'Seda', yas: 18 },
  { firstName: 'Metin', lastName: 'Hakki', yas: 41 },
  { firstName: 'Hakan', lastName: 'Erdogan', yas: 18 },
];

personalData.sort();

let sortByName = (a, b) => {
  if (a.firstName < b.firstName) return -1;
  else if(b.firstName < a.firstName) return 1;
  return 0
};

console.log(personalData.sort(sortByName));
