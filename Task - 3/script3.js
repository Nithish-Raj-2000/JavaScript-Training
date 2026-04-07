// Loan Eligibility & EMI calculator.

// Real time scenario.
/* The Bank wants to:
1. check if a customer is eligible for a LockManager.
2. calculate EMI
3. Categorize customer. */

//Requirements.

// 1. User Input.

let name=prompt("Enter your Name :");
let age=prompt("Enter your Age :");
let MonthlySalary=prompt("Enter your monthly salary :");
let loanAmount=prompt("Enter your loan amount :");
console.log("Name :",name );
console.log("Age :",age);
console.log("Monthly Salary :",MonthlySalary);
console.log("loan Amount :",loanAmount);

//---------------------------------------------------------------

// 7. Type Conversion:
console.log("Before Conversion :" ,typeof(age),typeof(MonthlySalary),typeof(loanAmount));

// Conversion:
let name1=name;
let age1=Number(age);
let MonthlySalary1=Number(MonthlySalary);
let loanAmount1=Number(loanAmount)

console.log("Name :",name1 );
console.log("Age :",age1);
console.log("Monthly Salary :",MonthlySalary1);
console.log("loan Amount :",loanAmount1);

console.log("After Conversion :",typeof(name1),typeof(age1),typeof(MonthlySalary1),typeof(loanAmount1));


//------------------------------------------------------------


// 2. Eligibility Check (Logical Operator).

let age_eligible=age;
let salary=MonthlySalary;
if(age>=21 && age<=60){
    if(salary>=25000){
        console.log("Your Eligible");
        
    }else{
        console.log("Your Not Eligible");
    }

}else{
    console.log("Your Not Eligible");
    
}

//-------------------------------------------------------

// 3. EMI Calculation (Operators- /=).
let EMI=loanAmount;
EMI/=12;
console.log("EMI :",EMI);

//-----------------------------------------------------

// 4. Loan Catrgory (If-Else).
let loan=loanAmount;
if(loan>500000){
    console.log("Loan Category :","High Loan");
    
}
else if(loan>200000){
    console.log("Loan Category :", "Medium Loan");
    
}else{
    console.log("Loan Category :", "Low Loan");
    
}


//--------------------------------------------------


// 5. Risk Level (Ternary Operator).
let salary1=salary;
let risk=(salary1>50000)? "Low Risk" : "High Risk";
console.log("Risk Level :",risk);


//---------------------------------------------------------


// 6. Customer Type (Switch).
// let customer=EMI;
switch(true){
    case (EMI>40000):console.log("Customer Type :", "Premium Customer");
    break;

    case (EMI>20000): console.log("Customer Type :", "Standard Customer");
    break;

    default: console.log("Customer Type :", "Basic Customer");
    
}


//-------------------------------------------------------------------


