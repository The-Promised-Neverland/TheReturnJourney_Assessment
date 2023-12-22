/** 
* Input- two array of integers
* Output - array
* Requirement - New array should common elements between two input arrays
* Condition - No use of built-in functions 
* Assumptions - 1) Returned array will be sorted.
                2) Duplicates might exist in both array, and output will contain unique common elements


Sample Cases:

Case 1:
Input - arr1=[1,1,5,2,1,2] ,  arr2=[1,4,2,6,2]
Output - [1,2]


Case 2:
Input - arr1=[1,5,9,1,2,3] ,  arr2=[1,9,2,2,3]
Output - [1,2,3,9]



Run all tests by command - npm run testCommonElements
*/


const searchInarr2 = (arr, x) => {
    let low=0;
    let high=arr.length-1;
    while(low<=high){
        const mid=Math.floor((low+high)/2);
        if(arr[mid]===x){
            return true;
        }
        else if(arr[mid]>x){
            high=mid-1;
        }
        else{
            low=mid+1;
        }
    }
    return false;
}

const commonElementsBetweenTwoArrays = (arr1,arr2) => {  // Time Complexity - O(N * logN)
    arr1.sort();
    arr2.sort();
    const res=[];
    for(let i=0;i<arr1.length;i++){
        if(i>0 && arr1[i]===arr1[i-1]){  // ignoring duplicates
            continue;
        }
        const isCommon=searchInarr2(arr2,arr1[i]);
        if(isCommon){
            res.push(arr1[i]);
        }
    }

    return res;
} 

export default commonElementsBetweenTwoArrays;

