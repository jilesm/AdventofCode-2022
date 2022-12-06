const input  = require("fs")
    .readFileSync("data.txt")
    .toString()
    .split(/\r?\n/)
    // console.log(input)


// Part 1    
function part1() {
    let ansList = []

    for (let j = 0; j < input.length; j++) {
        let sack = input[j]
        let half = (sack.length / 2)
        let compart1 = sack.slice(0, half)
        let compart2 = sack.slice(half, sack.length)
        let duplicate
        for (let a = 0; a < compart1.length; a++) {
            if (compart2.includes(compart1[a])) {
                duplicate = compart1[a]
            }
        }
        ansList.push(duplicate)
    }


    const lowAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const capAlphabet = lowAlphabet.toUpperCase()
    const key = lowAlphabet + capAlphabet
    let map = {}

    for (let i = 0; i < key.length; i++) {
        map[key[i]] = i + 1
    }
    let sum = 0
    ansList.forEach(x => {
        sum += map[x]
    })
    console.log(sum)
}

// Part 2
function part2() {
    let answerList = []
    for (let k = 0; k < input.length; k += 3) {
        let sack1 = input[k]
        let sack2 = input[k + 1]
        let sack3 = input[k + 2]
        let ans
        for (let s = 0; s < sack1.length; s++) {
            if (sack2.includes(sack1[s]) && sack3.includes(sack1[s])) {
                ans = sack1[s]
            }
        }
        answerList.push(ans)
    }
    const lowAlphabet = 'abcdefghijklmnopqrstuvwxyz'
    const capAlphabet = lowAlphabet.toUpperCase()
    const key = lowAlphabet + capAlphabet
    let map = {}

    for (let i = 0; i < key.length; i++) {
        map[key[i]] = i + 1
    }
    let sum = 0
    answerList.forEach(x => {
        sum += map[x]
    })
    console.log(sum)
}

part1()
part2()