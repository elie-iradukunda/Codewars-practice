/*
The two oldest ages function/method needs to be completed. 
It should take an array of numbers as its argument and return
 the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

The order of the numbers passed in could be any order. 
The array will always include at least 2 items. 
If there are two or more oldest age, then return both of them in array format.
*/




function TwoOldestAges(ages){

ages.sort((a, b) => a - b);
// i have to use []  for result to come in array in return keyword
return [ages[ages.length - 2], ages[ages.length - 1]];

}
 console.log(TwoOldestAges([3,5,7,8,9]))