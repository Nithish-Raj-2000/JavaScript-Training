
// 1. E-commerce Cart Total :
// Scenario: You are building a shopping cart

// Tasks:
// 1. Calculate total price using reduce
// 2. Print only products above 1000 price using filter
// 3. Get all product names in uppercase using map

let cart = [
  { name: "Shirt", price: 500, qty: 2 },
  { name: "Shoes", price: 1500, qty: 1 },
  { name: "Cap", price: 300, qty: 3 }
];

// 1. Total price using reduce
let total = cart.reduce((sum, item) => {
    return sum + (item.price * item.qty);
}, 0);

console.log("Total Price:", total);

// 2. Products above 1000 price
let expensiveProducts = cart.filter(item => item.price > 1000);
console.log("Expensive Products:", expensiveProducts);

// 3. Product names in uppercase
let productNames = cart.map(item => item.name.toUpperCase());
console.log("Product Names:", productNames);

//---------------------------------------------------------

// 2. Student Result System :
//Scenario: School result processing

// Tasks:
// 1. Find failed students (marks < 50)
// 2. Check if any student got distinction (>80) using some
// 3. Check if all students passed (>35) using every
// 4. Find first student who failed using find

let students = [
  { name: "Arun", marks: 85 },
  { name: "Bala", marks: 45 },
  { name: "Charan", marks: 60 },
  { name: "Divya", marks: 30 }
];

// 1. Failed students (marks < 50)
let failedStudents = students.filter(s => s.marks < 50);
console.log("Failed Students:", failedStudents);

// 2. Any student got distinction (>80)
let hasDistinction = students.some(s => s.marks > 80);
console.log("Any Distinction?", hasDistinction);

// 3. All students passed (>35)
let allPassed = students.every(s => s.marks > 35);
console.log("All Passed?", allPassed);

// 4. First failed student
let firstFail = students.find(s => s.marks < 50);
console.log("First Failed Student:", firstFail);


//----------------------------------------------------------

// 3.  Employee Salary Analysis :
// Scenario: HR dashboard

// Tasks:
// 1.Increase salary by 10% using map
// 2.Get employees with salary > 30000
// 3.Calculate total salary expense
// 4.Sort employees by highest salary

let employees = [
  { name: "A", salary: 25000 },
  { name: "B", salary: 40000 },
  { name: "C", salary: 15000 },
  { name: "D", salary: 50000 }
];

// 1. Increase salary by 10%
let updatedEmployees = employees.map(emp => {
    return {
        ...emp,
        salary: emp.salary * 1.10
    };
});
console.log("After 10% Hike:", updatedEmployees);

// 2. Employees with salary > 30000
let highSalary = updatedEmployees.filter(emp => emp.salary > 30000);
console.log("High Salary Employees:", highSalary);

// 3. Total salary expense
let totalExpense = updatedEmployees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total Salary Expense:", totalExpense);

// 4. Sort by highest salary
let sortedEmployees = [...updatedEmployees].sort((a, b) => b.salary - a.salary);
console.log("Sorted Employees (High to Low):", sortedEmployees);


//--------------------------------------------------


// 4. String Real Use Case (Search System) :
// Scenario: Search feature

// Tasks:
// 1.Check if "Mobile" exists using includes
// 2.Convert all to lowercase
// 3.Find index of "Tablet"
// 4.Convert array to string using join("-")

let products = ["Laptop", "Mobile", "Tablet", "Camera"];

// 1. Check if "Mobile" exists
let hasMobile = products.includes("Mobile");
console.log("Mobile exists?", hasMobile);

// 2. Convert all to lowercase
let lowerCaseProducts = products.map(p => p.toLowerCase());
console.log("Lowercase:", lowerCaseProducts);

// 3. Find index of "Tablet"
let tabletIndex = products.indexOf("Tablet");
console.log("Index of Tablet:", tabletIndex);

// 4. Convert array to string
let productString = products.join("-");
console.log("Joined String:", productString);

//--------------------------------------------------


// 5. Date Real-Time Task (Age Calculator) :
// Scenario: User profile

// Tasks:
// 1.Take DOB (hardcode or prompt)
// 2.Calculate current age
// 3. Print: You are 22 years old

//code:
// 1. Enter DOB (YYYY-MM-DD format)
// let dob = prompt("Enter DOB (YYYY-MM-DD):");

// let birthDate = new Date(dob);
// let today = new Date();

// 2. Calculate age
// let age = today.getFullYear() - birthDate.getFullYear();

// 3. Adjust if birthday not yet reached this year
// let m = today.getMonth() - birthDate.getMonth();

// if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
//     age--;
// }

// console.log("You are " + age + " years old");


//--------------------------------------------------


// 6. Login Validation System :
// Scenario: Basic login check

// Tasks:
// 1.Check if user exists using find
// 2.Validate username & password
// 3.Print:
// "Login Success ✅"
// "Invalid Credentials ❌"

let users = [
  { username: "admin", password: "1234" },
  { username: "user", password: "abcd" }
];

// Input (you can use prompt also)
let inputUsername = "admin";
let inputPassword = "1234";

// Find user
let foundUser = users.find(u => u.username === inputUsername);

// Validate credentials
if (foundUser && foundUser.password === inputPassword) {
    console.log("Login Success ✅");
} else {
    console.log("Invalid Credentials ❌");
}

//----------------------------------------------------


// 7.  Even Number Analyzer :
// Tasks:
// 1.Get all even numbers
// 2.Check if any odd number exists
// 3.Check if all numbers are even
// 4.Find first number > 20

let numbers = [10, 15, 20, 25, 30];

// 1. Get all even numbers
let evens = numbers.filter(n => n % 2 === 0);
console.log("Even Numbers:", evens);

// 2. Check if any odd number exists
let hasOdd = numbers.some(n => n % 2 !== 0);
console.log("Any Odd Number?", hasOdd);

// 3. Check if all numbers are even
let allEven = numbers.every(n => n % 2 === 0);
console.log("All Even?", allEven);

// 4. Find first number > 20
let firstGreater = numbers.find(n => n > 20);
console.log("First number > 20:", firstGreater);

//------------------------------------------------


// Bonus Challenge ( Interview Level) :
 // ==> Combine everything

// Tasks:
// 1.Total revenue of delivered orders
// 2.Get all pending orders
// 3.Check if any order > 1000
// 4.Sort orders by amount (ascending)

let orders = [
  { id: 1, amount: 500, status: "delivered" },
  { id: 2, amount: 1500, status: "pending" },
  { id: 3, amount: 2000, status: "delivered" }
];

// 1. Total revenue of delivered orders
let totalDelivered = orders
    .filter(o => o.status === "delivered")
    .reduce((sum, o) => sum + o.amount, 0);

console.log("Total Delivered Revenue:", totalDelivered);

// 2. Get all pending orders
let pendingOrders = orders.filter(o => o.status === "pending");
console.log("Pending Orders:", pendingOrders);

// 3. Check if any order > 1000
let hasHighOrder = orders.some(o => o.amount > 1000);
console.log("Any Order > 1000?", hasHighOrder);

// 4. Sort orders by amount (ascending)
let sortedOrders = [...orders].sort((a, b) => a.amount - b.amount);
console.log("Sorted Orders:", sortedOrders);

//---------------------------------------------------