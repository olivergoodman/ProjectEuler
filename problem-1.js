//problem-1
//Find the sum of all the multiples of 3 or 5 below limit (1000).

function multiplesThreeFive(limit){
    var sum = 0;
    for (var i = 1; i < limit; i++){
        if (i%3 === 0 || i%5 === 0){
            sum += i;
        }
    }
    console.log(sum);
}