Grawg and Lawg want to start a shop for making pitchforks and torches.

Grawg, who's not the brightest, works at the cash register and takes orders from the customers. The customers are quite frustrated and they keep changing their orders, which is why the short coded list of orders that Grawg writes is jumbled with canceled orders.

Lawg is the one fulfilling the orders, and he can't read. The guys need you to help Lawg make sense of Grawg's notes by drawing a picture of each order, which Lawg will be able to understand.

Each order consists of 3 aspects of the pitchfork: the type of tines, the type of handle, and its length. Grawg writes down each aspect as the customer names it, so the last one is what the customer decided to go for. Be sure to only use the last occurrence of each aspect that is scrawled on the order.

Each order also contains an indication of whether the customer wants a torch or not. Grawg writes a 'T' to order a torch, and another 'T' to cancel the order for a torch. Torches are usually left-handed, and are depicted with "~o>==". If a customer orders a left-handed pitchfork, they should be given a right-handed torch, which should be depicted as "==<o~".

There are 4 types of tines that can be used:
Type 	Grawg's note 	Pictorial representation
Normal 	N 	E
Left-handed 	L 	Ǝ
Fancy 	F 	£
Clearance 	C 	F

There are 3 types of handles that can be used:
Type 	Grawg's note 	Pictorial representation
Small 	S 	-
Medium 	M 	=
Grande 	G 	≡

The length of a handle is given as an integer. You can assume that a customer never changes the length right after saying it.

Examples

For

orders = ["TFS6", 
          "T3TFB15NFCFFFCNMGLLGFLTTMGTSTT"]

the output should be
grawgAndLawg(orders) = ["~o>== ------£", "Ǝ--------------- ==<o~"].

    "TFS6" stands for a torch and a fancy pitchfork with simple handle of length 6.
    "T3TFB15NFCFFFCNMGLLGFLTTMGTSTT" is a complex order received from a customer who changed his mind a lot. Since the last tine specified is 'L', the last handle size is 'S', the last integer is 15, and there is an odd number of 'T's present, the customer expects to get a left-handed pitchfork with a simple handle of length 15, and a right-handed torch.

Input/Output

    [time limit] 4000ms (js)

    [input] array.string orders

    A list of orders, where each order is guaranteed to contain only valid aspects as described above. It is also guaranteed that each order contains at least one indicator of each aspect and an integer. Each integer in the order is guaranteed to be greater than 0 and less than 6000.

    Guaranteed constraints:
    1 ≤ orders.length ≤ 20,
    3 ≤ orders[i].length ≤ 100.

    [output] array.string

    Unicode art of the pitchforks and torches that have been ordered.


Test 1
Input:

orders: ["TFS6", 
 "T3TFB15NFCFFFCNMGLLGFLTTMGTSTT"]

Expected Output:

["~o>== ------£", 
 "Ǝ--------------- ==<o~"]


Test 2
Input:

orders: ["4GN"]

Expected Output:

["≡≡≡≡E"]


Test 3
Input:

orders: ["FSN4G6", 
 "NG4FS"]

Expected Output:

["≡≡≡≡≡≡E", 
 "----£"]


Test 4
Input:

orders: ["NLFCTTSMGTMMSMSMGTTTTTTT234T5C", 
 "CFFFCFLCNGGGMMSSG34", 
 "TTTTTTTTTTTTTT4LLLLLLL5MT"]

Expected Output:

["~o>== ≡≡≡≡≡F", 
 "≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡E", 
 "Ǝ===== ==<o~"]