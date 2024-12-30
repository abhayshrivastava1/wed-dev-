function outer() {
  let counter = 4;
  return function () {
    counter++;
    return counter;
  };
}

let increment = outer();
console.log(increment());
console.log(increment());
console.log(increment());


// A closure is a function that has access to its own scope, the outer function’s variables, and global variables, even after the outer function has finished executing. This enables functions to “remember” their environment.
//
//     A closure allows a function to access variables from its outer (enclosing) function even after that function has finished executing.
//     Global variables can be made private within a function using closures, ensuring they cannot be accessed or modified directly from outside.
//     Closures provide a way to encapsulate private data and create public methods to interact with it.
//     Closures help retain references to variables that would otherwise be lost after the execution of the outer function.