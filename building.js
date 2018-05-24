const Elevator = require('./elevator');

class Building {
  constructor(numberElevators, numberFloors) {
    this.numberElevators = numberElevators;
    this.numberFloors = numberFloors;
    this.elevators = [];

    for (let i = 0; i < numberElevators; i++) {
      this.elevators.push(new Elevator(numberFloors));
    }

    this.requestElevator = this.requestElevator.bind(this);
  }

  requestElevator() {
    // an unoccupied elevator is already stopped at that floor
    // an occupied elevator is moving and will pass that floor on its way
    // the unoccupied elevator closest to it will answer the call
  }
}

module.exports = Building;
