function consecutive(arr) {
  if (arr.length === 0) return 0; // edge case
  
  let min = Math.min(...arr);
  let max = Math.max(...arr);

  return (max - min + 1) - arr.length;
}



console.log(consecutive([4, 8, 6]));  // 2
console.log(consecutive([-1, -5]));   // 3
console.log(consecutive([1]));        // 0
console.log(consecutive([]));         // 0
