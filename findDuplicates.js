function solution(array) {
var missing = 0, duplicate = 0
let arraylength=array.length

for(let i=0;i<arraylength;i++){
    if(array.indexOf(array[i])!== array.lastIndexOf(array[i])){
        duplicate=array[i]

        break;
    }
    
}

for(let i=1;i<arraylength;i++){
    if(!array.includes(i)){
        missing=i

        break;
    }
}

  
  return [missing,duplicate];

 


}
console.log(solution([1,2,2,3,5,6]))