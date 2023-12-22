import commonElementsBetweenTwoArrays from './Q3_Logi_Ops.js';

test('📋 Case 1: [1, 1, 5, 2, 1, 2] and [1, 4, 2, 6, 2]', () => {
    const result = commonElementsBetweenTwoArrays([1, 1, 5, 2, 1, 2], [1, 4, 2, 6, 2]);
    expect(result).toEqual([1, 2]);
});

test('📋 Case 2: [1, 5, 9, 1, 2, 3] and [1, 9, 2, 2, 3]', () => {
    const result = commonElementsBetweenTwoArrays([1, 5, 9, 1, 2, 3], [1, 9, 2, 2, 3]);
    expect(result).toEqual([1, 2, 3, 9]);
});

test('📋 Case 3: [] and [1, 2, 3]', () => {
    const result = commonElementsBetweenTwoArrays([], [1, 2, 3]);
    expect(result).toEqual([]);
});

test('📋 Case 4: [1, 2, 3] and []', () => {
    const result = commonElementsBetweenTwoArrays([1, 2, 3], []);
    expect(result).toEqual([]);
});

test('📋 Case 5: [1, 1, 1] and [1, 1, 1]', () => {
    const result = commonElementsBetweenTwoArrays([1, 1, 1], [1, 1, 1]);
    expect(result).toEqual([1]);
});

test('📋 Case 6: [1, 2, 3] and [4, 5, 6]', () => {
    const result = commonElementsBetweenTwoArrays([1, 2, 3], [4, 5, 6]);
    expect(result).toEqual([]);
});

test('📋 Case 7: [1, 2, 3] and [3, 4, 5]', () => {
    const result = commonElementsBetweenTwoArrays([1, 2, 3], [3, 4, 5]);
    expect(result).toEqual([3]);
});

test('📋 Case 8: [5, 2, 8, 2] and [2, 5, 8, 2]', () => {
    const result = commonElementsBetweenTwoArrays([5, 2, 8, 2], [2, 5, 8, 2]);
    expect(result).toEqual([2, 5, 8]);
});

test('📋 Case 9: [1, 2, 3] and [3, 2, 1]', () => {
    const result = commonElementsBetweenTwoArrays([1, 2, 3], [3, 2, 1]);
    expect(result).toEqual([1, 2, 3]);
});

test('📋 Case 10: [1, 2, 3] and [4, 5, 6, 1, 2, 3]', () => {
    const result = commonElementsBetweenTwoArrays([1, 2, 3], [4, 5, 6, 1, 2, 3]);
    expect(result).toEqual([1, 2, 3]);
});
