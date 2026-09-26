let listener = document.getElementById("root");
let text = listener.querySelector("p");
//alert("Hello World");
// listener.addEventListener("click", function() {
//     alert("Hello World");
// });

// //click event listener
// listener.addEventListener("click", function() {
//     event.target.style.backgroundColor = "yellow";
//     event.target.style.color = "tomato";
//     event.target.style.fontSize = "30px";
//     event.target.style.width = "200px";
//     event.target.style.height = "200px";
// });

// //mouseover event listener
//  listener.addEventListener("mouseover", function() {    
//     listener.style.backgroundColor = "black";
//     text.style.color = "orange";
//     listener.style.fontSize = "30px";
//     listener.style.width = "200px";
//     listener.style.height = "200px";
//     listener.style.justifyContent = "center";
//     listener.style.alignItems = "center";
//     listener.style.display = "flex";    
//     listener.style.textAlign = "center";
// });

// //mouseout event listener
// listener.addEventListener("mouseout", function() {    
//     listener.style.backgroundColor = "green";
//     listener.style.fontSize = "30px";
//     listener.style.width = "200px";
//     listener.style.height = "200px";
//     listener.style.justifyContent = "center";
//     listener.style.alignItems = "center";
//     listener.style.display = "flex";    
//     listener.style.textAlign = "center";    
//     text.style.color = "white";
// }); 

// listener.addEventListener("dblclick", function() {
//     alert("Hello people double clicked!");
// });

// // listener.addEventListener("keydown", function() {
// //     alert("Hello people keydown event!");
// // }); 
// // listener.addEventListener("keyup", function() {
// //     alert("Hello people keyup event!");
// // });
// document.addEventListener("keydown", function (event) {
//   console.log("Key pressed:", event.key);
// });

// document.addEventListener("keyup", function (event) {
//   console.log("Key released:", event.key);
// });




let eventKey= document.getElementById("root");
//console.log(eventkey);
let movePoint=10;
let x=0;
let y=0;

document.addEventListener("keydown", event => {
  if (event.key.startsWith("Arrow")) {
    switch (event.key) {
      case "ArrowUp":
        y -= movePoint;
        break;
      case "ArrowDown":
        y += movePoint;
        break;
      case "ArrowLeft":
        x -= movePoint;
        break;
      case "ArrowRight":
        x += movePoint;
        break;
    }

   // eventKey.style.left = x + "px";
   eventKey.style.left=`${x}px`
    //eventKey.style.top = y + "px";
    eventKey.style.top=`${y}px`
    eventKey.style.backgroundColor = "purple";
    event.preventDefault();
  }
});