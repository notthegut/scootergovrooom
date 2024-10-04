class Scooter {
  static nextSerial = 1 // Given in the brief
//Weve been told from base they are all in good condition and there is no need to repair and that there is only one parameter which is the station
  constructor(station) { //Hence in the parameters we only have the station and we set the default variables for everything else after this
    this.station = station
    this.user = null
    this.serial= Scooter.nextSerial++ //No need to assign serial as a constructor class as it automatically is linked to the static nextSerial
    Scooter.nextSerial += 1
    this.charge = 100;   
    this.isBroken = false;
  }
  //rent (user) method
  rent(user){
    //If scooter is charged and not broken
    if(this.charge > 20 && this.isBroken === false) {
      this.user = user
      this.station = null //Since the scooter is now being rented out no need to have it set to a station
      //If scooter is charged but broken
    } else if (this.charge >20 && this.isBroken === true) {
      throw new Error ("scooter needs repair")
      //If scooter isnt charged either way mush
    } else {
      throw new Error ("scooter needs to charge")
    }
  }
  //dock(station) method
  dock(station){ //Think of it as, when the method recognises a station at which the bike is being docked, if it is a valid station then the scooter becomes assigned to the station and unassigned from the user so they do not continue paying
    if(station){ //we put station in the if statement as it prevents the scooter being taken to any unauthroised docking station. It prevent theft and only lets thescooter be docked at our own station
      this.user = null
      this.station = station
    } else{
      throw new Error ("Invalid Station")
    }
  }
}

module.exports = Scooter
