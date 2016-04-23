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
    console.log(sumFib);
};
