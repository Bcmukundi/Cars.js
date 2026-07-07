class car {
  #make;
  #model;
  #year;
  #mileage;

  constructor( make,model,year,mileage){
    this.#make = make;
    this.#model = model;
    this.#year = year;
    this.#mileage = mileage;
    }
    
    displayinfo() {
      console.log("Car Details:");
      console.log("Make: " + this.#make);
      console.log("Model: " + this.#model);
      console.log("Year: " + this.#year);
      console.log("Mileage: " + this.#mileage + " km");
      console.log("-----------------------------");
    }

    updateMileage(newMileage){
      if (newMileage >= 0) {
        this.#mileage = newMileage;
        
      } else {
        console.log("Invalid mileage. Please enter a positive value.");
      }

      function runFunctionCarProgram(){
        const mycar = const name = new type(arguments);
        mycar.displayinfo();
        mycar.updateMileage();
        mycar.diplayinfo();
      }
      }
    }
