class Car {
  #make;
  #model;
  #year;
  #mileage;

  constructor(make, model, year, mileage) {
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#mileage = mileage;
  }

  displayInfo() {
    console.log("Car Details:");
    console.log("Make: " + this.#make);
    console.log("Model: " + this.#model);
    console.log("Year: " + this.#year);
    console.log("Mileage: " + this.#mileage + " km");
    console.log("-----------------------------");
  }

  updateMileage(newMileage) {
    if (newMileage >= 0) {
      this.#mileage = newMileage;
    } else {
      console.log("Invalid mileage. Please enter a positive value.");
    }
  }
}

function runFunctionCarProgram() {
  const myCar = new Car("Toyota", "Corolla", 2019, 45000);
  myCar.displayInfo();
  myCar.updateMileage(48000);
  myCar.displayInfo();
}

runFunctionCarProgram();
