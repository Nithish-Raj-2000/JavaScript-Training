
// 1. E-Commerce Discount System :
function products(product_name,price){
    let Discount_Price;
        if(price>1000){
           Discount_Price=price- (price*20/100);
            
            
        }else{
            Discount_Price=price- (price*10/100);
           
        }
        return(Discount_Price)
}
// Call flow (return).
let result=products("shoes",2000)
let product_name="shoes"
let price=2000
console.log("product_name :",product_name);
console.log("Price :",price);

console.log("Discount_Price :",result);


//-------------------------------------------------------------


// 2. Order Processing using Callback :

// Higher order function.
function placeholder(Callback){
    console.log("Order Placed");
    Callback();
    
}
function payment(amount,Callback) {
    console.log("Payment of ",amount,"successful");
    Callback();
}

function orderSuccess() {
    console.log("Order Deliverd");
    
}
// Call flow (Callback).
placeholder(function(){
    payment(500,orderSuccess)
});


//---------------------------------------------------


// 3. Employee Data loop System :

let employees=[
    {Name:"Nithish",Salary:50000},
    {Name:"Raj",Salary:70000}
]

for (let i = 0; i < employees.length; i++) {
     let emp=employees[i];
    

    if (emp.Salary > 60000) {
        console.log( " High Salary");
    } else {
        console.log(" Normal Salary");
    }
}


//---------------------------------------------------------


// 4. Login Attempts(While Loop) :

let password=12345;
let Attempt=1;
let maxattempt=3;

// While Loop:

// while(Attempt<=maxattempt){
//     let input=Number(prompt("Enter Your Password :"))
    

//     if(input===password){
//         console.log("Login Successful");
//         break;
        
//     }else{
//         console.log("Attempt :",Attempt);
        
//         console.log("Worng Password");
        
//     }
//     Attempt++
// }


// for Loop:

// for ( Attempt = 1; Attempt <=maxattempt; Attempt++) {
//      let input=prompt("Enter Your Password :");
//     
    

//     if (input===password) {
//         console.log( "Login Successful");
//         break;
//     } else {
//         console.log("Attempt ;",Attempt);
//         console.log("Worng Password ");
//     }
// }


//------------------------------------------------------------


// 5. Coupon Generator (Generator Function) :
function* couponGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offers=couponGenerator();
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);
console.log(offers.next().value);


//----------------------------------------------------------

// 6. Shopping cart total (using for of) :
let cart=[100,200,300,400,];
let total=0;

for(let price of cart){
    total=total+price
    
}
console.log("Total Bill :",total);

//----------------------------------------------------


// 7. User Profile system (for in) :
let users={
    name:"Nithish",
    Role:"Developer",
    Location:"India"
}

for(let key in users){
    console.log(key,":",users[key]);
    
}


//------------------------------------------------------

// 8. Factory Pattern (Function Reuse) :
function createPhone(productName) {
    return(productName);
    
}
function createBattery(productName) {
    return(productName);
    
}
function createCharger(productName) {
    return(productName);
    
}

function createOrder(params) {
    let phone=createPhone("Phone")
    let Battery=createPhone("Battery")
    let Charger=createPhone("Charger")
    console.log("Your Order :",phone,Battery,Charger);
    
    
}
//call function
createOrder()


//-----------------------------------------------------------------

// 9. College form with Default values :
function collegeForm(name,age,department="Not Assigned") {
    console.log("Name :",name);
    console.log("Age :",age);
    console.log("Department :",department);
    
}
//call function
collegeForm("Nithish",25)

//-------------------------------------------------------


// 10. Currying - EMI calculator :
// Currying function
function emi(principal) {
    return function(rate) {
        return function(time) {
            let result = (principal * rate * time) / 100;
            return result;
        }
    }
}

// call
let totalEMI = emi(10000)(2)(12);

console.log("EMI:", totalEMI);


//-------------------------------------------------


// 11. Even/Odd Analyzer :
let num=10

for(let num=1;num<=10;num++){
    let number=num;
    if(number%2==0){
        console.log(number,"--> Even");
        
    }else{
        console.log(number,"--> Odd");
        
    }
}


//------------------------------------------------------

// 12. Function Scope Debugging :
// if (true) {
//     var a = 10;
//     let b = 20;
//     const c = 30;
// }

// console.log(a); //  Works , function scoped, Still accessible inside and outside,

// console.log(b); //  Error , block scoped, accessible only inside.
// console.log(c); //  Error , block scoped, accessible only inside.
// let and const:
// Inside block → accessible 
// Outside block → error 


//--------------------------------------------------


// 13. Real-Time Alert System (IIFE):
(function() {
    console.log("🔥 Flash Sale: 50% OFF on Shirts");
})();

//--------------------------------------------------------


// 14. Marks Calculator with Return :
function marks(m1, m2, m3) {
    let total = m1 + m2 + m3;
    let average = total / 3;

     return {total,average};
}

// Function call
let result1 = marks(80, 90, 70);

console.log("Total:", result1.total);
console.log("Average:", result1.average);


//----------------------------------------------------------

// 15. Retry Offer System (Generator + Condition) :
// Generator function
function* offerGenerator() {
    yield "10% OFF";
    yield "20% OFF";
    yield "Free Delivery";
    yield "Cashback";
}

let offers1 = offerGenerator();


function getOffer() {
    let result = offers1.next();

    if (result.done) {
        console.log("All offers expired");
    } else {
        console.log("Offer:", result.value);
    }
}

//call
getOffer(); 
getOffer(); 
getOffer(); 
getOffer(); 
getOffer(); 

//-----------------------------------------------------------