var var1 = 0;
var var2 = 1;
evenFibonacci = [];

for(num = 1; num <= 60; num ++) {
    var3 = var1+var2;
    if (var3 < 4000000 && var3 % 2 === 0){
    evenFibonacci.push(var3)};
    var1=var2;
    var2=var3;
};

console.log(evenFibonacci);

var sumFib = 0;

for(num = 11; num = evenFibonacci.length; num--) {
    sumFib = sumFib + evenFibonacci.pop();
};

console.log(sumFib);

// for a much simpler solution, this is better:

var a = 0;
var b = 1;
var c = 0;
var total = 0;

function evenFib(){
	while(c < 4000000){
		c = a + b;
		a = b;
		b = c;
		if(c % 2 === 0){
			total = c + total;
		}
	}
	return total;
}

evenFib();
