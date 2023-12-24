import uniqueArray from './Q1_Arr_Mani.js';
import { testCases } from "./testCases.json";

testCases.forEach((testCase, index) => {
    test(`📋 ${testCase.description}`, () => {
        const result = uniqueArray(testCase.input);
        expect(result).toEqual(testCase.expectedResult);
    });
});