class Elevator {
  constructor(maxFloor = 2) {
    this.floor = 1;
    this.doorStatus = 'closed';
    this.maxFloor = maxFloor;
    this.numberOccupants = 0;
    this.numberTrips = 0;
    this.isInMaintenance = false;

    this.requestFloor = this.requestFloor.bind(this);
  }

  requestFloor(floor) {
    // update this.floor this.numberTrips
  }
}

module.exports = Elevator;
