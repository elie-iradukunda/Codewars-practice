function returningIndexCapital(word){
    return [...word].map((char,index)=>char===char.toUpperCase()? index:-1).filter(index=>index!==-1)
}
console.log(returningIndexCapital("HelloWorldHEre"))