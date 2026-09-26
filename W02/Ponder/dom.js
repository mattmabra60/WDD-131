// select an HTML element from the DOM file
// save it to a local var called heading
let heading = document.querySelector("h1");

console.log(heading);

heading.style.color = "#2e2ec0";
heading.style.fontSize = "3em";
// in css its font-size but in javascript every selector is camel case

heading.style.fontFamily = "Helvetica";


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    heading.textContent = codeValue;
})
                

// do everything in one line
document.querySelector("p").style.color = "purple";

// there are different ways to select from the DOM
document.getElementById("topics");

// you can select more than one element at a time
// returns a list of elements
console.log(document.querySelectorAll(".list"));

// you can grab individual elements from a list by using 
document.querySelectorAll(".list")[0].style.color = "orange"

// apply an entire classes css that exists to an elelment even if it isnt included in the class
let topicsClassList = document.querySelector("#topics").classList;

topicsClassList.add("special");

// usually used in concert with buttons allowing elements to be toggled between states
topicsClassList.toggle("special");  

// another way to add a class to an element
const list = Element.classList



