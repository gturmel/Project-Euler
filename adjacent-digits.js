// The four adjacent digits in the 1000-digit number that have the greatest product are 9 × 9 × 8 × 9 = 5832.

// 73167176531330624919225119674426574742355349194934
// 96983520312774506326239578318016984801869478851843
// 85861560789112949495459501737958331952853208805511
// 12540698747158523863050715693290963295227443043557
// 66896648950445244523161731856403098711121722383113
// 62229893423380308135336276614282806444486645238749
// 30358907296290491560440772390713810515859307960866
// 70172427121883998797908792274921901699720888093776
// 65727333001053367881220235421809751254540594752243
// 52584907711670556013604839586446706324415722155397
// 53697817977846174064955149290862569321978468622482
// 83972241375657056057490261407972968652414535100474
// 82166370484403199890008895243450658541227588666881
// 16427171479924442928230863465674813919123162824586
// 17866458359124566529476545682848912883142607690042
// 24219022671055626321111109370544217506941658960408
// 07198403850962455444362981230987879927244284909188
// 84580156166097919133875499200524063689912560717606
// 05886116467109405077541002256983155200055935729725
// 71636269561882670428252483600823257530420752963450

// Find the thirteen adjacent digits in the 1000-digit number that have the greatest product. What is the value of this product?

//Alright. This is a pretty interesting problem. There are a couple of clear first steps.
//1. Get the number into an array. I want to be able to chop up the numbers, so using an array lets me manipulate things pretty well.
//2. Split the number.
//3. move through the array, multiplying each chunk of 13 numbers together. (sounds like a for() loop!)
//4. Push those products into an array. (keeping track of the factors that made that product (maybe an object?))
//5. sort all the things, so that I know whats the greatest number

var num = '7316717653133062491922511967442657474235534919493496983520312774506326239578318016984801869478851843858615607891129494954595017379583319528532088055111254069874715852386305071569329096329522744304355766896648950445244523161731856403098711121722383113622298934233803081353362766142828064444866452387493035890729629049156044077239071381051585930796086670172427121883998797908792274921901699720888093776657273330010533678812202354218097512545405947522435258490771167055601360483958644670632441572215539753697817977846174064955149290862569321978468622482839722413756570560574902614079729686524145351004748216637048440319989000889524345065854122758866688116427171479924442928230863465674813919123162824586178664583591245665294765456828489128831426076900422421902267105562632111110937054421750694165896040807198403850962455444362981230987879927244284909188845801561660979191338754992005240636899125607176060588611646710940507754100225698315520005593572972571636269561882670428252483600823257530420752963450';

//First off, we need to define what we need. We're going to put all of these numbers in an array, so we'll need an empty array to declare. We're also going to need the number of digits that we're going to be looking for. We're going to have a number that will total the multiplied amounts, and an array to hold the final products.

var numArr = [];
var adjDigits = 13;
var sliceArr = [];
var total = 1;
var totalProd = [];

numArr = num.split('');

//using slice returns a section of the array, but does NOT alter the original array, which is pretty clutch. We'll need to use the numbers over and over again. This is the proof of concept array.

var firstFour = numArr.slice(0,4);

//Now, down to business. We'll need to do a lot of calculations, so a for loop is in order.
// We want to go through the array of numbers, but we don't need to find the product of the last 5 digits if we're looking for the product of 6 adjacent digits, so we're including the numArr.length - adjDigits in our definitions of the for loop.

for(var i = 0; i <= numArr.length - adjDigits; i++){
	sliceArr = numArr.slice(i, adjDigits + i); //here we pull out the array we need from numArr. i gives us the starting point, and adjDigits + i the end point
	for(var num = 0; num < sliceArr.length; num++){ //now we need to take the sliced array and iterate over that - multiplying all the numbers together into the total.
		var check = sliceArr[num];
		total = check * total;
		// console.log(total);
	}
	if(total !== 0){ //there are a lot of 0's in the number, so we want to filter those out. So, if the total isn't 0, add it to the product array
			totalProd.push(total);
		}
	total = 1; //finally, now that we've checked a span of numbers, we need to reset the variables so that new values can be passed in.
	sliceArr = [];
}

// console.log(totalProd);

totalProd.sort(function(a, b){ //now we need to sort. Since we don't want to have to guess the length of the array, we'll sort into descending order
	return b - a;
})

console.log(totalProd[0]); //finally, this prints out our answer

//To change the number of adjacent digits we're looking at, all we need to do is change the adjDigits variable, and the function will handle the rest.

//Thanks for reading!
