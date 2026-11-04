const form = document.querySelector("#eventForm");
const attendantType = document.querySelector("#attendantType");
const studentId = document.querySelector("#studentIdContainer");
const accessCode = document.querySelector("#accessCodeContainer");
const output = document.querySelector("#output");

function updateAttendantField() {
  const value = attendantType.value;

  if(value == "student") {
    studentId.hidden = false;
    accessCode.hidden = true;
  } else if(value == "guest") { 
    accessCode.hidden = false;
    studentId.hidden = true;
  }
}

attendantType.addEventListener("change", updateAttendantField);
updateAttendantField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.attendantType.value;
  const eventDate = form.eventDate.value;
  const id = form.studentId.value.trim();
  const code = form.accessCode.value.trim();

  // if date is invalid
  if (isPastDate(eventDate)) {
    const now = new Date();
    const strippedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'});
    output.textContent = `Please choose a date after ${strippedDate}.`;
    return;
  }

  // error message for student and for guest
 if (type == "student" && id.length !== 9) {
  output.textContent = "Student I# must be 9 digits";
  return;
} else if (type == "guest" && code != "EVENT131") {
  output.textContent = "Incorrect guest code";
  return;   
}

  output.innerHTML = `
  <h2>Ticket Created</h2>
  <p>${firstName} ${lastName}</p>
  <p>${type}<p>
  <p>Date: ${eventDate}</p>
  `;

  form.reset();
  updateAttendantField();
});
          