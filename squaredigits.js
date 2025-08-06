
function squareDigits(num) {
  return Number(
    num
      .toString()
      .split('')
      .map(digit => Math.pow(Number(digit), 2))
      .join('')
  );
}
 console.log(squareDigits(233456))
  console.log(squareDigits(890))