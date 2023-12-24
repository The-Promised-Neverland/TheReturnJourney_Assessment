import commonElementsBetweenTwoArrays from './Q3_Logi_Ops.js';
import { testCases } from "./testCases.json";


testCases.forEach((testCase, index) => {
    test(`📋 ${testCase.description}`, () => {
        const result = commonElementsBetweenTwoArrays(testCase.arr1, testCase.arr2);
        expect(result).toEqual(testCase.expectedResult);
    });
});