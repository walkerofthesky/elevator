class Elevator {
  constructor(maxFloor = 2, name = 'solo') {
    this.name = name;
    this.floor = 1;
    this.doorStatus = 'closed';
    this.maxFloor = maxFloor;
    this.numberOccupants = 0;
    this.numberTrips = 0;
    this.isInMaintenance = false;

    this.reportDoorStatus = this.reportDoorStatus.bind(this);
    this.enterElevator = this.enterElevator.bind(this);
    this.goToFloor = this.goToFloor.bind(this);
  }

  reportDoorStatus() {
    console.log(`Elevator ${ this.name }'s door is ${ this.doorStatus }` );
  }

  enterElevator(numberOfPeople) {
    if (this.doorStatus === 'closed') {
      this.doorStatus = 'open';
      this.reportDoorStatus();
    }
    this.numberOccupants += numberOfPeople;
  }

  goToFloor(floor) {
    // update this.floor this.numberTrips
    
    this.floor = floor;
    this.numberTrips++;
    console.log(`Elevator ${ this.name } is on floor ${ this.floor }. It has taken ${ this.numberTrips } trip${ this.numberTrips > 1 ? 's' : '' }.`);
  }
}

module.exports = Elevator;
