const myArr=[0,1,2,3,4,5,"kavish",true]
//0 based index
//shallow copy ; share same reference point// array.copy operation makes shallow copy
const arr1=new  Array(1,2,3,4,5)

//array methods
// arr1.push(6);
// console.log(arr1)
// arr1.unshift(8)
// console.log(arr1)
// arr1.unshift(0)
// console.log(arr1)
// arr1.unshift(5)
// console.log(arr1)
// arr1.shift()//no argument//8 is removed
// console.log(arr1)
// arr1.shift()//no argument//8 is removed
// console.log(arr1)
// arr1.shift()//no argument//8 is removed
// console.log(arr1)
// arr1.shift()//no argument//8 is removed
// console.log(arr1)
//shift means removing first element 
//join converts in string

//slice,splice  

// console.log("A",arr1);
// const arr2=arr1.slice(1,3)
// console.log(arr2);
// console.log("B",arr1); 



// const arr3=arr1.splice(1,3)
// console.log(arr3);
// console.log("C",arr1); 

const arr4=arr1.reverse()
console.log(arr4);
console.log("D",arr1); 
 //shallow copy