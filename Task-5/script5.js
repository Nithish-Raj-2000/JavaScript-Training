
// 1. E-commerce Cart System (spread, array methods, object manipulation) :
let cart1 = [
  { name: "Shirt", price: 500 },
  { name: "Shoes", price: 1500 }
];

let cart2 = [
  { name: "Watch", price: 2000 }
];

// Merge carts using spread
let cart = [...cart1, ...cart2];

// Add new product
cart.push({ name: "Bag", price: 1000 });

// Remove last product
cart.pop();

let total = 0;

for (let item of cart) {
    total += item.price;
}

console.log("Final Cart:", cart);
console.log("Total Price:", total);

//--------------------------------------------------------

// 2. User Profile Management (object spread, destructuring):
let user = {
  name: "Naveen",
  role: "Trainee",
  salary: 20000
};

let update = {
  role: "Developer",
  salary: 50000
};

// Merge using spread
let updatedUser = { ...user, ...update };

// Destructure values
let { name, role, salary } = updatedUser;

console.log(name + " is now a " + role + " earning " + salary);


//-------------------------------------------------------

// 3. Function with Rest Operator (Team Score System)
// rest operator

function teamScore(teamName, ...scores) {
    console.log("Team:", teamName);
    console.log("Scores:", scores);

    let total = scores.reduce((sum, score) => sum + score, 0);

    let highest = Math.max(...scores);

    console.log("Total Score:", total);
    console.log("Highest Score:", highest);
}

// function call
teamScore("Warriors", 50, 70, 90, 60);

//--------------------------------------------------------

// 4. Nested Data Extraction (API Response Simulation)(nested destructuring):
let apiData = {
  user: {
    name: "Naveen",
    address: {
      city: "Bangalore",
      pincode: 560001
    }
  }
};

// Nested destructuring
let {
    user: {
        name1,
        address: { city, pincode }
    }
} = apiData;

// Output
console.log(name + " lives in " + city + " - " + pincode);

//-----------------------------------------------------------------

// 5. Array Dashboard (Admin Panel):
//splice, slice, includes, indexOf
let users = ["A", "B", "C", "D", "E"];

// Remove "C" and "D" and add "X", "Y"
users.splice(2, 2, "X", "Y");  

// index 2 → start from "C", remove 2 items, add X, Y
console.log("Updated Users:", users);

// Get first 3 users
let firstThree = users.slice(0, 3);
console.log("First 3 Users:", firstThree);

// Check if "B" exists
let hasB = users.includes("B");
console.log("Is B present?", hasB);

// Find index of "E"
let indexE = users.indexOf("E");
console.log("Index of E:", indexE);


//-----------------------------------------------------

// 6.  Data Cleaning Tool :
//  flat, filter, type handling
let messyData = [1, 2, [3, 4, [5]], null, undefined, "hello"];

// Convert to flat array
let flatData = messyData.flat(2);

// Remove null and undefined
let cleanData = flatData.filter(item => item !== null && item !== undefined);

console.log("Clean Array:", cleanData);

//----------------------------------------------------

// 7. Sorting Bug Fix (Real Industry Issue ⚠️)
// sort()

let prices = [1000, 200, 50, 5000];

prices.sort();

console.log(prices); // O/P: [1000, 200, 50, 5000]

// Why default sort() fails?

// sort() converts numbers to strings ("1000","200","50","5000")
// Then sorts alphabetically.
// It compares character by character, not numbers


let prices1 = [1000, 200, 50, 5000];

prices1.sort((a, b) => a - b);

console.log(prices1); // O/P: [50, 200, 1000, 5000]

//-------------------------------------------------------

// 8. Analytics Report Generator (reduce):
let orders = [
  { id: 1, amount: 100 },
  { id: 2, amount: 200 },
  { id: 3, amount: 300 }
];

// Total revenue
let total1 = orders.reduce((sum, order) => sum + order.amount, 0);

// Average order value
let average = total1 / orders.length;

console.log("Total Revenue:", total1);
console.log("Average Order Value:", average); 

//----------------------------------------------------------------

// 9. Inventory System (Advanced):
// combine everything.

let inventory1 = ["Shirt", "Shoes", "Watch"];
let inventory2 = ["Bag", "Cap"];

// Add item
inventory1.push("Belt");
console.log("After Adding:", inventory1);

// Remove item (last)
inventory1.pop();
console.log("After Removing:", inventory1);

// Update item using splice (replace "Shoes" with "Sneakers")
let index = inventory1.indexOf("Shoes");
if (index !== -1) {
    inventory1.splice(index, 1, "Sneakers");
}
console.log("After Update:", inventory1);

// Search item using includes
let searchItem = "Watch";
console.log("Is item available?", inventory1.includes(searchItem));

// Merge inventory
let finalInventory = [...inventory1, ...inventory2];
console.log("Final Inventory:", finalInventory);

//-----------------------------------------------------------

// 10. Interview Level Challenge:
function processData(...data) {
    //  Flatten array (deep)
    let flatData = data.flat(Infinity);

    // Remove duplicates
    let uniqueData = [...new Set(flatData)];

    // Sort ascending
    uniqueData.sort((a, b) => a - b);

    return uniqueData;
}

// Example call
let result = processData(1, 2, [3, 4], [5, [6]]);

console.log(result);

//--------------------------------------------------------



