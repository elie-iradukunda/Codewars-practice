function duplicate(arr){
    let result=[];
arr.forEach((element,index)=>{
    if(arr.indexOf(element)!==index && !result.includes(element)){
        result.push(element)
    }
})
return result
}

console.log(duplicate([1,2,2,2,2,3,3,4,4,5,6,7,7,6,8]))