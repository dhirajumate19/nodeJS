const checkDataType = (input) => {
  if (input === undefined || input === null) {
    return "Please enter a valid input";
  }
  return (result = Array.isArray(input) ? input : typeof input);
};

console.log(checkDataType(10)); // number
console.log(checkDataType("10")); //String
console.log(checkDataType(true)); //boolean
console.log(checkDataType(!!!!"ankit")); // boolean

console.log(checkDataType(!"ankit")); // boolean
console.log(checkDataType(!"ankit")); //boolean
console.log(checkDataType(Number("ankit"))); // Number

console.log(checkDataType()); //Please enter a valid input
console.log(checkDataType(undefined)); // //Please enter a valid input
console.log(checkDataType(null)); ////Please enter a valid input

console.log(checkDataType([1, 2, 3, 4])); //array
console.log(checkDataType({ name: "Ankit" })); //object
