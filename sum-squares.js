// The sum of the squares of the first ten natural numbers is,
//
// 12 + 22 + ... + 102 = 385
// The square of the sum of the first ten natural numbers is,
//
// (1 + 2 + ... + 10)2 = 552 = 3025
// Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.
//
// Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.

//The first step is going to be re-creating the first part of this problem. Lets find the sum of the squares, the square of the sum. We then find the difference. After we've got that, it's a simple matter to re-adjust the span of numbers we're looking at.

//We'll declare some variables first

var sumSquare = 0; //this will be the sum of the Squares of all the numbers
var sum = 0;
var squareSum = 0; //this will be the square of sum of all the numbers.
var diff = 0; //finally, this will equal the squareSum - sumSquare

//the first for-loop is going to work through the numbers between 0 and 10, square each number, and then add them

for(var num = 0; num <=10; num++){
   var square = num * num;
   sumSquare = sumSquare + square;
}
console.log(sumSquare)

//the second for-loop works through the numbers 1-10, adds them. We then square them outside of the loop

for(var i = 0; i <=10; i++){
   sum = sum + i;
};

var squareSum = sum * sum;

console.log(squareSum);

//finally, we find the difference between the two and log it to the console.

diff = squareSum - sumSquare;

console.log(diff);

//Now, we don't really need to have two for loops, when they are covering the same range. So to DRY this up, we'll merge the two loops together.

for(var num = 0; num <=10; num++){
   var square = num * num;
   sumSquare = sumSquare + square;
   sum = sum + num;
}
var squareSum = sum * sum;

diff = squareSum - sumSquare;

console.log(diff);

//This chunk, plus the variable declaration, is all that we'll need to find the differnce in the sum of the squares and the square of the sums for any range of numbers that we're looking for.
