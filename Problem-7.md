# Problem 7 - 10,001st prime

## The Problem:

By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?

## The Plan of Attack:

Well, in my long and tricky attempt to solve problem 5 with arrays, I did find a way to figure out how to get prime numbers. I might just try and attach a counter to the while loop, count until I hit 10,001, and then return the number. Is that going to take forever? Maybe. Is there a better way to find a Prime? I don't think so, that's what makes Primes so valuable to cryptography.

That's all well and good, but lets plan a bit more before jumping into crazy code.

I want a variable to increment when a prime is found. The stop condition for the loop is that variable = 10,001.
I'm going to need a variable that counts up from 1, that will be the number that we're checking for prime.
I need a loop that runs until # of primes found = 10,000, that also increments the prime variable.

Holy cow, the [Sieve of Eratosthenes](https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes) is cool!

Ok, lets break this down like the LCM problem got broken down. First step: calc a prime. Once we get that, we plug that into a for loop, and go from there. The dream. 
