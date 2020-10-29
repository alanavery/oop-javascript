let car = {
  make: 'Tesla',
  model: 'Model S',
  color: 'red',
  start: function() {
    return 'Outta here...';
  },
  stop: function() {
    return 'Push the brakes';
  }
};

console.log(car.start());


let employee = {
  name: 'Alan Avery',
  role: 'student',
  salary: 50000,
  salaryIncrease: function() {
    return Math.floor(this.salary * 1.1);
  }
};

employee.salary = employee.salaryIncrease(1.2);

console.log(employee.salary);


// Constructor functions

// function Human(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// const alan = new Human('Alan', 'Avery');
// console.log(alan);

// const hp = new Human('Harry', 'Potter');
// console.log(hp);

// const dracula = new Human('Dracula', 'The Vampire');
// console.log(dracula);

// function Car(make, model, color) {
//   this.make = make;
//   this.model = model;
//   this.color = color;
// }

// const firstCar = new Car('Ford', 'Aerostar', 'navy blue');
// const secondCar = new Car('Chevrolet', 'Caprice Classic', 'light blue');
// const thirdCar = new Car('Pontiac', 'Grand Am', 'bronze');

// console.log(firstCar, secondCar, thirdCar);

// Human.prototype.hello = () => {
//   console.log(`Hello!`);
// }

// alan.hello();

// console.log(alan);


// Classes

class Car {
  constructor(make, model, color) {
    this.make = make;
    this.model = model;
    this.color = color;
    this.hello = function() {
      console.log(`My car is a ${this.make}.`);
    };
  }
}

let firstCar = new Car('Ford', 'Aerostar', 'navy blue');

console.log(firstCar);
firstCar.hello();

class Human {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

let walter = new Human('Walter', 'Mansilla');

console.log(walter);