//problem-3
//What is the largest prime factor of the num 600851475143 ?

function largestPrimeFac(num) {
    var largest = 1; 
	for (var i = 1; i <= num/2; i++) {
        if (num % i === 0) {
    		if (isPrime(i) === true) {
	    		if (i > largest) {
		    		largest = i;
			    }
		    }
        }
	}
	return largest;
}

function isPrime(num) {
	var prime = true;
	for (var i = 2; i <= num/2; i++){
		if (num % i === 0){
			return false;
		}
	}
	return prime;
}
/* ---------------------------------------------------------------------------------------------------*/

function largestPrimeFac2(num){
	var i = 2;
	while (i <= num){
    	if (num % i === 0){
    		num /= i;    
	 	} else{
	      i++;
	  	}
	}
}