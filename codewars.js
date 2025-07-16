function sum(numbers){
    if(numbers.length===0) return 0;

    return numbers.reduce((acc,curr)=>acc+curr,0)
};

console.log(sum([2,3,4,-3,-2,9]))


function sumMultiplies(n,m){
    let sum=0;
    for(let i=n;i<m;i+=n){
        sum +=i
    }
    return sum;





}
console.log(sumMultiplies(3,13))