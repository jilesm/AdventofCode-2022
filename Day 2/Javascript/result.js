// a x rock 1
// b y paper 2
// c z scissors 3


const input = require('fs')
    .readFileSync("data.txt",)
    .toString()
    .split(/\r?\n/)


let ans = 0;
let ans2 = 0
//Iterate over the data to split into opp picks and my picks
for (let i = 0; i < input.length; i++) {
    let [opp, me] = input[i].split(" ")
    ans += part1(opp, me)
    ans2 += part2(opp, me)
}

console.log({ans})
console.log({ans2})


function part1(opp, me) {
    if (opp == "A") {
        switch(me) {
            case "X":
                return 4
                break
            case "Y":
                return 8
                break
            case "Z":
                return 3
        }
    }else if (opp == "B") {
        switch(me) {
            case "X":
                return 1
                break
            case "Y":
                return 5
                break
            case "Z":
                return 9
        }
    } else if (opp == "C") {
        switch(me) {
            case "X":
                return 7
                break
            case "Y":
                return 2
                break
            case "Z":
                return 6
        } 
    } else {
        console.log(`invalid input ${opp}, ${me}`)
    }
}


function part2(opp, me) {
    if (opp == "A") {
        switch(me) {
            case "X":
                return 3
                break
            case "Y":
                return 4
                break
            case "Z":
                return 8
        }
    }else if (opp == "B") {
        switch(me) {
            case "X":
                return 1
                break
            case "Y":
                return 5
                break
            case "Z":
                return 9
        }
    } else if (opp == "C") {
        switch(me) {
            case "X":
                return 2
                break
            case "Y":
                return 6
                break
            case "Z":
                return 7
        } 
    } else {
        console.log(`invalid input ${opp}, ${me}`)
    }
}

