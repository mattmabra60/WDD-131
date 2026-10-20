// arrays in javascript
let courses = ["WDD131", "WDD130", "CSE110", "CSE210"];

// display the first course
console.log(courses[0]);
console.log(courses[3]);

// if an index is outside of the range it is undefined
// console.log(courses[4]);

// this returns the last item in the array
console.log(courses[courses.length - 1]);

// normal for i counting loop 
// for(let i = 0; i < courses.length; i++) {
//     console.log(courses[i])
// }

// arrays have built in methods/function
// courses.forEach((item) => {
//     console.log(item);
// });

// javascript objects
let course = {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
};

console.log(course.instructor);


// array of objects 
let coursesArrayOfObejects = [
    {
    name: "Dynamic Web Fundamentals",
    code: "WDD131",
    credits: 3,
    instructor: "Brother Warner"
    },
    {
    name: "Web Fundamentals",
    code: "WDD130",
    credits: 3,
    instructor: "Brother Warner"
    },
];

// Challenge: print out the name and code of the second course in this array
console.log(coursesArrayOfObejects[1].name);
console.log(coursesArrayOfObejects[1].code);

// Template literals 

let body = document.querySelector('body');
coursesArrayOfObejects.forEach((course) => {
    // build out an html div with course contents
    let courseDiv = `
        <div>
            <h2>${course.name}<h2>
            <p>Code: ${course.code}</p>
            <p>Credits: ${course.credits}</p>
            <p>Credits: ${course.instructor}</p>
        </div>
    `;
    body.innerHTML += courseDiv;
})


function convert(grade) {
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];


const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
          