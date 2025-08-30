function findUnique(arr) {
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length; i+=2) {
    if (arr[i] !== arr[i+1]) {
      return arr[i];
    }
  }
}
console.log(findUnique([ 1, 8, 4, 4, 6, 1, 8 ]))
