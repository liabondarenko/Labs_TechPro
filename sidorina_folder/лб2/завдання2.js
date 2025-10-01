let arr = [];

for (let i=0; i<10; i++) {
    arr.push(Math.floor(Math.random() * 100));
}
console.log(arr);

let min = Math.min(...arr);
console.log(min);

let index = arr.indexOf(min);
console.log(index);

arr.splice(index, 1);
console.log(arr);