const character = {
  name: "Elowen Ashgrove",
  class: "Ranger",
  level: 1,
  health: 100,
  maxHealth: 100,
  maxLevel: 20,
  image: "images/Misty Kingdom Elf Ranger.png",
  alt: "Elowen Ashgrove, an elf ranger in a misty kingdom",
  // In dnd a full rest brings your health all the way up
  rest() {
    if (this.health === this.maxHealth) {
      return `${this.name} is already at full health (${this.maxHealth}).`;
    }
    this.health = this.maxHealth;
    return `${this.name} rested and is back to ${this.health} health.`;
  },

  // Restore half of the missing health (rounded up), so healing gets worse as you go, I could have 
  // added a drop down with different potion values ect... but I figure this will work for now
  heal() {
    if (this.health === this.maxHealth) {
      return `${this.name} is already at full health (${this.maxHealth}).`;
    }
    const missing = this.maxHealth - this.health;
    const amount = Math.ceil(missing * 0.5);
    this.health += amount;
    return `${this.name} healed ${amount} health and now has ${this.health}.`;
  },

  // Subtracts 20 health and Health never drops below 0.
  // Returns a message so the page can tell the user what happened if the char died or just lost health
  attacked() {
    this.health -= 20;
    if (this.health <= 0) {
      this.health = 0;
      return `${this.name} has died.`;
    }
    return `${this.name} was attacked and lost 20 health.`;
  },

  // Add 1 to level, up to the max level of 20 which is also lore accurate
  levelUp() {
    if (this.level >= this.maxLevel) {
      return `${this.name} has reached max level.`;
    }
    this.level += 1;
    return `${this.name} reached level ${this.level}.`;
  }
};

// all the get element items for rendering and disabling if the char dies
const nameEl = document.getElementById("character-name");
const classEl = document.getElementById("character-class");
const levelEl = document.getElementById("character-level");
const healthEl = document.getElementById("character-health");
const imageEl = document.getElementById("character-image");
const statusEl = document.getElementById("status");
const restedBtn = document.getElementById("fullRest-btn");
const healedBtn = document.getElementById("heal-btn");
const attackedBtn = document.getElementById("attacked-btn");
const levelUpBtn = document.getElementById("levelup-btn");

// puts all the relevant info on the char card
function render(message = "") {
  nameEl.textContent = character.name;
  classEl.textContent = character.class;
  levelEl.textContent = character.level;
  healthEl.textContent = character.health;
  imageEl.src = character.image;
  imageEl.alt = character.alt;
  statusEl.textContent = message;

  // A dead character can't do anything
  const isDead = character.health === 0;
  healedBtn.disabled = isDead;
  restedBtn.disabled = isDead;
  attackedBtn.disabled = isDead;
  levelUpBtn.disabled = isDead;
}

// event listeners for the buttons
restedBtn.addEventListener("click", () => render(character.rest()));
healedBtn.addEventListener("click", () => render(character.heal()));
attackedBtn.addEventListener("click", () => render(character.attacked()));
levelUpBtn.addEventListener("click", () => render(character.levelUp()));

render();