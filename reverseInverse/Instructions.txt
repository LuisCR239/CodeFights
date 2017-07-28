Given a string s, your mission is to apply the following easy-to-comprehend algorithm to it:

    Find all the words in s, where a word is a sequence of consecutive alphanumeric characters with no other letters around it;
    Reverse the characters in each word;
    For each word, swap the cases of its characters so that the case of a character at each position differs from the case at the corresponding position of the original (unreversed) word.

Return the obtained string as the answer.

Example

For s = "So, what is CodeFights?", the answer should be
reverseInverse(s) = "oS, TAHW SI sTHGiFEDOC?".

There are 4 words in s: "So", "what", "is", and "CodeFights". Let's take the word "CodeFights" as an example:

    The letters 'C' at index 0 and letter 'F' at index 4 are uppercase, while all the other letters are lowercase;
    "codefights" reversed becomes "sthgifedoc";
    With the cases swapped, the letters at indices 0 and 4 should be lowercase and all the other letters should be uppercase;
    Thus, the final word is "sTHGiFEDOC".

Input/Output

    [time limit] 4000ms (js)

    [input] string s

    A string containing only alphanumeric characters and punctuation marks.

    Guaranteed constraints:
    0 ≤ s.length < 500.

    [output] string

    The result of applying the algorithm described above to s.


Test 1
Input:

s: "So, what is CodeFights?"

Expected Output:

"oS, TAHW SI sTHGiFEDOC?"


Test 2
Input:

s: "Hey, What's Up!"

Expected Output:

"yEH, tAHW'S pU!"


Test 3
Input:

s: "First question: How do CodeBots work?"

Expected Output:

"tSRIF NOITSEUQ: wOH OD sTOBeDOC KROW?"


Test 4
Input:

s: "Levels and XP play a key role in CodeFights and they both are tightly correlated. Here's how it all works:"

Expected Output:

"sLEVEL DNA px YALP A YEK ELOR NI sTHGiFEDOC DNA YEHT HTOB ERA YLTHGIT DETALERROC. eREH'S WOH TI LLA SKROW:"


Test 5
Input:

s: "Earning Experience Points (XP) is what drives your level up."

Expected Output:

"gNINRAE eCNEIREPXE sTNIOP (px) SI TAHW SEVIRD RUOY LEVEL PU."


Test 6
Input:

s: "3 days to go. Get your 100 images for $100."

Expected Output:

"3 SYAD OT OG. tEG RUOY 001 SEGAMI ROF $001."