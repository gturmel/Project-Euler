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

//this loop breaks up each iteration of the array, so that we can figure out how many of each number we're going to have.
//this is comparing the length and positions within those. That's a problem, cause arr.length isn't a great target, cause it only adds a few numbers. It's always going to be really small, hence the need to look through the entirety of the final Array.

// ok, so this is the deal. if arr.length === 1, it's a prime, and it needs to go in
// else, I need to look for the special number. I need a subset of the final array for each different number in the array
// The prime adding isn't going to work that well, because a good robust function is going to add the number already.
// so now what?
// ok, so at this point I know I need to work through the length of the final array. but putting that in the for loop as the limit isn't going to work, because it's initial length is 0. I dont' really want to give it values - that's the job of the program, not me. No magic numbers!
for(var i = 0; i <= num; i++){
   if(arr[i] !== finalArray[i] && typeof arr[i] === 'number'){
      finalArray.splice(i, 0, arr[i]);
      finalArray.sort(compareNumbers);
      // console.log(arr + ' arr');
      // console.log(finalArray + ' final');
//empties out the array for the next prime factor set
      arr = [];
   }
}


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
	if(arr.length === 1){
		finalArray.push(arr[0])
	};
// iterate over the final array.
// if the value at the location of arr and finalArr are not equivalent, splice in the arr value at that index.
// there should only be one new prime in arr, because we're starting at the bottom and working our way through the primes.
	arr = [];
};

console.log(finalArray);

// return will exit the little array. maybe the whole thing?


var arr = [];
var tempArray = [];
var finalArray = [];

function compareNumbers(a, b) {
  return a - b;
};
var lcm = function(number){
	for(var num = 0; num <= number; num++){
		var target = num;
		for(var i = 2; i <= target; i++){
			while(target % i === 0){
				target = target / i;
				arr.push(i);
			}
		}
		if(arr[0] === 2 && arr.length === 1){
			finalArray.push(arr[0])
			finalArray.sort(compareNumbers);
		} else {
			arr.sort(compareNumbers);
			finalArray.sort(compareNumbers);
			for(var z = 0; z < finalArray.length; z++){
				console.log(arr + ' arr');
				console.log(finalArray + ' fin')
				// console.log(arr.length);
//clearly the problem is that if there are new primes that aren't big, it's going to bomb.
				if(arr[arr.length-1] === finalArray[z]){
					console.log('just checking')
				} else {
					// console.log('not the same');
					finalArray.splice(z, 0, arr[arr.length-1]);
					// console.log(arr + ' arr')
					// console.log(finalArray + ' final array')
					finalArray.sort(compareNumbers);
					arr = [];

					break
				}
			}
		}

	};
}
lcm(20);

console.log(finalArray);

//at this point, I realized that we needed to keep advancing the index of the final array that we're searching with each found variable. we'll just pop a new one in after we've searched the whole array. If we find a match, we'll remove that element from the arr, advance the index of the search through the final Array, and go again. In this way, we'll finally look for each number in the arr in the finalArray separately.

var arr = [];
var tempArray = [];
var finalArray = [];

function compareNumbers(a, b) {
  return a - b;
};
var lcm = function(number){
	for(var num = 0; num <= number; num++){
		var target = num;
		for(var i = 2; i <= target; i++){
			while(target % i === 0){
				target = target / i;
				arr.push(i);
			}
		}
		if(arr[0] === 2 && arr.length === 1){
			finalArray.push(arr[0])
			console.log('start only')
		} else {
		for(var i = 0; i < finalArray.length; i++){
			if(arr[0] === finalArray[i]){
				i = finalArray.indexOf(finalArray[i]+1);
				finalArray.sort(compareNumbers);
			} else {
				finalArray.splice(finalArray[i], 0, arr[0])
				finalArray.sort(compareNumbers);

			}
		}
		finalArray.sort(compareNumbers);
	}

	};
}
lcm(10);

console.log(finalArray);


//the following gets all the singleton primes
//now, for an else statement

var arr = [];
var tempArray = [];
var finalArray = [];

function compareNumbers(a, b) {
  return a - b;
};
var lcm = function(number){
	for(var num = 0; num <= number; num++){
		var target = num;
		for(var i = 2; i <= target; i++){
			while(target % i === 0){
				target = target / i;
				arr.push(i);
			};
		};
		if(arr.length === 1){
			finalArray.push(arr[0]);
		}
		arr = [];
	};
};



lcm(10);

console.log(finalArray);

// 	finalArray.splice(finalArray[i], 0, arr[0]);
