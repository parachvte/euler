let n = 100
let sumOfSquare = Array.from(Array(n + 1).keys()).reduce( (prev, curr) => prev + curr * curr)
let squareOfSum = Math.pow(n * (n + 1) / 2, 2)

console.log(Math.abs(sumOfSquare - squareOfSum))

// answer = 25164150
//
// use Array.from() and *arrow functions* in ES6 (ES2015).
//
// Note: stupid solution above, since sum of square of 1..N is n*(n+1)*(2*n+1)/6,
// which u might have learned it in junior school.
