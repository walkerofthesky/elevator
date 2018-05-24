const Elevator = require('./elevator');

class Building {
  constructor(numberElevators, numberFloors) {
    this.numberElevators = numberElevators;
    this.numberFloors = numberFloors;
    this.elevators = [];

    for (let i = 0; i < numberElevators; i++) {
      this.elevators.push(new Elevator(numberFloors, i.toString()));
    }

    this.requestElevator = this.requestElevator.bind(this);
  }

  requestElevator(currentFloor, numberOfPeople = 1) {
    let availableElevator;
    // an unoccupied elevator is already stopped at that floor
    availableElevator = this.elevators.find(elevator => elevator.floor === currentFloor);
    if (availableElevator) {
      availableElevator.enterElevator(numberOfPeople);
      return availableElevator;
    }
    // an occupied elevator is moving and will pass that floor on its way
    const occupiedElevators = this.elevators.filter(elevator => elevator.numberOccupants > 0);
    // the unoccupied elevator closest to it will answer the call
  }
}

module.exports = Building;
