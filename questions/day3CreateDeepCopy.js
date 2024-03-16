
const originalObj1  = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main Street",
    city: "Anytown",
    state: "CA",
    zip: "12345",
  },
};
const originalObj2  = {
  name: "sam Doe",
  age: 20,
  address: {
    street: "123 Main Street",
  },
};

const deepCopy=(obj1)=>{
 
let result=Array.isArray(obj1)?[]:{}
if(typeof obj1!=='object'|| typeof obj1==='undefined'){
  return obj1
}

// const keys=Object.keys(obj1)
for (const key in obj1) {

  // result[keys[key]]=deepCopy(obj1[keys[key]])
const value=obj1[key]
result[key]=deepCopy(value)

}
return result
}

const deepCopiedObj=deepCopy(originalObj1)

// const deepCopiedObjTwo=deepCopy(originalObj2)

originalObj1.name="Dhiraj"
console.log("copied object:", ...deepCopiedObj);
console.log(originalObj1);

// originalObj2.age=25
// console.log(deepCopiedObjTwo);
// console.log(originalObj2);