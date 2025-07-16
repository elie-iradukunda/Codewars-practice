


function sumMultiplies(n,m){
    let sum=0;
    for(let i=n;i<m;i+=n){
        sum +=i
    }
    return sum;





}
console.log(sumMultiplies(3,13))


/*Add the value "codewars" to the websites array.
After your code executes the websites array should == ["codewars"]*/

var websites=[];
websites.push('codewars')

console.log("websites",websites)


/*The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument and return the two highest numbers within the array. 
The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. 
The array will always include at least 2 items. 
If there are two or more oldest age, then return both of them in array format.
*/


function twoOldestAges(ages){
for (let i = 0; i< ages.length; i++) {
  return ages.filter((element,index)=>element.indexOf())
   
    }
   

}
 console.log(twoOldestAges([2,3,4,5,6,9]))
