# Largest Prime Factor

## The Problem

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?

## Initial Plan of Attack:

### But first, an overview:

Prime factorization is the process of breaking down a number into the prime numbers that make it up. For example. The Prime factors of 4 are 2 x 2. The prime factors of 49 are 7 x 7. The the prime factors of 48 are 2 x 2 x 2 x 2 x 3. Every number can be represented as a factor of prime numbers, as stated by the [Fundamental Theorem of Arithmatic](https://en.wikipedia.org/wiki/Fundamental_theorem_of_arithmetic).

### So now what?

We know that we need to take our number, divide it by prime numbers, and then see what the largest prime number is that goes into this number. We don't know how many iterations this will take, and we are going to want to repeat until all the numbers are prime. This sounds like a pretty involved if-else tree. Or a while loop.

### Attempt 1:

I need an array of prime numbers to pull divisors from. If I was going to be using this piece of code repeatedly, I should include all the prime numbers. The number I'm factoring does not have an even number as the end, so 2 is probably not going to show up. It'll be present in the Prime array anyway.
I need an array to push the factors into.
Then, some logic to tie the two together. The end point is a little fuzzy, but we'll get there.

#### Problems with Attempt 1.

I've not even started yet, and I'm already aware of the problem with the array of Prime numbers. What happens when it isn't divisible by any prime but a really large one? This goes back to something that I've been trying to keep in mind: Don't hard-code values!
If I'm not going to hard code the primes, how do I determine if a number is prime?

## Dr. Google

So, I found a few great examples of how to fix this. The one that I found most helpful was this [YouTube](https://www.youtube.com/watch?v=J3E3_w5oZ-4) video. I didn't stop watching fast enough, and had the ending spoiled.

## The Code:

```
var num = 48;
var factors = [];
```

At the top, we're defining our variables. This is the number that we're going to be factoring, as well as the array that we're going to push all the factors into.


```
function primeFactors(num){
	for(var i = 2; i <= num; i ++){
		while (num % i === 0){
```
So, this is the backbone of our function. We've got it defined as primeFactors, so it doesn't just run automatically. Then we start our **for** loop at 2. Everything gets divided by 1, so it's not relevant to this issue.
The **While** loop is the really interesting part. Since the number that we're passing in is divisible by 2 many times, and we want to be sure that we capture all of those 2's, the **While** loop is the right choice.  It's going to take the number that we're dividing, divide it by our variable prime i, and continue to do so until `num % i` returns anything but 0. At that point, the **while** loop resolves, and the **for** loop adds one to i, and sends i back to the **while** loop. This combination of the **for** loop and the **while** is where the magic happens. These two loops are what's ensuring that only Primes are dividing our number. Since it starts at 2 and divides until the answer is odd, no other even number will divide num. Then 3 has a turn, and no multiple of 3 will divide num. 

```         
			factors.push(i);
			num = num / i;
		}
	}
}
```
Now, this is what the **while** loop does. Since `num % i === 0`, we want to add this number to the factors. We also want to divide num by i, because that will bring num down to the prime factors that we're looking for.

```
primeFactors(num);

console.log(factors[factors.length - 1]);
```
Finally, we all the function, and log out the last item in the array, to find our largest Prime Factor.

Thanks for reading!
