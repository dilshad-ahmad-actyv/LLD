interface DriveStrategy {
  drive(): void;
}

class NormalDriveStrategy implements DriveStrategy {
  drive(): void {
    console.log("This is normal drive strategy pattern.");
  }
}

class SpecialDriveStrategry implements DriveStrategy {
  drive(): void {
    console.log("This is special drive strategy pattern.");
  }
}

class Vehicle {
  constructor(private readonly driveObject: DriveStrategy) {}
  public drive(): void {
    this.driveObject.drive();
  }
}

class PassengerVehicle extends Vehicle {
  constructor() {
    super(new NormalDriveStrategy());
  }
}

class SportsVehicle extends Vehicle {
  constructor() {
    super(new SpecialDriveStrategry());
  }
}

class GoodsVehicle extends Vehicle {
  constructor() {
    super(new SpecialDriveStrategry());
  }
}

// const goods = new GoodsVehicle();
// goods.drive();
const passenger = new PassengerVehicle();
passenger.drive();
