// object code
const aCourse = {
    code: 'WDD131',
    name: 'Dynamic Web Fundementals',
    sections: [
        { 
            sectionNum: 1, 
            roomNum: 'STC 353', 
            enrolled: 26, 
            days: 'TTh', 
            instructor: 'Bro Warner'
        },
        {
            sectionNum: 2,
            roomNum: 'STC 353',
            enrolled: 26,
            days: 'TTh',
            instructor: 'Sis Anderson'
        }
    ],
    enrollStudent: function(sectionNumber) {
        // find the correct section number on the array based on the number passed in
        this.sections.forEach(section => {
            if (section.sectionNum == sectionNumber) {
                section.enrolled++;
            }});
        renderSections(this.sections);
    }
  };
// console log the second sections instructor: Sister Anderson
console.log(aCourse.sections[1].instructor);

function sectionTemplate(section) {
    return `<tr>
      <td>${section.sectionNum}</td>
      <td>${section.roomNum}</td>
      <td>${section.enrolled}</td>
      <td>${section.days}</td>
      <td>${section.instructor}</td></tr>`
}

function renderSections(sections) {
const html = sections.map(sectionTemplate);
document.querySelector("#sections").innerHTML = html.join("");
}

renderSections(aCourse.sections);

document.getElementById("enrollStudent").addEventListener("click", function () {
    const sectionNum = document.querySelector("#sectionNumber").value;
    aCourse.enrollStudent(sectionNum);
});