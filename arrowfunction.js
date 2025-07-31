// different btn arrow function and regular and each on best use case
// in object

const person={
    name:"karisa",
    fruits:['apple','tomatoes','banana'],
    greeting(){
        this.fruits.forEach((fruit)=>{
            console.log(`hello ${this.name} has ${this.fruits}`)
        })

    }
}
person.greeting() // here because we used arrow function is going to bind this from object that created which is person

// but using regular function will throw undefined because it will take this as global


const person2={
    city:"kigali",
    ages:[2,3,4,5,6,7],
    greeting(){
        this.ages.forEach(function(age){
            console.log(`hello ${this.city} has those ${this.age}`)
        })
    }
}
person2.greeting()// here it will display un defined because regular function when you call it out side its defined object it will throw undefined
// but arrow function when you called it out side the defined object it will print real propertie  because it have lexiscal scoping or take from sorrounding



// about defining object methods.  arrow function is not good at that since it will throw an error

const person3={
    name:"kamana",
    fruits:['tomato','bean'],
    greeting:()=>{
        // that will automatically throw an arror  TypeError: Cannot read properties of undefined (reading 'forEach')
// this means when you want to define method object you can use regular way  like methodname(){}
        this.fruits.forEach(fruit=>console.log(fruit))
    }
}
person3.greeting()


