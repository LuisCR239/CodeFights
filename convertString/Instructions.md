You are given the string s. Your friend just asked you if it's possible to change the string from s to a string t by removing some characters from it. You're a pro at programming, so you decided to create a program to determine this.

Example

    For s = "ceoydefthf5iyg5h5yts" and t = "codefights", the output should be
    convertString(s, t) = true.
    For s = "addbyca" and t = "abcd", the output should be
    convertString(s, t) = false.

Input/Output

    [time limit] 4000ms (js)

    [input] string s

    A string with alphanumeric characters.

    Guaranteed constraints:
    1 ≤ s.length ≤ 1000.

    [input] string t

    A string with alphanumeric characters.

    Guaranteed constraints:
    1 ≤ t.length ≤ 1000.

    [output] boolean

    Return true if it is possible to convert s to t, otherwise return false.


Test 1
Input:

s: "ceoydefthf5iyg5h5yts"
t: "codefights"

Expected Output:

true


Test 2
Input:

s: "addbyca"
t: "abcd"

Expected Output:

false


Test 3
Input:

s: "abc"
t: "abc"

Expected Output:

true


Test 4
Input:

s: "a"
t: "abc"

Expected Output:

false


Test 5
Input:

s: "gooddaywithcoffee17righteh"
t: "gowithcoffe1e"

Expected Output:

true


Test 6
Input:

s: "aaaAaaaAbbBbcCcc"
t: "aBc"

Expected Output:

true


Test 7
Input:

s: "spjrtytmeed"
t: "spotme"

Expected Output:

false


Test 8
Input:

s: "7hi50n3735c453101"
t: "333"

Expected Output:

true