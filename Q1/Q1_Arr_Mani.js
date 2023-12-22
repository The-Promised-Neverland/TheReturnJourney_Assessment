/** 
* Input- array of integers
* Output - array
* Requirement - New array should only contain unique elements
* Condition - No use of built-in functions 


Sample Cases:

Case 1:
Input - [1,1,5,2,1,2]
Output - [1,5,2]


Case 2:
Input - [1,2,5,2,1]
Output - [1,2,5]



Run all tests by command - npm run testUniqueArray
*/


const uniqueArray = (arr) => {  // O(N*N) Slower but without using any libraries and assuming range of numbers to be >=10^5
    const res=[];
    for(let i=0;i<arr.length;i++){
        let isSeen=false;
        for(let j=0;j<res.length;j++){
            if(res[j]===arr[i]){
                isSeen=true;
                break;
            }
        }
        if(isSeen===false){
            res.push(arr[i]);
        }
    }
    return res;
}

export default uniqueArray;