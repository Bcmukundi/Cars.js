# Car Class — JavaScript OOP Practice

A small JavaScript exercise practicing object-oriented programming concepts: classes, constructors, private fields, and encapsulation.

## What it does

- Defines a `Car` class with private properties (`make`, `model`, `year`, `mileage`) using JavaScript's `#` private field syntax
- `displayInfo()` — prints the car's details to the console
- `updateMileage(newMileage)` — updates the mileage, with basic validation to reject negative values

## Concepts practiced

- ES6 classes and constructors
- Private class fields (`#property`)
- Encapsulation and input validation
- Basic console-based program structure

## Example usage

```javascript
const myCar = new Car("Toyota", "Corolla", 2019, 45000);
myCar.displayInfo();
myCar.updateMileage(48000);
myCar.displayInfo();
```

## Status

Practice project — built while learning JavaScript OOP fundamentals.
