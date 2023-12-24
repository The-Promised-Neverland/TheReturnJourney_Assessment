/**
 * Finds and returns an array containing common elements between two input arrays.
 * The function ensures that the returned array is sorted and contains only unique common elements.
 * 
 * @param {number[]} arr1 - The first input array of integers.
 * @param {number[]} arr2 - The second input array of integers.
 * @returns {number[]} - A new array containing common elements between arr1 and arr2, sorted in ascending order.
 * 
 * @class {MergeSort} - To sort the input arrays efficiently using the MergeSort class.
 * 
 * @helper {searchInarr2} - A binary search algorithm to efficiently search for an element in arr2.
 * 
 * @testing - npm run testCommonElements
 * 
 * @remarks
 * The function utilizes a binary search algorithm to efficiently search for each element of arr1 in arr2.
 * It assumes that the input arrays may contain duplicates, and the output array will only include unique common elements.
 * The output array is sorted for consistency. Again, a set could have been used to identify the common elements, but given
 * the constraints of the question, avoided it. Sorting allowed us to escape duplication and efficient searching.
 * 
 * @Sample_Cases
 * 
 * Case 1:
 *      Input - arr1=[1,1,5,2,1,2], arr2=[1,4,2,6,2]
 *      Output - [1,2]
 * 
 * Case 2:
 *      Input - arr1=[1,5,9,1,2,3], arr2=[1,9,2,2,3]
 *      Output - [1,2,3,9]
 * 
 */



// Importing mergeSort class
import MergeSort from "../MergeSort.js"

const commonElementsBetweenTwoArrays = (arr1, arr2) => {
    arr1 = new MergeSort(arr1).sort();
    arr2 = new MergeSort(arr2).sort();
    const res = [];
    for (let i = 0; i < arr1.length; i++) {
        if (i > 0 && arr1[i] === arr1[i - 1]) {  // ignoring duplicates
            continue;
        }
        const isCommon = searchInarr2(arr2, arr1[i]);
        if (isCommon) {  // if common, then store the element
            res.push(arr1[i]);
        }
    }

    return res;
}

/**
 * Binary search algorithm to efficiently search for an element in a sorted array.
 * 
 * @param {number[]} arr - The input sorted array.
 * @param {number} x - The element to search for in the array.
 * @returns {boolean} - True if the element is found; otherwise, false.
 */
const searchInarr2 = (arr, x) => {
    let low = 0;
    let high = arr.length - 1;
    while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        if (arr[mid] === x) {
            return true;
        } else if (arr[mid] > x) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
    return false;
}

export default commonElementsBetweenTwoArrays;