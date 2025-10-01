const readline = require("readline"); // підключає вбудований модуль readline
//використовується для читання даних від користувача з консолі (наприклад, коли програма задає питання і чекає введення).
//const readline — створює змінну readline, у яку зберігається підключений модуль.



//  інтерфейс для вводу 
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Функція для перевірки, чи день є вихідним 
function checkWeekend(dateInput) {
    if (!dateInput) return "Помилка: дата не введена";

    // Розбиваємо рядок на рік, місяць, день
    const parts = dateInput.split("-");
    if (parts.length !== 3) return "Помилка: неправильний формат дати. Використовуйте РРРР-ММ-ДД";

    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // місяці від 0 до 11
    const day = parseInt(parts[2], 10);

    if (isNaN(year) || isNaN(month) || isNaN(day)) return "Помилка: дата містить недійсні числа";

    const date = new Date(year, month, day);

    // Перевірка на реально існуючу дату
    if (date.getFullYear() !== year || date.getMonth() !== month || date.getDate() !== day) {
        return "Помилка: недійсна дата";
    }

    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"];
    const dayOfWeek = date.getDay();

    const isWeekend = (dayOfWeek === 0 || dayOfWeek === 6);
    return `Цей день тижня: ${days[dayOfWeek]}. ${isWeekend ? "Вихідний день" : "Робочий день"}`;
}

// введеня дати
rl.question("Введіть дату у форматі РРРР-ММ-ДД: ", (answer) => {
    const result = checkWeekend(answer);
    console.log(result);
    rl.close();
});
