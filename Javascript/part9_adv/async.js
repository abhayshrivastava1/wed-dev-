// // console.log("Hello Chai!");
//
function sayHello() {
    console.log("I would like to say Hello");
}

setTimeout(function () {
    sayHello();
},3000);


for (let index = 0; index < 10; index++) {
    console.log(index);
}


// The asynchronous nature of JavaScript can be understood by observing how this code executes. JavaScript uses an **event loop** to handle asynchronous operations like `setTimeout`. Here's what happens step by step:
//
// ### Code Breakdown:
//     1. **Function Definition:**
// The `sayHello` function is defined but not executed yet.
//
// 2. **setTimeout:**
// The `setTimeout` function schedules `sayHello` to be executed after 3000 milliseconds (3 seconds). However, it doesn't block the execution of the rest of the code. The timer starts running in the background.
//
// 3. **For Loop Execution:**
// The `for` loop is synchronous. It starts executing immediately and logs numbers from `0` to `9` sequentially. This completes before the 3 seconds delay is over.
//
// 4. **Callback Execution:**
// Once the timer in `setTimeout` completes (after 3 seconds), the `sayHello` function is pushed into the **callback queue**. The **event loop** ensures that the callback (`sayHello`) is executed only after the main thread has finished executing the current synchronous code.
//
// ### Execution Flow:
//     - At `t=0 ms`: The `sayHello` function is defined, `setTimeout` starts the timer, and the `for` loop begins.
// - From `t=0 ms to ~t=1 ms`: The `for` loop runs, logging numbers from `0` to `9`.
// - At `t=3000 ms`: The `setTimeout` callback (`sayHello`) is ready, but it waits for the main thread to complete its current execution.
// - After the main thread is idle: The `sayHello` function is executed, and `"I would like to say Hello"` is logged.
//
// ### Output:
//     ```
// 0
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// I would like to say Hello
// ```
//
// ### Key Concept:
//     JavaScript's asynchronous nature allows the `for` loop to execute without waiting for the `setTimeout`. This is because asynchronous operations like `setTimeout` are handled by the event loop and executed later, after all synchronous code has been completed.