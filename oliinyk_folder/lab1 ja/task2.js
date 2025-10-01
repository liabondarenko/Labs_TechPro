let x = 0.5;
let y = 0.2;

// Варіант 1: вираз
let result1 = (Math.abs(x) <= 1) || (Math.abs(x / y) > 3);
console.log("Варіант 1 (через вираз):", result1 ? "TRUE" : "FALSE");

// Варіант 2: через if...else
let result2;
if (Math.abs(x) <= 1 || Math.abs(x / y) > 3) {
    result2 = true;
} else {
    result2 = false;
}
console.log("Варіант 2 (через if...else):", result2 ? "TRUE" : "FALSE");