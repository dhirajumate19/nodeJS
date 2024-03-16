
const profile = {
  name: "Rohit",
  company: "payPal",
  isMarried: true,
  horoscope: "aries",
  badHabits: null,
};
const profileCp = {
  name: "Rohit",
  company: "payPal",
  isMarried: true,
  horoscope: "aries",
  badHabits: null,
};
const profileCp2 = {
  name: "Rohit",
  company: "Google",
  isMarried: true,
  horoscope: "Scorpian",
  badHabits: null,
};
// when you compare two object for diffrent reference(diffrent space in heap memory) it gives you false.
//when two object share same reference in heap memory it gies you true.
const compareObject = (obj1, obj2) => {
return Object.entries(obj1).toString() === Object.entries(obj2).toString();
};
console.log(compareObject(profile, profileCp)); //true

console.log(compareObject(profile, profileCp2)); // false
