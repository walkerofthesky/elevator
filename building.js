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

  getNearestElevator(elevators, currentFloor) {
    const nearest = {
      elevator: null,
      distance: null,
    };
    elevators.forEach((elevator, i) => {
      const elevatorDistance = Math.max(currentFloor, elevator.floor) - Math.min(currentFloor, elevator.floor);

      if (i === 0) {
        nearest.elevator = elevator;
        nearest.distance = elevatorDistance;
      } else {
        nearest.elevator = elevatorDistance < nearest.distance ? elevator : nearest.elevator;
        distance = Math.min(elevatorDistance, nearest.distance);
      }
    });

    return nearest.elevator;
  };

  requestElevator(currentFloor, numberOfPeople = 1) {
    let availableElevator;
    // an unoccupied elevator is already stopped at that floor
    availableElevator = this.elevators.find(elevator => elevator.floor === currentFloor);
    if (availableElevator) {
      availableElevator.enterElevator(numberOfPeople);
      return availableElevator;
    }

    // an occupied elevator is moving and will pass that floor on its way
    const occupiedElevators = this.elevators.filter(elevator => elevator.numberOccupants > 0 && elevator.doorStatus === 'closed');
    // TODO: if we have occupied elevators that are on the move (doors are closed), then return the nearest one

    // the unoccupied elevator closest to it will answer the call
    const unoccupiedElevators = this.elevators.filter(elevator => elevator.numberOccupants === 0);
    // TODO: return the nearest one
  }

  // TODO: request a floor, and upon arriving exit elevator
}

module.exports = Building;
