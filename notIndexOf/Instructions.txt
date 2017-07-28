You may be familiar with a well-known indexOf function, which returns the position of the first occurrence of a specified value in a givenString.

Today, your task is to implement the notIndexOf function. Given givenString and a value, this function should return the first position i of givenString, such that there's no match between any character of value and the characters of givenString starting at i. If there's no such position, it should return -1 instead.

Example

    For givenString = "Welcome to CodeFights!" and value = "Back to school",
    the output should be
    notIndexOf(givenString, value) = 2.

    Here's why:
        At position 0, the strings Welcome to Cod and Back to school should be compared. Since the character 'o' at position 12 is a common character, it is not the answer.
        At position 1, the strings elcome to Code and Back to school should be compared. They have matching characters at positions 2 (character 'c') and 11 (character 'o').
        At position 2, the compared strings are lcome to CodeF and Back to school. They have no common characters.

    Thus, the answer is 2.

    For givenString = "Zoo" and value = "oo", the output should be
    notIndexOf(givenString, value) = -1.

    Both at positions 0 and 1, there is at least one matching character 'o' between the two strings. Thus, the answer is -1.

Input/Output

    [time limit] 4000ms (js)

    [input] string givenString

    Guaranteed constraints:
    0 ≤ givenString.length < 500.

    [input] string value

    Guaranteed constraints:
    0 < value.length < 500.

    [output] integer

    The index of the first non-matching position, or -1 if there is none.


Test 1
Input:

givenString: "Welcome to CodeFights!"
value: "Back to school"

Expected Output:

2


Test 2
Input:

givenString: "Zoo"
value: "oo"

Expected Output:

-1


Test 3
Input:

givenString: "Oh, some strange char"
value: "0,sm tag h"

Expected Output:

10


Test 4
Input:

givenString: "Oh, some strange char"
value: "0,sm tag hr"

Expected Output:

-1


Test 5
Input:

givenString: "abc"
value: "abc"

Expected Output:

-1


Test 6
Input:

givenString: "The indexOf method returns the position of the first occurrence of a specified value in a string."
value: "Teidxfmto eun h oiino h is curneo"

Expected Output:

38

