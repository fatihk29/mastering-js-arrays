let matrix = [
  [1, 2, 3, 4, 5],
  [5, 6, 7, 8],
  [6, 7, 8, 9],
  [10, 11, 12, 13],
  [14, 15, 16, 17],
];

let newArray = matrix.flat();
console.log('newArray=>', newArray);

let str = [
  'Lorem ipsum dolor sit amet consectetur,',
  'adipisicing elit.',
  'Explicabo optio minus deserunt',
  'dicta sint, ipsum, quod ea facere,',
  'beatae fuga magni expedita.',
  'Voluptatem quod aliquid qui laudantium dolore eum nihil commodi tempora?',
  'Iure, excepturi explicabo obcaecati eveniet,',
  'quidem consectetur corporis id libero optio est at tempore.',
  'Corrupti fugiat quod harum id repellendus tempora obcaecati,',
  'quae mollitia doloremque earum nemo unde placeat!',
  'Magnam assumenda nesciunt corporis ipsum placeat.',
  'Dicta quis neque est itaque aliquam voluptas,',
  'temporibus molestiae,',
  'ipsam deserunt, sunt quidem corrupti labore!',
  'Aspernatur quaerat recusandae et ipsum quod dolor illum quas saepe!',
  'Nesciunt perferendis commodi soluta exercitationem accusamus aliquam excepturi?',
];

// let strArraySplit = str.map((val) => val.split(' ')).flat();
let strArraySplit = str.flatMap((val) => val.split(' ')).flat();
console.log('strArraySplit', strArraySplit);
