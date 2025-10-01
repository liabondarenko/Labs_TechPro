
const e = Math.E; 

const lgE = Math.log10(e);


const safeCosE = Math.abs(Math.cos(e)); 
const partUnderAbs = Math.sqrt(safeCosE) - 2;

const y = Math.cbrt(lgE + 5 * Math.abs(partUnderAbs));


const x = Math.sqrt(8.67 + Math.exp(y) + Math.abs(y));

const t = (x ** 2 - y ** 3) * Math.exp(x + y);

//  результат
console.log("y =", y);
console.log("x =", x);
console.log("t =", t);
