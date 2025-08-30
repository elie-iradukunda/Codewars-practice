function checkArrow(arrow){
    return arrow.some(arrow=>arrow.length>1)
}
console.log(checkArrow(["hello","wor","sa"]))


// Digital Root: keep summing digits until one digit
function digitalRoot(n) {
  while (n > 9) {
    n = n.toString().split('').reduce((a, b) => a + +b, 0);
  }
  return n;
}
console.log()