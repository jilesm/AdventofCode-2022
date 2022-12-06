const input  = require("fs")
    .readFileSync("data.txt")
    .toString()
    .split("")

let ans = checkBuffer(input)

function checkBuffer(input) {
    for (let i = 4; i < input.length; i++) {
        let marker = input.slice(i - 4, i)
        if (isUniqueMarker(marker)) {
            return i
        }
    }   
}
console.log(ans)

function isUniqueMarker(marker) {
    for (let j = 0; j < marker.length; j++) {
        let restOfMarker = marker.slice(j + 1, marker.length +  1)
            if (restOfMarker.includes(marker[j])) {
                return false
         }
    }
    return true
}

//Part 2 Just change the iterator from 4 to 14

// const input  = require("fs")
//     .readFileSync("data.txt")
//     .toString()
//     .split("")

// let ans = checkBuffer(input)

// function checkBuffer(input) {
//     for (let i = 14; i < input.length; i++) {
//         let marker = input.slice(i - 14, i)
//         if (isUniqueMarker(marker)) {
//             return i
//         }
//     }   
// }
// console.log(ans)

// function isUniqueMarker(marker) {
//     for (let j = 0; j < marker.length; j++) {
//         let restOfMarker = marker.slice(j + 1, marker.length +  1)
//             if (restOfMarker.includes(marker[j])) {
//                 return false
//          }
//     }
//     return true
// }

