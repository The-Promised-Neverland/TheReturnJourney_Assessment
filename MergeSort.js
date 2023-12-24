class MergeSort {
    constructor(arr) {
        this.arr = arr;
    }

    sort() {
        return this.mergeSort(this.arr);
    }

    mergeSort = (arr) => {
        if (arr.length <= 1) {
            return arr;
        }

        const mid = Math.floor(arr.length / 2);

        const leftHalf = [];
        for (let i = 0; i < mid; i++) {
            leftHalf.push(arr[i]);
        }

        const rightHalf = [];
        for (let i = mid; i < arr.length; i++) {
            rightHalf.push(arr[i]);
        }

        const leftSorted = this.mergeSort(leftHalf);
        const rightSorted = this.mergeSort(rightHalf);

        return this.merge(leftSorted, rightSorted);
    }

    merge = (left, right) => {
        let result = [];
        let leftIndex = 0;
        let rightIndex = 0;

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }

        while (leftIndex < left.length) {
            result.push(left[leftIndex]);
            leftIndex++;
        }

        while (rightIndex < right.length) {
            result.push(right[rightIndex]);
            rightIndex++;
        }

        return result;
    }
}

export default MergeSort;