let str =
  'Lorem ipsum dolorj sit amet consectetur adipisicing elit. Sequi minus, delectus aut doloremque ipsum rem labore officiis repellat corporis aliquam reprehenderit odit quos excepturi dolor. Autem archijtecto dolores deleniti esse';
let str2 = '';

for (let val of str) {
  if (val === 'j') {
    str2 += val.toUpperCase();
  } else {
    str2 += val;
  }
}

let str3 = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i].toLowerCase()) {
    str3 += str[i].toUpperCase();
  } else {
    str3 += str[i];
  }
}
