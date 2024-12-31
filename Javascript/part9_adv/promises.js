function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let success = true;
      if (success) {
        resolve("Data fetched successfully");
      } else {
        reject("Error fetching data");
      }
    }, 3000);
  });
}

let response = fetchData();
console.log(response);

fetchData()
  .then((data) => {
    console.log(data);
    // return `abhay`;
    return data.toLowerCase();
  })
  .then((value) => {
    console.log(value);
  })
  .catch((error) => console.error(error));


// JavaScript Promises make handling asynchronous operations like API calls, file loading, or time delays easier. Think of a Promise as a placeholder for a value that will be available in the future. It can be in one of three states:
//
//     Pending: The task is in initial state.
//     Fulfilled: The task completed successfully, and the result is available.
//     Rejected: The task failed, and an error is provided.


// The promise methods then(), catch(), and finally() are used to associate further action with a promise that becomes settled. The then() method takes up to two arguments; the first argument is a callback function for the fulfilled case of the promise, and the second argument is a callback function for the rejected case. The catch() and finally() methods call then() internally and make error handling less verbose. For example, a catch() is really just a then() without passing the fulfillment handler. As these methods return promises, they can be chained.