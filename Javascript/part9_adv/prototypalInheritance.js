function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  console.log(`Hello, my name is ${this.name}`);
};

let abhay = new Person("abhay");
abhay.greet();

// inheritance is being done in prototype

// object inherit property from other object via prototype chain

// Prototype inheritance in JavaScript allows objects to inherit properties and methods from other objects. Each object in JavaScript has an internal link to another object called its prototype. This chain of prototypes forms the prototype chain.

// When you access a property or method on an object, JavaScript first checks the object itself. If the property or method isn’t found, it moves up the prototype chain until it finds the property or reaches the end of the chain (null).
