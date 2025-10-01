function sumDiagonal() {
    const size = 5;
    const matrix = [];
    let sum = 0;

    for (let i = 0; i < size; i++) {
        matrix[i] = [];
        for (let j = 0; j < size; j++) {
            // Випадкове число від 1 до 100
            const num = Math.floor(Math.random() * 20+ 1)*5;
            matrix[i][j] = num;

            // Якщо елемент на головній діагоналі, додаємо до суми
            if (i === j) {
                sum += num;
            }
        }
    }

    console.log("Матриця 5x5:");
    console.table(matrix);
    console.log("Сума головної діагоналі:", sum);
}

// Виклик функції

sumDiagonal();
