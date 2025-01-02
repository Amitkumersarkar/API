// let x = 1;
// let intervalId = setInterval(() => {
//     console.log(x++);
//     if (x > 3) clearInterval(intervalId);
// }, 1000);

// // task 3
// try {
//     console.log("start");
//     throw new Error("Error occurred");
// }
// catch (err) {
//     console.log(err.message);
// }
// finally {
//     console.log("end");
// }

// task 4

// async function myFunction() {
//     return "hello";

// }
// myFunction().then(console.log);

// task 5
console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("c"), 0);
console.log("d");

