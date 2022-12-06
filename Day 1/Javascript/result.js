const fs = require('fs')

const input = fs.readFileSync("data.txt", {encoding: "utf-8" })   
    .replace(/\r/g, "")
    .trim()
    .split("\n\n")

function part1() {
    const calories = input.map((line) => {
        const calories = line.split('\n').map(Number)
        return calories.reduce((previous, current) => previous+current, 0)
    });    
    
    console.log(Math.max(...calories));
}

function part2() {
    const calories = input.map((line) => {
        const calories = line.split('\n').map(Number)
        return calories.reduce((previous, current) => previous+current, 0)
    });   
    
    calories.sort((a,b) => b -a)

    console.log(calories.slice(0, 3).reduce((previous, current) => previous + current, 0)
    );
}


part1();
part2();