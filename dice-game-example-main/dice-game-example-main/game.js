// Dice game: 5 dice. Check a die to hold it; the Roll! button rerolls
// every die that is NOT checked.

// Brother Warner I am sad, mostly becuase It is 2am, but also becuase this broke me to implement without your big brain
// you can change the color to whatever "blue", "red", "green", "white_alt" 
const DICE_COLOR = "white";

const ROLL_TIME = 600;      // how long the "rolling" flicker lasts (ms)
const FLICKER_SPEED = 80;   // how often the faces change while rolling (ms)

const diceImages = document.querySelectorAll("#gameboard img");
const holdBoxes = document.querySelectorAll('#gameboard input[type="checkbox"]');
const rollButton = document.getElementById("rollButton");

// Current value of each die (the HTML starts them showing 1 through 5).
const values = [1, 2, 3, 4, 5];

// Random whole number from 1 to 6 
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// gives the face of the die with the value
function showDie(index, value) {
  diceImages[index].src = `assets/${DICE_COLOR}_dice_${value}.gif`;
  diceImages[index].alt = `Die ${index + 1}: ${value}`;
}

// make sure the box is not checked and if it is then dont roll the die
function getRollingDice() {
  const rolling = [];
  holdBoxes.forEach((box, index) => {
    if (!box.checked) rolling.push(index);
  });
  return rolling;
}

// Turn the button red when every die is held.
function updateButtonColor() {
  const allHeld = Array.from(holdBoxes).every((box) => box.checked);
  rollButton.classList.toggle("all-held", allHeld);
}

// tie everyhting together to get the rolling   
function roll() {
  const rolling = getRollingDice();
    // Everything is held: shake the button instead of rolling.
  if (rolling.length === 0) {
    rollButton.classList.remove("shake");
    void rollButton.offsetWidth; // lets the shake restart if you click again quickly
    rollButton.classList.add("shake");
    return;
  }

  // Pick the final results now, then flicker random faces before showing them.
  const finalValues = rolling.map(rollDie);
  const flicker = setInterval(() => {
    rolling.forEach((index) => showDie(index, rollDie()));
  }, FLICKER_SPEED);

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  setTimeout(() => {
    clearInterval(flicker);
    rolling.forEach((index, i) => {
      values[index] = finalValues[i];
      showDie(index, values[index]);
    });
    rollButton.disabled = false;
  }, reducedMotion ? 0 : ROLL_TIME);
}

rollButton.addEventListener("animationend", () => {rollButton.classList.remove("shake");});
holdBoxes.forEach((box) => box.addEventListener("change", updateButtonColor));
rollButton.addEventListener("click", roll);