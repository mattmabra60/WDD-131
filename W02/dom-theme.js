// 1. functions
// this is a python function
// def nameOfFunction():
//     print()

// this is a java script function
function nameOfFunction(name) {
    console.log("Hello Functions! " + name);
    // this works like string F: in python that allows you to put a varible in a string
    console.log(`Your name is ${name}`);
}

// call the function (invoke, execute)
nameOfFunction("Matthew Abraham");

// 2. event listeners
    // grab an element from the DOM to "listen" to
let selectBox = document.querySelector("#theme-select");
    // register an event listener on that element
    // waiting for a spesific thing to happen, then run a function
selectBox.addEventListener("change", changeTheme)

function changeTheme(event) {
    console.log(event.target.value);
    
}


let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current === 'ocean') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/ocean.jpg')";
        pageContent.style.fontFamily = "Papyrus, fantasy";
    } else if (current === 'forest') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/forest.jpg')";
        pageContent.style.fontFamily = "Impact, sans-serif";
    } else if (current === 'desert') {
        document.body.style.backgroundImage = "url('https://wddbyui.github.io/wdd131/images/desert.jpg')";
        pageContent.style.fontFamily = "'Big Caslon', serif";
    } else {
        // default
        document.body.style.backgroundImage = "none";
        pageContent.style.fontFamily = "Georgia, serif";
    }
}
          