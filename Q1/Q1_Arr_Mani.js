/**
 * Creates a new array with unique elements from the input array.
 * The function uses MergeSort for efficient sorting.
 *
 * @param {number[]} arr - The input array containing integers.
 * @returns {number[]} - A new array containing unique elements in a sorted fashion 
 * 
 * @class {MergeSort} - To sort the input arrays efficiently using the MergeSort class.
 *
 * @testing - npm run testUniqueArray
 * 
 * @remarks
 * It is worth noting that, under different constraints allowing built-in functions, a Set could have been utilized for a potentially faster solution in maintaining uniqueness.
 * However, given the specific constraints outlined in the question (No set to be used), the chosen approach involves a trade-off between space and time complexity.
 * 
 * 
 * @Sample_Cases
 * 
 * Case 1:
 *      Input - [1,1,2,1,5]
 *      Output - [1,2,5]
 * 
 * Case 2:
 *      Input - [1,2,5,2,1]
 *      Output - [1,2,5]
 * 
 * Case 3:
 *      Input - []
 *      Output - []
 * 
 * Case 4:
 *      Input - [1]
 *      Ouput - [1]
 */


// Importing mergeSort class 
import MergeSort from "../MergeSort.js";


const uniqueArray = (arr) => {
    // Sort the input array using MergeSort
    arr = new MergeSort(arr).sort();

    // Initialize an empty array to store unique elements
    const res = [];

    // Iterate through the sorted array to extract unique elements
    for (let i = 0; i < arr.length; i++) {
        // Add the current element to the result array
        res.push(arr[i]);

        // Skip duplicates in the sorted array
        while (i + 1 < arr.length && arr[i] === arr[i + 1]) {
            i++;
        }
    }

    // Return the array containing unique elements
    return res;
}

export default uniqueArray;