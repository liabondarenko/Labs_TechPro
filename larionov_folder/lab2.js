
const readline = require("readline");
const rl = readline.createInterface({
 input: process.stdin,
 output: process.stdout
});
console.log("Обчислення різниці між двома датами у годинах і хвилинах.");
console.log("Введи дати у форматі: YYYY-MM-DD HH:MM\n");
function isValidDate(dateStr) {
 if (typeof dateStr !== "string") return false;
 const d = new Date(dateStr);
 return !isNaN(d.getTime());
}
function calculateTimeDifference(date1, date2) {
 let d1 = new Date(date1);
 let d2 = new Date(date2);
 let diffMs = Math.abs(d2 - d1);
 let diffHours = Math.floor(diffMs / (1000 * 60 * 60));
 let diffMinutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
 console.log(`\nДата 1: ${d1}`);
 console.log(`Дата 2: ${d2}`);
 console.log(`Різниця: ${diffHours} годин ${diffMinutes} хвилин`);
}
rl.question("Введіть першу дату: ", (date1) => {
 if (!isValidDate(date1)) {
 console.log(" Помилка: некоректна дата! Формат повинен бути YYYY-MM-DDHH:MM");
rl.close();
 return;
 }
 rl.question("Введіть другу дату: ", (date2) => {
 if (!isValidDate(date2)) {
 console.log(" Помилка: некоректна дата! Формат повинен бути YYYYMM-DD HH:MM");
 rl.close();
 return;
 }
 calculateTimeDifference(date1, date2);
 rl.close();
 });
});
