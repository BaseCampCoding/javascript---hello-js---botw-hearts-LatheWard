const heartsContainer = document.querySelector("#hearts-container");
const controlsContainer = document.querySelector("#controls-container");
const heart = document.getElementsByClassName("heart")
const hitButton = controlsContainer.querySelector("#hit-button");
const hitDamageInput = controlsContainer.querySelector("#hit-damage-input");
const healButton = controlsContainer.querySelector("#heal-button");
const healAmountInput = controlsContainer.querySelector("#heal-amount-input");
const ahcButton = controlsContainer.querySelector("#add-heart-container-button");
const overhealButton = controlsContainer.querySelector("#overheal-button");
const overhealAmountInput = controlsContainer.querySelector("#overheal-amount-input");

let health = 35;
let maxHealth = 40;
let overhealAmount = 0;

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}

function updateHeartsDisplay() {
  let quartersToFill = health;
  for (const heart of heartsContainer.querySelectorAll(".heart")) {
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = 0;
    }
  }
}

hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  health = Math.max(0, health - damage);
  updateHeartsDisplay();

  heartsContainer.removeChild(newExtraHeart)
});

healButton.addEventListener("click", function (){
  let heal = Number(healAmountInput.value);
  health = Math.max(0, health + heal);
  updateHeartsDisplay();
});

ahcButton.addEventListener("click", function (){
  const newHeart = heartsContainer.querySelector(".heart").cloneNode(true);
  heartsContainer.appendChild(newHeart);
  maxHealth += 4;
  if (health !== maxHealth){
    health += (maxHealth - health);
  };
  updateHeartsDisplay();
})

const newExtraHeart = document.querySelector(".heart").cloneNode(true)
newExtraHeart.className = "heart extra"

overhealButton.addEventListener("click", function(){
  if (newExtraHeart.hasChildNodes == false ){
  for (let i = overhealAmountInput.value - overhealAmount / 4; i!= 0; i--){
    heartsContainer.appendChild(newExtraHeart);
  };
  maxHealth += 4;
  if (health !== maxHealth){
    health += (maxHealth - health);
  };
  updateHeartsDisplay();  }

})

