
// Section : 1 (Printing & User Interaction)


// 1.using console.log to print directly in the console page.
console.log("Nithish","FrontEnd Developer");

// 2. Using alert to givr alert message in UI page.
// alert("Welcome to JavaScript Session")

// 3. confirm- boolean type (true or false) can interact with users. 
// let input= confirm("Do you like coding ?")
// console.log(input);

// 4. Prompt- can interact with user by asking user informations.
// let input1= prompt("Enter your favorite food:")
// console.log(input1);

// 5. Its used to print the commend on the UI page directly.
let display= document.writeln("Good Evening Team")
console.log(display);



//-----------------------------------------------------------------------



// Section: 2 (Console Methods)

// 6. printing number using console.log().
let Number=10
console.log(Number); // Number
       // (or)
 console.log("10"); // String

 // 7. warning consloe methode- can display warning msg in UI page.
 let warning= "This is a warning" 
 console.warn(warning);
 
// 8. to print error msg in UI page
let errormsg= "Something wnt worng"
console.error(errormsg);

// 9. to clear the console page.
console.log("Hi Nithis");
console.log("Welcome to the page");
console.log("Enjoy your time");
console.clear() // to clear all outputs in the console page.



//---------------------------------------------------------------------



// Section : 3 (Data Types)

// 10. typeof()- used to know the data type of values.
let name = "Nithish Raj"
console.log(typeof(name)); // String

// 11. it is used to get the data type of the value
let age = 25
console.log(typeof(age));  // Number

// 12. Boolean Data type(true/false)
let myname="Nithish"
let myage=26
let boo=true
console.log(myname,myage,boo,typeof(boo));

let myname1="nitish"
let myage1=26
let booo=false
console.log(myname1,myage1,booo,typeof(booo));

// 13. Undefined: only variable declared but value not assign.
let name2;
console.log(name2);

// 14. Null: variable declared and assigned but no value
let name3=null;
console.log(name3);



//------------------------------------------------------------------



// Section : 4 (Arrays)

// 15. to assign multiple values in one variable is array.
let fruit=['apple','orange','banana','cherry','watermelon']
console.log(fruit);

// 16. to print first and last element of array.
let fruit1=['apple','orange','banana','cherry','watermelon']
console.log(fruit1[0],fruit1[fruit1.length-1]);

// 17. dynamically add 1 value in array and print.
let fruit2=['apple','orange','banana','cherry','watermelon']
console.log(fruit2)
fruit2=['lemon','apple','orange','banana','cherry','watermelon']
console.log(fruit2)

console.clear();

// 18. to remove the last element of array.
let fruit3=['lemon','apple','orange','banana','cherry','watermelon']
console.log(fruit3.pop());
console.log(fruit3);

// 19. To find the length of array.
let fruit4=['lemon','apple','orange','banana','cherry','watermelon']
console.log(fruit4.length);



//---------------------------------------------------------------------



// Section : 5 (Objects):

// 20. To create Object.
let student={
    name:"Nithish", age:26, course:"frontend eveloper"
}
console.log(student);

// 21. To printing the student name.
let student1={
    name:"Nithish", age:26, course:"frontend eveloper"
}
console.log(student1.name);

// 22. Dynamically adding new property in object.
let student2={
    name:"Nithish", age:26, course:"frontend eveloper",
    college:"Hindusthan"
}
console.log(student2);

// 23. Adding nested array inside the object and access it.
let student3={
    name:"Nithish", age:26, course:"frontend eveloper",
    college:"Hindusthan",
    skills:["HTML","CSS","Javascript","Reactjs"]
}
console.log(student3);
console.log(student3.skills);

// 24. Updating the property values.
let student4={
    name:"Nithish", age:26, course:"Full Stack Developer",
    college:"Hindusthan",
    skills:["HTML","CSS","Javascript","Python"]
}
student4.name="Nithish Raj"
student4.course="Front End Developer"
student4.skills[3]="Reactjs"
console.log(student4);



//---------------------------------------------------------


// Section : 6 (Operators):

// 25. addition of two numbers.
let x=10
let y=20
let z=x+y
console.log(z);

//   Or

let x1=10
let y1=20
console.log(x1+y1);

//   Or
console.log(10+20);

// 26. Subtract two numbers.
let x2=10
let y2=5
let z2=x2-y2
console.log(z2);

// 27. Multiply two numbers.

let x3=10
let y3=10
let z3=x3*y3
console.log(z3);

// 28. Divide of two numbers.
let x4=12
let y4=2
let z4=x4/y4
console.log(z4);

// 29. To find the reminder.
let x5=15
let y5=2
let z5=x5%y5
console.log(z5);

// 30. To find power values(Exponent operator).
let number=2
let power=4
let operator=2**4
console.log(operator);



//--------------------------------------------



// Section : 7 (Increment & Decrement).

// 31. Post Increment.
let num1 = 5
num1++ // prints 5, then increment
console.log(num1);  // o/p: 6

// 32. Pre Increment
let num2 = 2
++num2 // increments first, then prints
console.log(num2);   // o/p: 6

// 33. Difference b/w n++ & ++n.
//  " num++ " - first Use value --> then increment 
//  " ++num " - first Increment --> then use value 

// 34. Decrement Operator.
let num3 = 5
num3-- // 5 (then becomes 4)
console.log(num3);   // 4
let num4 = 4
--num3 // 3
console.log(num3);   // 3

// 35. Logic Task.
let a = 5;
let b = a++;
let c = ++a;

console.log(a); 
// condition 1: a=5, ->condition 2: 5++=6 ->con 2: ++6 -> a=7
console.log(b);
//con 1: b=5, stop with variable, no increment.
console.log(c);
// con 1: upto variable.
//->c=++a, -> a=5 > 5++ > 6 > c=++6, c=7.


//-----------------------------------------------


// Section : 8 (Real-Time Logic Tasks)

// 36. Ask age with user & check vote eligibility.
/* let Age=prompt("Enter Your age:")

if(Age>=18){
    console.log("You are eligible to vote");
    
}
else{
    console.log("You are not eligible to vote");
    
} */


// 37. ask name with user and greet.
// let Name=prompt("Enter Your Name:")
// console.log("Hello",Name)

// 38. find highest mark.
let marks = [75, 88, 92, 67, 85];
let max = Math.max(...marks  )

console.log("Highest marks:",max );

// 39. object category and access values.
let Fruits={
    yellowfruits:["lemon","banana"],
    redfruits:["apple","cherry"],
    greenfruits:["graphs","greenapple"]
}
console.log(Fruits.yellowfruits[1]);
console.log(Fruits.redfruits);
console.log(Fruits.redfruits[0],Fruits.greenfruits[1]);

// 40. Combine prompt + array (3 favorite fruits)
/* let Fruit1=prompt("Enter your fav fruit:")
let Fruit2=prompt("Enter your fav fruit:")
let Fruit3=prompt("Enter your fav fruit:")

let favfruits=[Fruit1,Fruit2,Fruit3]
console.log("Your fav fruits :",favfruits); */
















