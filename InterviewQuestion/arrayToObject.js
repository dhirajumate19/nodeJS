// Array to Object convert 
const array=["JavaScript","Java","Python", "CPP","Ruby"]

const obj=array.reduce((acc, curr,index)=>{
    acc[index]=curr
    return acc
},{})

console.log(obj);

//Reverse this opration to array
const arr=Object.values(obj)
console.log(arr);