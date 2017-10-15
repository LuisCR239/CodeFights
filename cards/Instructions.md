Your task is to write a function that prints out the nth card of the standard card deck. Each of the cards has a rank which can be, in order of ascending value, a number in range from 2 to 10 (depicted as '0'), a Jack ('J'), a Queen ('Q'), a King ('K'), or an Ace ('A'). Each of the cards also has a suit: clubs ('C'), diamonds ('D'), hearts ('H'), or spades ('S').

The cards in the deck are sorted first by their suits in lexicographical order, and then by the value of their ranks. Return the nth (0-based) card in the deck as a string with a length of two, with the first character representing the rank and the second character representing the suit.

Example

    For n = 0, the output should be
    cards(n) = "2C".

    The very first card in the deck is 2 of clubs, so the answer is "2C".

    For n = 34, the output should be
    cards(n) = "OH".

    The 34th card in the deck is 10 of hearts, making the answer "0H".

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    Guaranteed constraints:
    0 ≤ n ≤ 51.

    [output] string

    A string with a length of 2, representing the nth card in the deck in the format described above.


Test 1
Input:

n: 0

Expected Output:

"2C"


Test 2
Input:

n: 34

Expected Output:

"0H"


Test 3
Input:

n: 33

Expected Output:

"9H"


Test 4
Input:

n: 51

Expected Output:

"AS"


Test 5
Input:

n: 23

Expected Output:

"QD"


Test 6
Input:

n: 17

Expected Output:

"6D"


Test 7
Input:

n: 9

Expected Output:

"JC"


Test 8
Input:

n: 27

Expected Output:

"3H"


Test 9
Input:

n: 48

Expected Output:

"JS"


Test 10
Input:

n: 44

Expected Output:

"7S"


