const person={
    name:"karisa",
    age:30
};

const proxyPerson=new Proxy(person,{
    get(target,propert){
        if(propert==='age'){
return` have${target[propert]} years old`
        }
          return target[propert]
    }

  
})
console.log(proxyPerson.name)
console.log(proxyPerson.age)

// using set to set or change values and props

const person2={}

const proxy=new Proxy(person2,{
    set(target,props,value){
        if(props==='age' && typeof value!=='number'){
            console.log(` values must be number`)
            return false
        }else if(props==='email'&& !value.includes('@')){
            console.log('email must includes @')
            return false
        }
        target[props]=value
        return true
    }
})

proxy.age=30
proxy.name='kamana'
proxy.location='kigali'
proxy.email='karisa@gmail.com'

console.log(person2)


// using delete property when you want to delete some thing in person object for condition

const person3={
    name:"karisa",
    age:40
};

const proxy3=new Proxy(person3,{
    deleteProperty(target,props){
        if(props==="name"){
            console.log(' you cant delete name')
            return false
        }
        delete target[props]
        return true
    }
})

delete proxy3.name
delete proxy3.age

console.log(person3)



// using has in when you whant to  hide some property


const person4={
    password:"kakakaka",
    email:"kamana@gmail.com"
}
const proxy4=new Proxy(person4,{
    has(target,props){
        if(props==='password'){
            console.log(`there is no Passaword`)
            return false
        }
        
        return target[props]
    }
})
console.log('password' in proxy4)
console.log('email' in proxy4)


// using has ounkeys You can hide sensitive keys like "password" when listing keys.

const person5 = {
  name: "Elie",
  password: "1234",
  email:"karisa@gmail.com",
  location:"kigali"

};

const proxy5 = new Proxy(person5, {
  ownKeys(target) {
    return Object.keys(target).filter(key => key !== "password");
  }
});

console.log(Object.keys(proxy5)); 
