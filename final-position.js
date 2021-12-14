const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

const finalPosition = function (moves) {
  let location = [0, 0];  
  for (let move in moves) {
    switch(moves[move]) {
    case 'north':
      location[1]++;
      break;
    case 'south':
      location[1]--;
      break;
    case 'west':
      location[0]--;
      break;
    case 'east':
      location[0]++;
      break;
    }
  }
  return location;
};

console.log(finalPosition(moves)); //[-1,4]