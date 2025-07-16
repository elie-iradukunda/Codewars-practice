function sum(numbers){
    if(numbers.length===0) return 0;

    return numbers.reduce((acc,curr)=>acc+curr,0)
};

console.log(sum([2,3,4,-3,-2,9]))

