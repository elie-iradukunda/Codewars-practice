function removedup(array){
const removed=array.filter((word,index,arr)=>arr.indexOf(word)===index)
return removed

}
console.log(removedup(["hello","world","hello","javascript","this","javascript"]))


//maximum subarray sum


