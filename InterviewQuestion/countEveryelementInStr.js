const str="Hey what's going on is everything ok"

const obj={}
for (const item of str) {
    if (obj[item]) {
        obj[item]+=1
    } else {
        obj[item]=1       
    }
}

console.log(`number of char:${obj}`,obj);
//count every elemnt
//count frequecy of element
//count number of charcater in string 