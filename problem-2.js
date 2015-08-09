//problem-2
//By considering the terms in the Fibonacci sequence whose values do not exceed limit (four million), find the sum of the even-valued terms.

function evenFib(limit){
    var sum = 0;
    var fib = [];
    fib.push(0);
    fib.push(1);
    fib.push(2);
    var length = fib.length;

    while (fib[length-1] < limit){ //generate the fib sequence up until limit
        fib.push(fib[length-1] + fib[length-2]);
        length = fib.length;
    }

    for (var i = 0; i < length; i ++) {
        if (fib[i] % 2 === 0){
    		sum = sum + fib[i];
    	}
    }
    console.log(sum);
}