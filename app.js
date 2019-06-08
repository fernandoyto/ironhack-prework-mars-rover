// Rover Object Goes Here
// ======================
let rover = {
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: []
}
// ======================
function turnLeft(){
  console.log("turnLeft was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      console.log(rover.direction);
      break;
    case 'W':
      rover.direction = 'S';
      console.log(rover.direction);
      break;
    case 'S':
      rover.direction = 'E';
      console.log(rover.direction);
      break;
    case 'E':
      rover.direction = 'N';
      console.log(rover.direction);
      break;
  }
}

function turnRight(){
  console.log("turnRight was called!");
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      console.log(rover.direction);
      break;
    case 'W':
      rover.direction = 'N';
      console.log(rover.direction);
      break;
    case 'S':
      rover.direction = 'W';
      console.log(rover.direction);
      break;
    case 'E':
      rover.direction = 'S';
      console.log(rover.direction);
      break;
  }
}

function moveForward(){
  console.log("moveForward was called");

  rover.travelLog.push([rover.x, rover.y]);

  switch (rover.direction) {
    case 'N':
      if (rover.y === 0) {
        console.log(`
          Can't move forward! Rover has reached northernmost grid limit.
        `);
      } else{
      rover.y -= 1;
      console.log(rover.x + ';' + rover.y);
      }
      break;
  
    case 'S':
      if (rover.y === 9) {
        console.log(`
          Can't move forward! Rover has reached southernmost grid limit.
        `);
      } else {
      rover.y += 1;
      console.log(rover.x + ';' + rover.y);
      }
      break;

    case 'W':
      if (rover.x === 0) {
        console.log(`
          Can't move forward! Rover has reached westernmost grid limit.
        `);
      } else {
      rover.x -= 1;
      console.log(rover.x + ';' + rover.y);
      }
      break;
      
    case 'E':
      if (rover.x === 9) {
        console.log(`
          Can't move forward! Rover has reached easternmost grid limit.
        `);
      } else {
      rover.x += 1;
      console.log(rover.x + ';' + rover.y);
      }
      break;
      }
  }

function commandList(commands){
  for (let i = 0; i < commands.length; i++) {
    switch(commands[i]) {
      case 'f':
        moveForward();
        break;
      case 'l':
        turnLeft();
        break;
      case 'r':
        turnRight();
        break;
    }
  }
}

commandList('rfflfflfrff');
console.log(rover.travelLog);