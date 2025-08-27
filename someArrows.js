function checkArrow(arrow){
    return arrow.some(arrow=>arrow.length>1)
}
console.log(checkArrow(["hello","wor","sa"]))