import mergedCarProps from "./mergedCarProps.js";
import { testCases } from "./testCases.json";

testCases.forEach((testCase, index) => {
    test(`📋 Case ${index + 1}: ${testCase.description}`, () => {
        const result = mergedCarProps(testCase.car1, testCase.car2);
        expect(result).toEqual(testCase.expectedResult);
    });
});