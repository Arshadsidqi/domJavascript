let body = document.body;
let items = document.getElementsByClassName("item");
// console.log(items);

// using for in loop

// for (let a in items) {
//   items[a].style = ` border:2px solid black;
//                      font-size:25px;
//                      width:150px;
//                      border-radius:15px;
//                      margin:20px;
//                      background:yellowGreen;
//                      text-align:center `;
// }

//   using for of loop

// for (ref of items) {
//   ref.style = ` border:2px solid black;
//                      font-size:25px;
//                      width:150px;
//                      border-radius:15px;
//                      margin:20px;
//                      background:yellowGreen;
//                      text-align:center `;
// }

// target element by tag name

// let divs=document.getElementsByTagName('div')

// divs[1].style=`border:2px solid black;`;
// console.log(divs)

//     target element by queary selector

// let divs=document.querySelector('.item')
// divs.style=`border:2px solid red;width:fit-content;`;

//     target element by queary selector All

// let divs = document.querySelectorAll(".item");
// divs[0].style = `border:2px solid red;width:fit-content;`;
// console.log(divs)

// for (ref of divs) {
//   ref.style = ` border:2px solid black;
//                      font-size:25px;
//                      width:150px;
//                      border-radius:15px;
//                      margin:20px;
//                      background:yellowGreen;
//                      text-align:center `;
// }

//    create element  using dom api

// let item3 = document.getElementById("itemthree");
// let newdiv = document.createElement("div");
// newdiv.innerText = "new item";
// console.log(newdiv);
// item3.appendChild(newdiv);

// add adjancent element

// let item3 = document.getElementById("itemthree");
// item3.style.border = "2px solid black";
// let newdiv = document.createElement("div");
// //newdiv.innerText = "new addjancent element";
// newdiv.textContent="hello"
// console.log(newdiv);
// item3.insertAdjacentElement("beforebegin", newdiv);

//       insert and remove attributs

//     // set attribute
// let item3 = document.getElementById("itemthree");

// item3.setAttribute("id", "aashif");
// console.log(item3)

// remove attribute

// let item3 = document.getElementById("itemthree");

// item3.removeAttribute("class");
// console.log(item3)

//         traverse html node

//    parent element

  //let item3 = document.getElementById("itemthree");
//    console.log(item3.parentElement)

//  next element sibling

//  console.log(item3.nextElementSibling)

// previous element sibling 
  
//   console.log(item3.previousElementSibling)

//   childern return inner element


 // let childernn = document.getElementById("contin");
 // console.log(childernn.children)


 //   childnode
 
 
 let child = document.getElementById("itemone");
  console.log(child.childNodes)


