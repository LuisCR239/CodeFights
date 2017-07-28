Given a matrix of words of the same length, rotate it 90° in the counterclockwise direction.

Input/Output

For

words = ["apple", 
         "anger", 
         "monks", 
         "stink"]

the output should be

wordsRotationCc(words) = ["ersk", 
                          "lekn", 
                          "pgni", 
                          "pnot", 
                          "aams"]

Input/Output

    [time limit] 4000ms (js)

    [input] array.string words

    An array of strings of equal length.

    Guaranteed constraints:
    1 ≤ words.length ≤ 20,
    1 ≤ words[i].length ≤ 20.

    [output] array.string

    The words matrix, rotated counterclockwise 90°.


Test 1
Input:

words: ["apple", 
 "anger", 
 "monks", 
 "stink"]

Expected Output:

["ersk", 
 "lekn", 
 "pgni", 
 "pnot", 
 "aams"]


Test 2
Input:

words: ["ab", 
 "cd", 
 "ef"]

Expected Output:

["bdf", 
 "ace"]


Test 3
Input:

words: ["bumfuzzles", 
 "whizzbangs", 
 "bemuzzling", 
 "puzzlingly"]

Expected Output:

["ssgy", 
 "egnl", 
 "lnig", 
 "zaln", 
 "zbzi", 
 "uzzl", 
 "fzuz", 
 "mimz", 
 "uheu", 
 "bwbp"]


Test 4
Input:

words: ["hello"]

Expected Output:

["o", 
 "l", 
 "l", 
 "e", 
 "h"]


Test 5
Input:

words: ["c", 
 "o", 
 "d", 
 "e", 
 "f", 
 "i", 
 "g", 
 "h", 
 "t", 
 "s"]

Expected Output:

["codefights"]


Test 6
Input:

words: ["sae", 
 "att", 
 "ate", 
 "ass", 
 "rot", 
 "roe", 
 "ree", 
 "rei", 
 "res", 
 "ria"]

Expected Output:

["etesteeisa", 
 "attsooeeei", 
 "saaarrrrrr"]


Test 7
Input:

words: ["pazazz", 
 "pizazz", 
 "pizzaz", 
 "jazzbo", 
 "bezazz", 
 "jazzed", 
 "zizzle", 
 "jazzes", 
 "jazzer", 
 "muzjik", 
 "whizzy", 
 "mizzly", 
 "scuzzy", 
 "fuzzed", 
 "puzzle", 
 "muzzle"]

Expected Output:

["zzzozdesrkyyydee", 
 "zzabzeleeizlzell", 
 "aazzazzzzjzzzzzz", 
 "zzzzzzzzzzizuzzz", 
 "aiiaeaiaauhicuuu", 
 "pppjbjzjjmwmsfpm"]