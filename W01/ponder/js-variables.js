let age = 33;
let name = "Mattthew"; 

// This is like print in python and this is a comment!

/* This is a multi line comment in javascript

how cool!*/

console.log(age);

// I cannot redeclare a variable with the same name in the same scope
// let age == 34; this will throw an error
age = 34; 

console.log(age);

const eyeColor = "blue";

const policyDisclaimer = "Exclusions apply to vehicles registered in Michigan.";

// scope is where variables can be refrenced

// However if we declare a variable outside of the scope as nothing it can be assigned a value inside the scope and then be refrenced later
let favoriteColor ="";

if(age == 34) {
    // we are now in a different scope
    // inside this scope or bubble made up by the curly braces we can refrence variables declared outside of the scope but not vice vera
    console.log(name);
    
    // if we declare a variable in this scope it will not be available outside of this scope
    favoriteColor = "blue";
}

// for exmaple you will get an error if you attmept to run this peice of code if the code was not declared outside of the scope
// console.log(favoriteColor); 

// now it works because we declared the variable outside of the scope and then assigned a value to it inside of the scope
console.log(favoriteColor);

// pull soemthing off the HTML page
document.querySelector("h1").style.color = favoriteColor;   

