function likes(names){
    if(!Array.isArray(names)){
        return('invalid')
    }
    const numbersOfnames=names.length;

    if(numbersOfnames===0){
        return(`no one likes this`)
    }
    else if(numbersOfnames===1){
        return(`${names} likes this`)
    }
    else if(numbersOfnames===2){
        return(`${names[0]} and ${names[1]} like this`)
    } else if(numbersOfnames===3){
       return(`${names[0]}, ${names[1]} and ${names[2]} like this`)

    }
    else if(numbersOfnames>2){
        return(`${names[0]}, ${names[1]} and ${names.length-2} others like this`)
    }

}
 console.log(likes(['kagarara','kagabo','muhoza','musana','mugisha','mugabe']))
 console.log(likes([]))
 console.log(likes(['mugisha']))