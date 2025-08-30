let isSquare=(n)=>{
return Number.isInteger(Math.sqrt(n))
}
console.log(isSquare(32))
console.log(isSquare(52))
console.log(isSquare(64))
console.log(isSquare(81))


function XO(str) {
  // convert to lowercase for case-insensitivity
  str = str.toLowerCase();

  // count x's and o's
  let xCount = (str.match(/x/g) || []).length;
  let oCount = (str.match(/o/g) || []).length;

  return xCount === oCount;
}
console.log(XO("ooxx"));     // true
console.log(XO("xooxx"));    // false
console.log(XO("ooxXm"));    // true



function minMax(arr) {
  return [Math.min(...arr), Math.max(...arr)];
}


console.log(minMax([1, 2, 3, 4, 5])); // [1, 5]
console.log(minMax([2334454, 5]));     // [5, 2334454]
console.log(minMax([1]));              // [1, 1]
