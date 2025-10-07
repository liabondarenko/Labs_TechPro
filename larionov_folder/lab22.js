
function generateAndSortArray() {

 let arr = [];

 for (let i = 0; i < 10; i++) {
 let num = Math.floor(Math.random() * 100); 

 if (isNaN(num)) {
 console.log(` Помилка: згенероване значення №${i + 1} не є
числом`);
 return;
 }
 arr.push(num);
 }

 for (let i = 0; i < arr.length; i++) {
 if (typeof arr[i] !== "number") {
 console.log(` Помилка: елемент ${i + 1} не є числом`);
 return;
 }
 }
 console.log("Згенерований масив:", arr);

 let sorted = arr.slice().sort((a, b) => a - b);
 console.log("Відсортований масив:", sorted);
}
generateAndSortArray();
