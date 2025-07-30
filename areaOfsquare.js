function areaOfsquare(radius){
    if(radius<=0){
        throw new Error('please radius must be positive')
    }
    const area=Math.PI*radius*radius
    return area*100/100
}

console.log(areaOfsquare(9))