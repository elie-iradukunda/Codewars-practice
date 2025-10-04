class Order{
    constructor(id){
        this.id=id;

    }

    getId(){
        console.log(`the order Id of your order is ${this.id}`)

    }

}


const order1=new Order('23gh123');

const order2=new Order('48hf76');

order2.getId();
order1.getId();



class Animal{
    constructor(legs,ages){
        this.legs=legs;
        this.ages=ages;

    }

    walk(){
        console.log(`the mamals which has ${this.legs} legs  can works and the ages of the animals is ${this.ages } years old`);

    }


   
}
 class Birds extends Animal{
        constructor(legs,ages,fly){
            super(legs,ages);
            this.fly=fly;
            
        }

        fly(){
          console.log(`the birds can fly is ${Birds.fly}`);
        }
    }

    const animals=new Animal(5,20);
    const Birds1=new Birds(2,3,true);
    animals.walk();
    Birds1.walk();
    


    // destracturing

    let forest=['dog','cat','rabit'];
    let [d,c,r]=forest;
    console.log(d);
    console.log(c);
    console.log(r);
    // spread operator
    let forest1=['dog','cat','rabit'];
    let forest2=['lion','tiger','bear'];
    let forest3=[...forest1,...forest2];
    console.log(forest3);

    //rest operator
    function sum(...numbers){
        let total=0;
        for(let i=0; i<numbers.length; i++){
            total+=numbers[i];

        }
        return total;


    }
    console.log(sum(1,2,3,4,5));

    //template literals
    let names="john";
    let ages=49;
    console.log(`my name is ${names} and my age is ${ages} years old`);

    //arrow function
    const multiply=(a,b)=>a*b;
    console.log(multiply(6,9));
    const add=(a,b)=>a+b;
    console.log(add(6,9));




    //classes and inhertance
    class students{
        constructor(name,age){
            this.name=name;
            this.age=age;

        }

    }
    class GraduateStudent extends students{
        constructor(name,age,degree){
            super(name,age);
            this.degree=degree;

        }
    run(){
        console.log(`the name of students is ${this.name} and the age is ${this.age} years olsd and the degree is ${this.degree} `);

    }

    }
    const student1=new students('alice',40);
    console.log(student1);
    const gradStudent1=new GraduateStudent('bob',34,'software');
    gradStudent1.run();
    console.log(gradStudent1);
    console.log(student1);

    //modules
    //exporting function
    export function greet1(name){
        console.log(`hello , ${name} welcome to the modules in javascript`);

    }
    greet1('john');
    //importing function
    
    //
    //proxies in javascript
    let person={
        name:'john',
        age:30,


    };
    let handler={
        get (target,property){
            return property in target ? target[property]: `property ${property} does not exist in the object`;

        }

    };
    let proxy =new Proxy(person,handler);
    console.log(proxy.nam);
    
    console.log(proxy.age);
    console.log(proxy.name);
    // three traps in proxies
    //get
    //set
    //has
    let person1={
        name:'john',
        age:50,
    };
    let handler1={
        get(target,property){
            return property in target ? target[property]: `the property ${property} does not exist in our object`;


        }
    };

    let proxy2=new Proxy(person1,handler1);
    console.log(proxy2.nam)
console.log(proxy2.age);

// set trap







    









