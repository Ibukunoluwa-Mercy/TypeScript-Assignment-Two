"use strict";
// 4.	Create a class Car with properties and methods, including private and public modifiers
class Car {
    brand;
    speed;
    constructor(brand) {
        this.brand = brand;
        this.speed = 0;
    }
    accelerate(amount) {
        this.speed += amount;
        console.log("Accelerating the car called " + this.brand + " by " + amount + " km/h.");
    }
    getSpeed() {
        return this.speed;
    }
    checkEngine() {
        console.log("Engine diagnostic check complete.");
    }
}
const myCar = new Car("Toyota");
const hisCar = new Car("Audi");
const herCar = new Car("Mercedes");
myCar.accelerate(50);
hisCar.accelerate(100);
hisCar.accelerate(100);
hisCar.accelerate(100);
herCar.accelerate(150);
console.log(myCar.getSpeed());
console.log(hisCar.getSpeed());
console.log(herCar.getSpeed());
//5.	Experiment with union types by creating a variable that can hold a string or number
let vehicleId;
vehicleId = "VIN-1234";
console.log("The Vehicle ID is (String): " + vehicleId);
vehicleId = 1234;
console.log("The number for the Vehicle ID is (Number): " + vehicleId);
//# sourceMappingURL=script.js.map