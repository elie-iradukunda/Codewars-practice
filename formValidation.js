const newuser={
    username:"",
    password:"",
    email:""
};

const registerproxy=new Proxy(newuser,{
 set(target,props,value){
    if(props==='password'){
       if(value.length<8){
        console.log('password must be above 8 character')
        return false
       }
       console.log("password updated")

    }
    if(props==='email'){
        if(!value.includes('@')){
            console.log('email should contain @')
            return false
        }
        console.log('email created')
    }
    if(props==='username'){
        if(value.length<5){
            console.log('username must be above 5 character long')
            return false
        }
        console.log("username created successfull")
    }
    target[props]=value
    return true
 }

    
})

registerproxy.username="kamakawayida"
registerproxy.email="karisa@gmail.com"
registerproxy.password=2345

console.log(newuser)