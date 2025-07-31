function sumString(a,b){
    const BigintA=BigInt(a)
     const BigintB=BigInt(b)

     const sum=BigintA+BigintB

     return sum.toString()
}

console.log(sumString('4','8'))
