function sumMultiplies(n,m){
    let sum=0;
    for(let i=n;i<m;i+=n){
        sum +=i
    }
    return sum;





}
console.log(sumMultiplies(3,13))