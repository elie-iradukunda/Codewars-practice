function findShort(str){
    const hashTable={};
    const words=str.split(" ");
   

   for(let word of words){
   hashTable[word]=word.length;
    
   }
   const hashValues=Object.values(hashTable);
   return Math.min(...hashValues)

 

}
console.log(findShort("hello javascript here we go bro"))