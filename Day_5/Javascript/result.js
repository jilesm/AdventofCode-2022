const fs = require('fs');
const path = require('path');

const input = fs.readFileSync(path.join(__dirname, 'data.txt'), 'utf8');

const getStacks = (lines) => {
  return lines.reduce((acc, line) => {
    if (line.charAt(1) === '1') return acc;
    for (let i = 1, column = 0; i < line.length; i += 4, column++) {
      if (!acc[column]) acc[column] = [];
      if (line.charAt(i) !== ' ') {
        acc[column].push(line.charAt(i));
      }
    }
    return acc;
  }, []);
}

const getInstructions = (lines) => {
  return lines.filter(line => line.charAt(0) === 'm')
  .map(line => line.match(/\d+/gi));
}

const move = (stacks, instruction, crateMoverVersion = 9000) => {
  const [count, from, to] = instruction;

  const removed = stacks[from-1].splice(0, count);
  switch (crateMoverVersion) {
    case 9000:
      stacks[to-1].unshift(...(removed.reverse()));
      break;
    case 9001:
      stacks[to-1].unshift(...removed);
      break;
  } 
}

const solve = ( input, crateMoverVersion ) => {
  const lines = input.split('\r\n')

  const stacks = getStacks(lines);
  const instructions = getInstructions(lines);
  
  instructions.forEach( instruction => move(stacks, instruction, crateMoverVersion));

  return stacks.map( column => column[0]).join('');
}
    
// Part 1:
console.log(solve(input, 9000))
// Part 2:
console.log(solve(input, 9001))