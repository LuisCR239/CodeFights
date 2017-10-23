You need to label a set of indices; ideally something a little more human friendly than just a number.

What was decided was to use a character, or set of characters, hyphenated with a two digit number.

Example
For n = 134 and domain = ["MONKEYS", "PENGUINS", "ZEBRAS", "LIONS"], the output should be
bijectiveNumeration(n, domain) = "PENGUINS-35".
An output of MONKEYS-01 for n=1, MONKEYS-99 for n=99, PENGUINS-01 for n=100 and so on.

Input/Output

    [time limit] 4000ms (js)

    [input] integer n

    The positional index number to be mapped to the domain.

    Guaranteed constraints:
    0 < n ≤ 3000.

    [input] array.string domain

    A list of characters or words to be used.

    Guaranteed constraints:
    0 < domain.length ≤ 100.

    [output] string

    A hyphenated string connecting a digit and a number.



Test 1
Input:

n: 134
domain: ["MONKEYS", 
 "PENGUINS", 
 "ZEBRAS", 
 "LIONS"]

Expected Output:

"PENGUINS-35"


Test 2
Input:

n: 234
domain: ["MONKEYS", 
 "PENGUINS", 
 "ZEBRAS", 
 "LIONS"]

Expected Output:

"ZEBRAS-36"


Test 3
Input:

n: 56
domain: ["A", 
 "B", 
 "C", 
 "D", 
 "E", 
 "F"]

Expected Output:

"A-56"


Test 4
Input:

n: 121
domain: ["11", 
 "22", 
 "33", 
 "44"]

Expected Output:

"22-22"


Test 5
Input:

n: 100
domain: ["@", 
 "#", 
 "$", 
 "%", 
 "^", 
 "&", 
 "*"]

Expected Output:

"#-01"