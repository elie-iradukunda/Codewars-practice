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
    





