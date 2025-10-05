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

//validation of forms using proxies
 
let user = { name: '' };

let proxy4 = new Proxy(user, {
  set(target, property, value) {
    if (property === 'name') {
      if (typeof value !== 'string') {
        console.log('❌ Name must be a string.');
        return true; // ✅ still return true
      }

      if (value.length <= 5) {
        console.log('❌ Name must be more than 5 characters.');
        return true; // ✅ still return true
      }

      target[property] = value;
      console.log(`✅ Name updated to: ${value}`);
      return true; // ✅ successful assignment
    }

    // Fallback for other properties
    target[property] = value;
    return true;
  }
});

proxy4.name = 123;        // ❌ Name must be a string.
proxy4.name = 'Elie';     // ❌ Name must be more than 5 characters.
proxy4.name = 'ElieJohn'; // ✅ Works fine



// am learning es6 features like classes and inheritance , destracturing, spread operator , rest operator, template literals ,arrow function , modules and proxies in javascript then help me to prepare all possible practical questions for each and how to solve
// let start by all questions for maps,sets,weakmaps and weaksets in js;
//maps
//1. create a MAP and add some key value pair to it
let map=new Map();
map.set('name','john');
map.set('age',30);
map.set('city','new yolk');
console.log(map);
// 2. get the value of a key in map
console.log(map.get('name'));
console.log(map.get('age'));
console.log(map.get('city'));
// 3. check if key is exist in map
console.log(map.has('name'));
console.log(map.has('country'));
// 4 .remove a key valuye pair from map
map.delete('age');
console.log(map);
// 5 . clear all key value pair from map
map.clear();
console.log(map);
//6 . get the size of map
map.set('name','john');
map.set('age',90);
console.log(map.size);
//7 . iterate over map
map.forEach(value=>{
    console.log(value);
});
for(let [key,value] of map){
    console.log(`${key}: ${value}`);
};
//sets
//1. create a set and add some values to it
let sets=new Set();
sets.add('apple');
sets.add('banna');
sets.add('orange');
console.log(sets);
// 2. check if value is exist in set
console.log(sets.has('apple'));
//3. remove a value from set]
sets.delete('banna');
console.log(sets);
//4. clear all values from set
// 5. get the size of sets
console.log(sets.size);
// 6. iterate over sets
sets.forEach(value=>{
    console.log(value);
});
for (let value of sets){
    console.log(value);
}
// weakmaps
//1 .create a weakmaps and add some key value pair to it
let weakmaps=new WeakMap();
let obj1={name:"john"};
let obj2={age:60};
weakmaps.set(obj1,'developer');
weakmaps.set(obj2,'doctor');
console.log(weakmaps);
// 2 get the value of a key in waekmaps
console.log(weakmaps.get(obj1));
console.log(weakmaps.get(obj2));
// 3. check if key is exist in waekmaps
console.log(weakmaps.has(obj1));
console.log(weakmaps.has({name:"developer"}));
// 4 .remove a key value pair from weakkkmaps
weakmaps.delete(obj1);
console.log(weakmaps);
// 5 . clear all key value pair from waekmaps
// weakmaos do not have clear method
// get the size of waekmaps
//weakmaps do not have size property
// 7 iterate over weakmaps
//weakmaps are not iterable
//weaksets
// 1 .crate a weaksets and add some values to it
let weaksets=new WeakSet();
let obj3={name:"kamana"};
let obj4={age:90};
weaksets.add(obj3);
weaksets.add(obj4);
console.log(weaksets);

// 2 check if value is exist in weaksets
console.log(weaksets.has(obj3));
console.log(weaksets.has({name:"kamana"}));
// 3. remove a value from weaksets
weaksets.delete(obj3);
console.log(weaksets);
// 4 clear all values from weaksets
// weaksets do not have clear methods
// get the size of weaksets
// weaksets do not have size prfoperty
// iterate over weaksets
// weaksets are not iterable
// this is all about maps , sets weakmaos and weaksets in javascript
// now i will learn about error handling in javascript
// 1. try cattch
try {
    let result=10/0;
    console.log(result);

    
} catch (error) {
    console.log(`error occured : ${error.message}`);

    
}
finally{
    console.log(`this block will always executes`);

}

