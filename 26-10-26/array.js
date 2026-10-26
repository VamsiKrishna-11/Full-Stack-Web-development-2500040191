const arr = [1,2,3,4,5,6,7,8,9];
console.log(arr);
const newarr = arr.map((x)=>x*2);
console.log(newarr);
const newarr1 = arr.filter((x)=>x%2==0);
console.log(newarr1);
const newarr2 = arr.reduce((sum,x)=>sum +x , 0);
console.log(newarr2);