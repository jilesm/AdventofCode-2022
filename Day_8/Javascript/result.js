const input  = require("fs")
    .readFileSync("data.txt")
    .toString()
    .split("\r\n")
    // console.log(input)

//Seperates the string into individual numbers accross the array
const treeGrid = input.map(x => x.split("").map(Number))
// console.log(treeGrid)

const width = treeGrid[0].length - 1
const height = treeGrid.length - 1
let visTrees = 0
let highestScenicScore = 0 

for (let row = 0; row < treeGrid.length; row++) {
    for (let col = 0; col < treeGrid[row].length; col++) {
      // Phase 1
      if (isTreeVisible(row, col)) {
        visTrees++;
      }
  
      // Phase 2
      const scenicScore = getScenicScore(row, col);
      if (scenicScore > highestScenicScore) highestScenicScore = scenicScore;
    }
  }

console.log(visTrees)
console.log(highestScenicScore)
//Part 1
function isTreeVisible(row, col) {
    //Tree at the border are chill :) 
    if(row === 0 || row === height || col === 0 || col === width)
        return true
    const baseGrid = treeGrid[row][col]
    
    //Check rows
    const rowTallest = {left: 0, right: 0}
    for(const [index, tree] of treeGrid[row].entries()) {
        if(index === col && rowTallest.left < baseGrid) 
            return true;
        if (index < col && tree > rowTallest.left) rowTallest.left = tree;
        else if (index > col && tree > rowTallest.right) rowTallest.right = tree;    
    }
    if (rowTallest.right < baseGrid)
    return true

    //Check Columns
    const colTallest = {top: 0, bottom: 0};
  for (const [index, currentRow] of treeGrid.entries()) {
    if (index === row && colTallest.top < baseGrid) return true; 
    if (index < row && currentRow[col] > colTallest.top) colTallest.top = currentRow[col];
    else if (index > row && currentRow[col] > colTallest.bottom) colTallest.bottom = currentRow[col];
  };

  return colTallest.bottom < baseGrid;
}

//Part 2

function getScenicScore(row, col) {
    //Tree at the border are chill :)
    if(row === 0 || row ===height || col === 0 || col === width)
    return 0

    const crossSectionArr = [
        treeGrid[row].slice(0, col + 1).reverse(),
        treeGrid[row].slice(col),
        treeGrid.reduce((arr, thisRow, index) => index <= row ? [thisRow[col] ,...arr] : [...arr], []),
        treeGrid.reduce((arr, thisRow, index) => index >= row ? [...arr, thisRow[col]] : [...arr], [])
    ]

    return crossSectionArr.reduce((currentScore, section) => getScenicScoreForSection(section) * currentScore, 1);
}

function getScenicScoreForSection(sectionArr) {
    let scoreLeft = -1;
  
    // Index 0 is always the tree for which we're getting the score
    for (const [index, tree] of sectionArr.entries()) {
      scoreLeft++;
      if (tree >= sectionArr[0] && index > 0) break; // We can't see past this tree because it is higher than the one we're on top of
    };
    return scoreLeft;
  }