/* Build a function mergeSort that takes in an array and returns a sorted array, 
using a recursive merge sort methodology. 
An input of [3, 2, 1, 13, 8, 5, 0, 1] should return [0, 1, 1, 2, 3, 5, 8, 13], 
and an input of [105, 79, 100, 110] should return [79, 100, 105, 110]. */
/* 
Tips:
1) Think about what the base case is and what behavior is happening again and again 
and can actually be delegated to someone else (e.g. that same function!).

2) It may be helpful to check out the background videos again 
if you don’t quite understand what should be going on.
*/

function merge(leftArray, rightArray) {
    let combinedArray = [];

    //initialize pointers for both arrays
    let leftPointer = 0;
    let rightPointer = 0;

    //loop to compare pointers and append smaller to combinedArray
    while (leftPointer < leftArray.length && rightPointer < rightArray.length) {
        if (leftArray[leftPointer] > rightArray[rightPointer]) {
            combinedArray.push(rightArray[rightPointer]);
            rightPointer++;
        } else {
            combinedArray.push(leftArray[leftPointer]);
            leftPointer++;
        }
    }
    
    //after loop ends, append any remaining elements
    while (leftPointer < leftArray.length) {
        combinedArray.push(leftArray[leftPointer]);
        leftPointer++;
    }
    while (rightPointer < rightArray.length) {
        combinedArray.push(rightArray[rightPointer]);
        rightPointer++;
    }

    return combinedArray;
}


function mergeSort(array) {
    //base step
    if (array.length <= 1) {
        return array;
    }

    //recursive step
    if (array.length > 1) {
        //divide array in two halves
        let mid = Math.ceil(array.length / 2);
        let leftArray = array.slice(0, mid);
        let rightArray = array.slice(mid);

        //sort each half
        let leftSorted = mergeSort(leftArray);
        let rightSorted = mergeSort(rightArray);

        return merge(leftSorted, rightSorted);
    }
}

console.log(mergeSort([0, 15, 3, 2]));