class Car {
    constructor(make, model, year, color, vin, isUsed, value) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
        this.vin = vin;
        this.isUsed = isUsed;
        this.value = value;
    }

    // displayInfo() {
    //     return `${this.year} ${this.make} ${this.model} (${this.color}${this.isUsed ? ", used" : ""}) - $${this.value}`
    // }

    displayInfo() {
        return `${this.year} ${this.make} ${this.model} (${this.color}) - $${this.value}`
    }
}

var sampleCar = new Car('Honda', 'CR-Z', 2011, 'silver', '1G1AF1F57A7192174', true, 8000);
var sampleCar2 = new Car('Honda', 'CR-Z', 2011, 'silver', '1G1AF1F57A7192174', false, 8000);

console.log(sampleCar.displayInfo());