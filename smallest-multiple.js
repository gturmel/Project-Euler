// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
//
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

var divisors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// We're trying to find the least common multiple. In dealing with fractions, this is also known as the 'greatest common denominator'. We'll need to break our target number into prime factors, as well as each number below our target number. So, we'll need to

var target = 20;

//this code will find the prime factors for the target number.
for(var i = 2; i <=target; i++){
	while(target % i === 0){
		console.log(target + ' is the target and ' + i +' is the prime');
		target = target / i;
	}
}

//This is the second iteration. So, I took the above code and wrapped it into another for loop.
//this is getting there. I can now go through all the numbers and get the prime factors of each. Now I just need to filter for new prime factors that doesn't involve me manually identifying them.

var arr = [];


for(var num = 10; num > 0; num--){
	var target = num;
	for(var i = 2; i <= target; i++){
		while(target % i === 0){
			target = target / i;
			arr.push(i);
		}
      con
	}
}
console.log(arr);

//I need an if statement. I need a temp array and a final array. The temp array will empty out after each loop. The final will have all of my factors.
//with this temp array, I need to

var arr = [];
var tempArray = [];
var finalArray = [];

function compareNumbers(a, b) {
  return a - b;
};

for(var num = 0; num <= 20; num++){
	var target = num;
	for(var i = 2; i <= target; i++){
		while(target % i === 0){
			target = target / i;
			arr.push(i);
		}
	}
//this loop breaks up each iteration of the array, so that we can figure out how many of each number we're going to have.
	for(var i = 0; i < arr.length; i++){
		if(arr[i] !== finalArray[i]){
			finalArray.splice(i, 0, arr[i]);
			finalArray.sort(compareNumbers);
			console.log(arr + ' arr');
			console.log(finalArray + ' final');
//empties out the array for the next prime factor set
			arr = [];
		}
	}
}

finalArray.sort(compareNumbers);
console.log(finalArray);

//I realized that my temp array was just booting the same problem down the line, so I cut it out and went back to just using an arr for the primes and the final array.
//I need to split each array into a group of primes, and the concatenate the longest prime factor groups together. Is this weird? Yes. Yes it is. is this smart? That's a better question.
