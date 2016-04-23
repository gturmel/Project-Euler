// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.

var arr = [];
var arr2 = [];
var product;
var product2;

for(var num = 100; num < 1000; num++){
	for(var i = 100; i < 1000; i++){
		product = num * i;
		product2 = product.toString().split("").reverse().join("");
		// console.log(product2 + 'prod2');
		product = product.toString();
		// console.log(product + "prod");
		if(product === product2){
			arr.unshift(product);
		};
	};
};
arr.sort(function(a,b){return b-a});
console.log(arr[0]);
