const Building = require('./building');
const Elevator = require('./elevator');

const twoStoryMansion = new Building(2, 2);
twoStoryMansion.requestElevator(2);

// console.log(twoStoryMansion);

// const myElevator = new Elevator(2);
// myElevator.goToFloor(2);
// myElevator.goToFloor(1);
// myElevator.goToFloor(1);
// myElevator.goToFloor(5);
// myElevator.goToFloor(-1);