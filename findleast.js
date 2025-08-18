function leastLarger(arr, index) {
  const result = arr[index];
  

  const largerNumbers = arr.filter(num => num > result);


  if (largerNumbers.length === 0) return -1;


  const smallestone = Math.min(...largerNumbers);

  return arr.indexOf(smallestone);
}


console.log(leastLarger([4, 1, 3, 5, 6], 0)); 
console.log(leastLarger([4, 1, 3, 5, 6], 4)); 
console.log(leastLarger([4, 1, 3,5,6],3)); 