//2 .throwing custom error
function checkage(age){
    if(age<18){
        throw new Error(`age must be at least 18 years old`);

    }
    return `age is valid :${age}`;

}
try {
    console.log(checkage(20));

    
} catch (error) {
    console.log(`error occured: ${error.message}`);

    
}

//3. creating custom error class
class validationError extends Error{
    customMessage(){
        return `this is a custom error message`;

    }

}
try {
    throw new validationError();

    
} catch (error) {
    console.log(error.customMessage());
    
}
// this is all about eror handling in javascript;
// now i will learn about asynchronous javascript
// 1. callbacks
function fetchData(callbacks){
    setTimeout(()=>{
        let data=`data fetched from server`;
        callbacks(data);

    },2000);

}
fetchData((data)=>{
    console.log(data);
    console.log(`processing data`)
})
// 2 . promises 
function fetchData1(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            let data=`data fetcched from server`;
            resolve (data);

        },2000);

    })

}
fetchData1()
.then((data)=>{
    console.log(data);
    console.log(`processing data`);
})
.catch((error)=>{
    console.log(`error occured :${error.message}`);

})
.finally(()=>{
    console.log(`this block will always executes`);

})

// 3. async and await
async function fetchData2(){
    try {
        let data=await fetchData2();
        console.log(data);
        console.log(`processing data`);

        
    } catch (error) {
        console.log(`error occured :${error.message}`);

        

    }
    finally{
        console.log(`this block will always executes`);

    }
}

//codewars practice
// 1. write a function that takes an array of numbers and returns the sum of all the numbers in the array
function sumArrays(arr){
    
    return arr.reduce((acc,curr)=>acc+curr,0);

}
console.log(sumArrays([1,2,3,4,5,6,7,78]));
//2 write a function that takes a string and returns the string in reverse order
function reverseString(str){
    return str.split('').reverse().join('');

}
console.log(reverseString(`hello world this is me`));
//3 write a function that takes an array of strings and returns the longes string in the array
function longestSting(arr){
    return arr.reduce((longest,current)=>{
        return current.length>longest.length? current:longest;
        
    },'');

}
console.log(longestSting(['apple','banana','orange','watermelon']));
//4 . write a function that takes a numbers and returns true if the number is prime and false otherwise
function isPrme(num){
    if(num<=1) return false;
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num%i===0) return false;

    }
    return true;

}
console.log(isPrme(11));

//5. write a function that takes an array of numbers and return a new array with only the even numbers
function evenNumbers(arr){
    return arr.filter(num=>num%2===0);

}
console.log(evenNumbers([1,2,3,4,5,6,7,7,8,8,9]));
//6 . write a function that takes a string and returns the number of vowels in the string
function countVowels(str){
    let vowels='aeiouAIeOU';
    return str.split('').filter(char=>vowels.includes(char)).length;

}
console.log(countVowels(`hello world this is meu`));
//7 . write a function that takes an array of numbers and return the largest number in the array
function largestNumber(arr){
    return Math.max(...arr);

}
console.log(largestNumber([1,3,4,5,6,7,6,4,3,3,2,2,3,433,4,5,5,6,7]));
// 8 write a function that takes a string and returns true if the string is a  palindrome and false otherwise
function isPalindrome(str){
    let reversed=str.split('').reverse().join('');

    
    if(str===reversed){
        return `${str} is a palindrome`;
    } else{
        return `  ${str}  is not a palindrome`;
    }

}

console.log(isPalindrome('madam'));
console.log(isPalindrome('hello'));

//9 . write a function that takes an array of numbers and returns the second largest number in the array
function secondLargest(arr){
    let uniqueArr=[...new Set(arr)];
    uniqueArr.sort((a,b)=>b-a);
    return uniqueArr[1];
}
console.log(secondLargest([1,2,3,4,5,6,7,5,14,3,2,4,5,6,7,8,82]));


