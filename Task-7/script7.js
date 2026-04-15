
// 1. Order System (setTimeout) :

// Requirement:
//  1. Print: "Order placed"
//  2. After 2 sec → "Preparing food"
//  3. After 4 sec → "Food ready"
//  4. After 5 sec → "Delivered"
// 👉 Use only setTimeout



// console.log("Order placed");

// setTimeout(() => {
//   console.log("Preparing food");
// }, 2000);

// setTimeout(() => {
//   console.log("Food ready");
// }, 4000);

// setTimeout(() => {
//   console.log("Delivered");
// }, 5000);

//-----------------------------------------


// 2.  Digital Clock (setInterval) :
// Requirement:
//  1. Print current time every second
//  2. Stop after 10 seconds
//    Use:
//       setInterval
//       clearInterval



// let count = 0;

// let clock = setInterval(() => {
//   let now = new Date();
//   console.log(now.toLocaleTimeString());
  
//   count++;

//   if (count === 10) {
//     clearInterval(clock);
//     console.log("Clock stopped");
//   }
// }, 1000);


//-----------------------------------------------


// 3.  LEVEL 2 — Intermediate (Callbacks + Async Thinking):
// Task:3 Callback Hell Simulation :

// 👉 Create 3 functions:
// loginUser
// getUserData
// getUserPosts

// Flow:
// login → getUserData → getUserPosts
// 👉 Each should use setTimeout

// ⚠️ Expected Output Order:
// User Logged In
// User Data Fetched
// User Posts Fetched

// code:
// function loginUser(callback) {
//   setTimeout(() => {
//     console.log("User Logged In");
//     callback();
//   }, 2000);
// }

// function getUserData(callback) {
//   setTimeout(() => {
//     console.log("User Data Fetched");
//     callback();
//   }, 2000);
// }

// function getUserPosts(callback) {
//   setTimeout(() => {
//     console.log("User Posts Fetched");
//   }, 2000);
// }

// // Callback Flow 
// loginUser(() => {
//   getUserData(() => {
//     getUserPosts();
//   });
// });


//---------------------------------------------------------



// 4.  LEVEL 3 — Promises (Real API Logic)
// Task:4 Fake API Promise

// 👉 Create your own Promise function
// function getProducts() {
//   // return promise
// }

// Conditions:
//  1. After 2 sec → resolve with product array
//  2. If error → reject with "API Failed"

// 👉 Use:
//      .then()
//      .catch()
//      .finally()


function getProducts() {
  return new Promise((resolve, reject) => {
    let success = true; // change to false to test error

    setTimeout(() => {
      if (success) {
        resolve([
          { id: 1, name: "Shirt", price: 500 },
          { id: 2, name: "Shoes", price: 1500 },
          { id: 3, name: "Cap", price: 300 }
        ]);
      } else {
        reject("API Failed");
      }
    }, 2000);
  });
}

// Using Promise 
getProducts()
  .then((products) => {
    console.log("Products:", products);
  })
  .catch((error) => {
    console.log("Error:", error);
  })
  .finally(() => {
    console.log("Request Completed");
  });

  //-----------------------------------------------------