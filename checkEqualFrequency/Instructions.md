Given array of integers, check whether each integer, that occurs in it, is contained there the same number of times as any other integer from the given array.

Example

    For inputArray = [1, 2, 2, 1], the output should be
    checkEqualFrequency(inputArray) = true;
    For inputArray = [1, 2, 2, 3, 1, 3, 1, 3], the output should be
    checkEqualFrequency(inputArray) = false.

Input/Output

    [time limit] 4000ms (js)

    [input] array.integer inputArray

    Guaranteed constraints:
    1 ≤ inputArray.length ≤ 5 · 104,
    1 ≤ inputArray[i] ≤ 4 · 108.

    [output] boolean


Test 1
Input:

inputArray: [1, 2, 2, 1]

Expected Output:

true


Test 2
Input:

inputArray: [1, 2, 2, 3, 1, 3, 1, 3]

Expected Output:

false


Test 3
Input:

inputArray: [239]

Expected Output:

true


Test 4
Input:

inputArray: [239, 240, 241]

Expected Output:

true


Test 5
Input:

inputArray: [34, 23, 33, 23]

Expected Output:

false


Test 6
Input:

inputArray: [1, 1, 1, 1, 1]

Expected Output:

true


Test 7
Input:

inputArray: [100000000, 400000000, 200000000, 400000000, 200000000, 100000000]

Expected Output:

true


Test 8
Input:

inputArray: [19, 33, 33, 23]

Expected Output:

false


Test 9
Input:

inputArray: [2, 2, 2, 1, 1]

Expected Output:

false


Test 10
Input:

inputArray: [1, 3, 1, 2, 3, 2, 1, 2, 3]

Expected Output:

true