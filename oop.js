class Vehicle {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    honk() {
        console.log('Beep');
    }

    toString() {
        console.log(`The vehicle is a ${this.make} ${this.model} from ${this.year}.`);
    }
}

let myFirstVehicle = new Vehicle('Honda', 'Monster Truck', 1999);
myFirstVehicle.honk();
myFirstVehicle.toString();

class Car extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 4;
    }
}

let myFirstCar = new Car('Toyota', 'Corolla', 2005);
myFirstCar.toString();
myFirstCar.honk();
console.log(myFirstCar.numWheels);

class Motorcycle extends Vehicle {
    constructor(make, model, year) {
        super(make, model, year);
        this.numWheels = 2;
    }

    revEngine() {
        console.log('VROOM!!!');
    }
}

let myFirstMotorcycle = new Motorcycle('Honda', 'Nighthawk', 2000);

myFirstMotorcycle.honk();
myFirstMotorcycle.revEngine();
console.log(myFirstMotorcycle.numWheels);

class Garage {
    constructor(capacity) {
        this.vehicles = [];
        this.capacity = capacity;
    }

    add(vehicle) {
        if (vehicle instanceof Vehicle) {
            if (this.vehicles.length === this.capacity) {
                console.log("Sorry, we're full.");
            } else {
                this.vehicles.push(vehicle);
                console.log("Vehicles added!");
            }
        } else {
            console.log('Only vehicles are allowed in here!');
        }
    }
}

let garage = new Garage(2);
console.log('garage.vehicles: ', garage.vehicles);
garage.add(new Car('Hyundai', 'Elantra', 2015));
console.log('garage.vehicles: ', garage.vehicles);
garage.add("Taco");
garage.add(new Motorcycle("Honda", "Nighthawk", 2000));
garage.add(new Motorcycle("Honda", "Nighthawk", 2001));