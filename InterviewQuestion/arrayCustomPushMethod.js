// const arr=[1,2,3]
// arr.push(4)
// console.log(arr);

Array.prototype.myPush=function(...elements){
for (const element of elements) {
    this[this.length]=element;
}
return this.length
}
const arr=[1,2,3]
arr.myPush(4,5,6,7)
console.log({arr});