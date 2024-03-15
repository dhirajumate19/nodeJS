// object Imp pro Sol
const profile = { name: "Arun", city: "Pune", state: "MH" };
const profile2 = { name: undefined, details: { phone: "6789", code: "+91" } };
const profile3 = {};

// How to check if an object is empty

// We need to get all keys
// Then we need to check of those keys are 0

const isObjEmpty = (obj) => {
  if (typeof obj !== "object") return false;

  return Object.keys(obj).length === 0;
};

const profileKeys = Object.keys(profile); // ['name', 'city', 'state'];
console.log("profileKeys: ", profileKeys.length);

// const profile2Keys = Object.keys(profile2); // ['name'];
// console.log("profile2Keys: ", profile2Keys.length);

// const profile3Keys = Object.keys(profile3); // ['name', 'city', 'state'];
// console.log("profile3Keys: ", profile3Keys.length);

console.log("profile3Keys: ", isObjEmpty(profile2));

//has key in Object check

console.log("Phone",profile.hasOwnProperty("phone"));// false 
// console.log("Name", profile.hasOwnProperty('name')); //true