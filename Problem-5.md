# The Least Common Multiple

## Overview:

Here's the problem: 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.  

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?  

I was going to tackle this with a series of loops, array logic, and some Prime Factorization. While this is still an avenue that I'm going to go down, after spending quite a lot of time trying to sort the various issues out, I'm going to switch gears to a more efficient algorithm.
Specifically, lets break down the problem into two parts that are both recognized mathematically. First, we'll start with the Wikipedia page on the [Least Common Multiple](https://en.wikipedia.org/wiki/Least_common_multiple#Computing_the_least_common_multiple). Lots of ways to get there - from Prime Factorization to using the Greatest Common Divisor (GCD) to 'A Simple Algorithm' that doesn't really look simple, but definitely bears a closer look. My first attempt was to use the Prime Factorization method to find and identify the least number of prime factors in the numbers of the range that we're studying. I was running into issues once the primes no longer equaled two, or were no longer continuous. It feels like I was on the cusp of solving it, but I've been working at the problem for a while now, and so far the eureka moment has eluded me. In the interests of getting the problem solved, I'm going to use the [GCD method](https://en.wikipedia.org/wiki/Euclidean_algorithm). Further, there's a brute-force method that I found when googling around, and while it does work, it doesn't seem very efficient. I'd rather do some relatively simple calculations on a range of numbers than keep iterating one number, checking, and iterating again.

## Pseudo-Code:

We're going to need a function or two, definitely a loop, and then pass in the variables that we need.

### Function 1 - LCM
This function will need to:
1. Accept a range of numbers (a, b)
   - ensure that 0 isn't passed for either of the numbers (helper function?)
2. Loop from a to b, incrementing each loop (i)
3. Pass a and b into the GCD function
4. Store the result in a variable on the first pass, and multiply it by each further result.
5. Log out the result.

### Function 2 - GCD
This function will need to:
1. Take in the passed values (a, i)
   - It's taking in i from the loop, as a number in the range of a to b
2. It does this equation: `i - a = r`
   - i will always be larger than a because we're going one by one through the range from a to b.
      - that won't be true if the number a doesn't completely subtract from i, so we'll need to have an `a > i` case
   - if r = 0, a = GDC for a and i
   - a while loop may be better. while (r > 0){ i - a = r}
   - Also! what happens when `i - a < 0`? At that point, we would need to add a to the mix.
   - it also needs to, at the very end of the equation, set `i = a`, so that we keep moving down the range.
   - we need to return the GCD at the end of the while loop for a and i, so that we can multiply that with the other GCD's, then divide the product of our range with the product of GCD's.

## Onto the code

function gcd(a, b){
   while(a !== b){
      if(a > b){
      	a = a - b;
      } else
      b = b - a;
   }
   return a
}

function lcm(a,b){
   if(typeof(a) !== 'number' || typeof(b) !== 'number'){
      alert("Please pass in two numbers that define the endpoints of the range that you'd like to get the LCM for");
   } else if ( a < 1 || b < 1 || b < a){
      alert('Please pass in two non-zero positive integers, starting with the smallest integer first');
   } else {
      for(var a; a <= b; a++){
         gcd(a,b);
      }
   }
}

gcd(1, 20);

var result;

function gcd(a, b){
  while(a !== b){
      if(a > b){
      	a = a - b;
      	// console.log(a)
      } else {
      	b = b - a;
      	// console.log(b)
  	  }
	}
	return a;
}

function lcm(r ,b){
   if(typeof(r) !== 'number' || typeof(b) !== 'number'){
      alert("Please pass in two numbers that define the endpoints of the range that you'd like to get the LCM for");
   } else if ( r < 1 || b < 1){
      alert('Please pass in two non-zero positive integers, starting with the smallest integer first');
   } else {
      	return (r / gcd(r,b)) * b;
   }

}

// lcm(7, 10);

function smallestMultiple(end){
	var x = 1;
	for(var i = 1; i <=end; i++ ){
		x = lcm(x, i);
	}
	return x;
}

smallestMultiple(20);

// function gcd(a, b)
//     while a ≠ b
//         if a > b
//           a := a − b;
//         else
//           b := b − a;
//     return a;
