/* command - node script.js */
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

/* 5 steps to solve recursion
1) Simplest possible input (base case):
 number = 0
 result = [] (empty array)
 since quantity of fibonacci numbers in sequence is zero

 or number = 1
 result = [0]
 1 number of fib sequence is [0] (it starts with 0 then 1, 1, 2, 3 etc.)

2) Play around with examples and visualize:
    fibResc(number) -> array.length == number;

    fibResc(0) -> []
    fibResc(1) -> [0]
    fibResc(2) -> [0, 1] OR fibResc(number-1) + 1
    fibResc(3) -> [0, 1, 1] OR fibResc(number-1) + 1
    fibResc(4) -> [0, 1, 1, 2] OR fibResc(number-1) + 2
    fibResc(5) -> [0, 1, 1, 2, 3] OR fibResc(number-1) + 3
    fibResc(6) -> [0, 1, 1, 2, 3, 5] OR fibResc(number-1) + 5
    fibResc(7) -> [0, 1, 1, 2, 3, 5, 8] OR fibResc(number-1) + 8 
    fibResc(8) -> [0, 1, 1, 2, 3, 5, 8, 13] OR fibResc(number-1) + 13
3) Relate hard cases to simpler cases:

    each fibResc = fibResc(-1) + next number in fib sequence

4)Generalise the pattern

5) write code

*/
/* Задумался о двух подходах:

1)Как должно быть - так и делаем
            VS
2)Как делаем - так и должно быть 
1 предполагает влияние на что то своей волей
2 предполагает принятие особенностей действия
*/

