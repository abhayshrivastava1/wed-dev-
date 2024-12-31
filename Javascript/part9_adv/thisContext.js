const person = {
  name: "Abhay",
  greet() {
    console.log(`Hi, I am ${this.name}`);
  },
};

person.greet();

const greetFunction = person.greet;
greetFunction();

const boundGreet = person.greet.bind({ name: "John" });
boundGreet();

//bind, call and apply


// https://medium.com/@omergoldberg/javascript-call-apply-and-bind-e5c27301f7bb