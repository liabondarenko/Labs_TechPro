let y = 0.3 * (Math.log(Math.E ** -2.3) / Math.log(5));
let z = Math.sqrt(Math.abs(y + Math.sin(y) ** 2));
let x = Math.acos((Math.PI - z) / 3) + Math.E;


console.log("y =", y);
console.log("z =", z);
console.log("x =", x);
