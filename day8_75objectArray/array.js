const arr = [1, 2, 3, 4, 5, 6];

// For loop
for (let i = 0; i < arr.length; i++) {
  console.log(i, arr[i]);
}

console.log("Statrting ForOf");
// For of
for (let item of arr) {
  console.log(item);
}
// Map


const resultMap = arr.map((value, index, array) => {
  console.log({ value, index, array });
  return value * 100;
});

const resultMap2 = arr.map((value) => value * 100);

console.log("arr: ", arr);
console.log("Result map: ", resultMap, resultMap2);



// Foreach


const resultForEach = arr.forEach((value, index, array) => {
  console.log("forEach",{ value, index, array });
  return value * 2;
});

console.log("Result forEach", resultForEach);

