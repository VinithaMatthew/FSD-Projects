// const person = {
//   name: "vinitha",
//   age: 22,
//   gender: "female",
//   greetuser(){
//     return `hello ${this.name} age ${this.age} gender ${this.gender}`;
//   }
// };

// let result=person.greetuser();
// console.log(result);

// person.name="Prince";
// person.age=8;
// person.gender="male";

// result=person.greetuser();
// console.log(document.getElementById("demo").innerHTML=result);

// const nameInput=prompt("Enter your name");
// const ageInput=prompt("Enter your age");
// const genderInput=prompt("Enter your gender");  

// person.name=nameInput;
// person.age=ageInput;
// person.gender=genderInput;  

// result=person.greetuser();
// console.log(document.getElementById("demo").innerHTML=result);  


// console.log("Calculator");
// const num1=parseFloat(prompt("Enter first number"));
// const num2=parseFloat(prompt("Enter second number"));
// const operator=prompt("Enter operator (+, -, *, /)");

// let result;
// if (operator === "+") {
//   result = num1 + num2;
// } else if (operator === "-") {
//   result = num1 - num2;
// } else if (operator === "*") {
//   result = num1 * num2;
// } else if (operator === "/") {
//   result = num1 / num2;
// } else {
//   result = "Invalid operator";
// }

// let demoresult=document.getElementById("demo").innerHTML=result;
// console.log(demoresult);

// let getid=document.getElementById("demo");
// console.log(getid);

// let getclass=document.getElementsByClassName("pp");
// console.log(getclass);

// let gettag=document.getElementsByTagName("p");
// console.log(gettag);

// let getquery=document.querySelector("#para");
// console.log(getquery);

// let getqueryall=document.querySelectorAll(".pp");
// console.log(getqueryall); 

// let getbyname=document.getElementsByName("userinput");
// console.log(getbyname);
// let createelement=document.createElement("H2");
// createelement.innerText="this is created by using createElement";
// document.body.append(createelement);

let createelement=document.getElementById("list");
createelement.TextContent="<li>this is innerHTML</li>";