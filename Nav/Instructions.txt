This is a reverse challenge, enjoy!

Input/Output

    [time limit] 4000ms (js)

    [input] string d

    A string containing characters '>', '<', '+', '^', '-' and 'v'.

    Guaranteed constraints:
    1 ≤ d.length ≤ 1000.

    [output] array.integer

    An array of three elements.


Test 1
Input:

d: ">"

Expected Output:

[0, 1, 0]


Test 2
Input:

d: "+"

Expected Output:

[0, 0, 1]


Test 3
Input:

d: "---<"

Expected Output:

[0, -1, -3]


Test 4
Input:

d: "+-<>^v"

Expected Output:

[0, 0, 0]


Test 5
Input:

d: "^-^+^-^+^<^>^<^>^-^+^^"

Expected Output:

[-12, 0, 0]


Test 6
Input:

d: "v>>^<>>^vv^+>^+-<-^<^^>^<>>v<+--v<>---^^<--^-><>^v+^vv^^<-^^^-^<>+v>v><v-<^+---v<^v>^+v<<>-<-<^v->+^+^+vv^-+^--v^>^<++>vvv>-v^>-<><<v-<<-^+^<<>+^v<>>^<^<v>^v>^vv<-v>-^-<vv+^>vv+++<^^<><><^>>-<<^><+---v+<+>-^v<->>vvvv^>+<-^>^>++<^v<<<<->v+<v>>vv^>-><+<-^-<v->>+v^^--><+-+^><vv<<-^<<-^-++<v^+v+--<----+<^v+vv-<v^v<-<+-^-^v<-+^v>^+v>vv<><>+-+^><<<^v>>^++^+++v>vv-vv--<^^<<-v-^^+<-+<^<vv<v^>-v-^vv><+++^^^<<-^<^+<->+v^><^>v<v--v-^v+^^-v+<<<+>>+^v-><><^^^+-^v>-v-^<--+<^+^+v>+v<<<^<<v>v^+^-<^^^+->><<+<>>->+<v-^>v+>-+vv>+v+v^v<v>v--^<+vvv>^>v^-+v<>+>v-+^-^++-v<^^^<--v<-+^+v^vv<>>+^<^<^^^++><--v-^^-<>-<<+^^v<v<--<>>v^^>+-<+>+-<^-v^v<^>^^->^>^^-^v->+v<<<+^>-^<-^v+^>+><<>v++--->>>^<^-vv^v+<^-<>^<--<>-->>>^--v>-<>v>-^-^<>^v<<^v>v>^<>^^-^v<^--^>+^<-<+<<+^^++<<-<>v->-^-vv->>^v^^-+>v-<><v+><-vvvvv>v-^<^v+><^^+>^+<-v++<+-+^+>-^+-+>+>-+->^^v<<^<^<v+-^<<<<<->-+<--->>vv<+^-+v>->+v+>+>>+-<-<-<>^-v-v++v>>v<----^v^^-v>-<<^^<>+v+v->^vv+^<-^^>^<^v--+<v><--+vv+"

Expected Output:

[-22, -26, -39]