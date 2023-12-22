import uniqueArray from './Q1_Arr_Mani.js';

test('📋 Case 1: [1, 1, 5, 2, 1, 2]', () => {
    const result = uniqueArray([1, 1, 5, 2, 1, 2]);
    expect(result).toEqual([1, 5, 2]);
});

test('📋 Case 2: [1, 2, 5, 2, 1]', () => {
    const result = uniqueArray([1, 2, 5, 2, 1]);
    expect(result).toEqual([1, 2, 5]);
});

test('📋 Case 3: []', () => {
    const result = uniqueArray([]);
    expect(result).toEqual([]);
});

test('📋 Case 4: [42]', () => {
    const result = uniqueArray([42]);
    expect(result).toEqual([42]);
});

test('📋 Case 5: [7, 7, 7, 7, 7]', () => {
    const result = uniqueArray([7, 7, 7, 7, 7]);
    expect(result).toEqual([7]);
});

test('📋 Case 6: [-3, -2, -3, -4, -2]', () => {
    const result = uniqueArray([-3, -2, -3, -4, -2]);
    expect(result).toEqual([-3, -2, -4]);
});

test('📋 Case 7: [0, 0, 0, 0, 0]', () => {
    const result = uniqueArray([0, 0, 0, 0, 0]);
    expect(result).toEqual([0]);
});

test('📋 Case 8: [-1, 2, -3, 4, -5, 2, 4]', () => {
    const result = uniqueArray([-1, 2, -3, 4, -5, 2, 4]);
    expect(result).toEqual([-1, 2, -3, 4, -5]);
});

test('📋 Case 9: [1.5, 2.5, 1.5, 3.5, 2.5]', () => {
    const result = uniqueArray([1.5, 2.5, 1.5, 3.5, 2.5]);
    expect(result).toEqual([1.5, 2.5, 3.5]);
});

test('📋 Case 10: [5, 5, 3, 2, 1, 2, 3, 5, 5]', () => {
    const result = uniqueArray([5, 5, 3, 2, 1, 2, 3, 5, 5]);
    expect(result).toEqual([5, 3, 2, 1]);
});
