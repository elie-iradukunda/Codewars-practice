function squareDigits(num) {
  // Convert number to string, split into array of digits
  return Number(
    num
      .toString()
      .split("")
      .map(digit => digit ** 2) // square each digit
      .join("") // join back as string
  );
}

// Test cases
console.log(squareDigits(9119)); // 811181
console.log(squareDigits(123));  // 149
console.log(squareDigits(0));    // 0
