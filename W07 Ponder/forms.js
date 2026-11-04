
const form = document.querySelector("#fsyForm");
const travelRange = document.querySelector("#travelRange");
const notesContainer = document.querySelector("#notesContainer");
const notes = document.querySelector("#notes");
const output = document.querySelector("#output");
const campusBoxes = document.querySelectorAll('input[name="campus"]');

function updateNotesField() {
  const value = travelRange.value;

  if(value == "many") {
    notesContainer.hidden = false;
  } else {
    notesContainer.hidden = true;
  }
}

travelRange.addEventListener("change", updateNotesField);
updateNotesField();


// Ensure they choose a date later than the current date
function isPastDate(value) {
  const today = new Date();
  const chosen = new Date(value);
  return chosen < today;
}

function getSelectedCampuses() {
  //.from converts a NodeList into a real array, so then you can use .filter and .map
  return Array.from(campusBoxes)
    .filter(box => box.checked)
    .map(box => box.value); 
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  output.textContent = "";

  const firstName = form.firstName.value.trim();
  const lastName = form.lastName.value.trim();
  const email = form.email.value.trim();
  const type = form.travelRange.value;
  const availableDate = form.availableDate.value;
  const selectedCampuses = getSelectedCampuses();
  const note = form.notes.value.trim();

  // Validate the input
  // Let the user know to select at least one campus

  
  // Let the user know if they choose many campuses but didn't put a note that they need to add a note

  
  // Let the user know if they choose many campus but only had one campus selected that they need to choose at least two campuses
  

  // if date is invalid
  if (isPastDate(availableDate)) {
    const now = new Date();
    const strippedDate = now.toLocaleDateString('en-US', { year: 'numeric', month: '2-digit', day: '2-digit'}); // this is dumb I am not a fan of this datestring formatting
    output.textContent = `Please choose a date after ${strippedDate}.`;
    return;
  }

  // if no campuses or not enough campuses are selected
  if (type == "one" && selectedCampuses.length !== 1) {
  output.textContent = "Please select at least one campus.";
  return;
  } else if (type == "many" && selectedCampuses.length < 2) {
  output.textContent = "Please select more than one campus.";
  return;
  }

  // this is the travel notes error message I made it into the same kind of message as the others becuase it looks better
 if (type == "many" && note == "") {
  output.textContent = "Please fill out your travel notes.";
  return;
}

  output.innerHTML = `
  <h2>Preference Submitted</h2>
  <p>${firstName} ${lastName}</p>
  <p>Email: ${email}</p>
  <p>Availability: ${availableDate}</p>
  <p>Campuses: ${selectedCampuses.join(", ")}</p>
  <p>Preference Level: ${type}</p>
  `;

  form.reset();
  updateNotesField();
});
          