const input  = require("fs")
    .readFileSync("data.txt")
    .toString()
    .split(/\r?\n/)
    // console.log(input)

//Part 1
function part1() {
    let ans = 0;
    input.map(data => {
        let [section1, section2] = data.split(',');
        let [section1a, section1b] = section1.split('-').map(Number);
        let [section2a, section2b] = section2.split('-').map(Number);

        if (section2a >= section1a && section2b <= section1b) {
            ans++;
        } else if (section1a >= section2a && section1b <= section2b) {
            ans++;
        }
    });
    console.log(ans);
}

//Part 2
function part2() {
    let ans = 0;
    input.map(data => {
        let [section1, section2] = data.split(',');
        let [section1a, section1b] = section1.split('-').map(Number);
        let [section2a, section2b] = section2.split('-').map(Number);

        if (!(section1a > section2b || section2a > section1b)) {
            ans++;
        } 
    });
    console.log(ans);
}

part1();
part2();