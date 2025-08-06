const uniqueInOrder = function(iterable) {
  let result = [];
  let prev = null;

  for (let i = 0; i < iterable.length; i++) {
    if (iterable[i] !== prev) {
      result.push(iterable[i]);
      prev = iterable[i];
    }
  }

  return result;
};
 
 console.log(uniqueInOrder('ADAAAASSDDDAASAADADGFGDSSDDDDSSSAAA'))