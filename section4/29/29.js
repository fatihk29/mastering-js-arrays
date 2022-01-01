let sumIt = function () {
  console.log(
    'arguments=>',
    arguments,
    'isArgumentsArray=>',
    Array.isArray(arguments)
  );
  let nums = Array.from(arguments); // let nums = [...arguments]
  console.log(Array.isArray(nums));
};

sumIt(1, 2, 3, 4, 5, 6, 7, 8);
