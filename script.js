// Learning DOM Concept

// console.log("hello man!");
// window.console.log("helo2");
// console.log(document.head);
// console.log(document.body);

// DOM Manipulation 
// selecting with id 
// document.getElementById("any id");

// selecting with class

// document.getElementsByClassName("myclass");

// selecting with tag 
// document.getElementsByTagName("p")

//  let ankit=document.getElementById("ankit");
//  console.log(ankit);
// console.dir(ankit);
// let page=document.getElementsByClassName("page")
// console.dir(page);

// query selecctor  select all type like class,id,tag name;
// ex:-
// let element=document.querySelector("p");
// // console.log(element);
// console.dir(element);

// let allElement=document.querySelector("p");
// console.dir(allElement);

// for class

// let clss=document.querySelector('.page');
// console.dir(clss);

// for # id
// let clss=document.querySelector('#Ankit');
// console.dir(clss);

// DOM Manipulation 
// Properties 
// 1.Tag Name:- return tag for Element nodes 
// 2.innerText:- return the text content of the element and all its children
// 3. innerHTML:- return the plain text or html content in the element 
// 4.textContent:- return textual content even for hidden element 
// console.log('hy i am solving js question');
// console.dir(document.body.firstChild);

// let h1=document.querySelector("h1");
//  console.dir(h1.innerText);
//  h1.innerText=h1.innerText+"ankit"


//  let div=document.querySelector("div");
//  console.log(div);

// get attributes

//  let id=div.getAttribute("id");
//  console.log(id);

// let n=div.getAttribute("name");
// console.log(n);

// setAttribute 
// setAttribute(attri,value);


// Insert Element 

// Node.append(el) // add at the end of the node(inside)
//node.prepend(el) // add at the start of the node (inside)
// node.before(el)  add before the node (outside)
// node.after(el) add after the node (outside)

// Delete Element

// node.remove() remove the node


// Q1. create new button element . give it a text "click me" , background color of red & text color of white
// insert the button as the first element inside the body tag.

// let newBtn=document.createElement("button");
// newBtn.innerText="clickMe!";
// newBtn.style.color="white";
// newBtn.style.backgroundColor="red";
// document.querySelector("body").prepend(newBtn);

// Q2 

// let para=document.querySelector("p");
// para. getAttribute("class");
// para.classList.add("newClass");

// Event topic 
// the change in the state of an obejct is known as an event
// event are fired to notify code of "intresting change" that may affect code execution

// let btn=document.querySelector("#btn1");
// btn.onclick=()=>{
// console.log('this is btn1');
// a=20;
// a++;
// console.log(a);
// }


// Event Object

// it is a special object that has details about the event. 
// All event handlers have access to the event object properties and methods. 

// Node.event=(e)=>{
//     //handle here
// }

// type  check the type of event 
// target  given target value 
// client x and clienty given position which position event present 

// let btn=document.querySelector("#btn1");
// btn.onclick=(evt)=>{
//     console.log(evt);
// // console.log(evt.type);
// console.log(evt.target);
// console.log(evt.clientX,evt.clientY);

// }


// EVENT LISTENERS 

// Node.addEventListener(event,callback);
// Node.removeEventListener(event,callback);

// ** Note : the callback reference should be same to remove **


// let btn=document.querySelector("#btn1");
// btn.addEventListener("click",(evt)=>{
//     console.log('welcome to event1');


// })
// let handler2=()=>{
//     console.log('welcome to event 2');
// }
// btn.addEventListener("click",handler2);
// btn.removeEventListener("click",handler2)


// btn.addEventListener("click",(evt)=>{
//     console.log('welcome to event3');


// })


// let'S practice 
// Q.1 
// create a toggle button that changes the screen to dark mode when clicked & light mode 

// let modeBtn = document.querySelector("#mode");
// let currMode='light' //dark
// modeBtn.addEventListener("click", () => {
//    if(currMode==='light'){
//     currMode='dark';
//    }
//    else{
//     currMode='light'
//    }
//    console.log(currMode);
// })




// let modeBtn = document.querySelector("#mode");
// let currMode='light' //dark
// modeBtn.addEventListener("click", () => {
//    if(currMode==='light'){
//     currMode='dark';
//     document.querySelector("body").style.backgroundColor="black";

//    }
   
//    else{
//     currMode='blue'
//     document.querySelector("body").style.backgroundColor="blue"
//    }
//    console.log(currMode);
// })