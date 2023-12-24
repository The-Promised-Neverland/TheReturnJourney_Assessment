/** 
* Input- array of integers
* Output - array
* Requirement - New array should only contain unique elements
* Condition - No use of built-in functions 


Sample Cases:

Case 1:
Input - [1,1,2,1,5]
Output - [1,2,5]


Case 2:
Input - [1,2,5,2,1]
Output - [1,2,5]



Run all tests by command - npm run testUniqueArray
*/



import MergeSort from "../MergeSort.js";

const uniqueArray = (arr) => {
    arr = new MergeSort(arr).sort();
    const res = [];
    for (let i = 0; i < arr.length; i++) {
        res.push(arr[i]);
        while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            i++;
        }
    }
    return res;
}

export default uniqueArray;