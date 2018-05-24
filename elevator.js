class Elevator {
  constructor(maxFloor = 2, name = 'solo') {
    this.name = name;
    this.floor = 1;
    this.doorStatus = 'closed';
    this.maxFloor = maxFloor;
    this.numberOccupants = 0;
    this.numberTrips = 0;
    this.isInMaintenance = false;

    this.openDoor = this.openDoor.bind(this);
    this.enterElevator = this.enterElevator.bind(this);
    this.goToFloor = this.goToFloor.bind(this);
  }

  openDoor(open = true) {
    this.doorStatus = open ? 'open' : 'closed';
    console.log(`Elevator ${ this.name }'s door is ${ this.doorStatus }` );
  }

  enterElevator(numberOfPeople) {
    if (this.doorStatus === 'closed') {
      this.openDoor();
    }
    this.numberOccupants += numberOfPeople;
  }

  goToFloor(floor) {
    // update this.floor this.numberTrips
    if (floor === this.floor) {
      return console.log(`Elevator ${ this.name } is already on floor ${ floor }.`);
    }
    
    if (floor > this.maxFloor) {
      floor = this.maxFloor;
    } else if (floor < 1) {
      floor = 1;
    }

    this.openDoor(false);

    this.floor = floor;
    this.numberTrips++;
    console.log(`Elevator ${ this.name } is on floor ${ this.floor }. It has taken ${ this.numberTrips } trip${ this.numberTrips > 1 ? 's' : '' }.`);
  }

  exitElevator(numberOfPeople) {
    if (this.doorStatus === 'closed') {
      this.openDoor();
    }
    this.numberOccupants += numberOfPeople;
  }
}

module.exports = Elevator;
