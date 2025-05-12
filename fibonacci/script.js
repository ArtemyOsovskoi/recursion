/* 
Using iteration, write a function fibs which takes a number 
and returns an array containing that many numbers from the Fibonacci sequence. 
Using an example input of 8, this function should return the array [0, 1, 1, 2, 3, 5, 8, 13].
*/
//iterative approach
function fibs(number) {
    let fibArray = [0];
    let previousOne = 1;
    let previousTwo = 0;

    for (let i = 0; i < number-1; i++) {
        //console.log(`step ${i}`)
        //console.log(`previousOne = ${previousOne}`);
        //console.log(`previousTwo = ${previousTwo}`);
            let nextNumber = previousOne + previousTwo;
        //console.log(`next number (sum of previous) = ${nextNumber}`);
            fibArray.push(nextNumber);
        //console.log(`push to fib Array: ${fibArray}`);
            [previousOne, previousTwo] = [previousTwo, previousOne + previousTwo];
        //console.log(`update previousOne (=previousTwo) = ${previousOne}`);
        //console.log(`update previousTwo (aka = this nextNumber) = ${previousTwo}`);
        //console.log(`step ${i} is DONE`)
    }
    return fibArray;
}
//console.log(`fibonacci sequence of:`, fibs(8));

//recursive approach
function fibsRec(number) {
    //base case
    if (number == 0) {
        return [];
    }
    if (number == 1) {
        return [0];
    }
    if (number == 2) {
        return [0, 1]
    }
    //recursive step
    let prevResult = fibsRec(number - 1);
    let lastTwo = prevResult.slice(-2);
    let nextNumber = lastTwo[0] + lastTwo[1];

    return [...prevResult, nextNumber];
}
//console.log(fibsRec(8));

