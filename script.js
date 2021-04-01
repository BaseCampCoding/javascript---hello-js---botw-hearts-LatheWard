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
let maxHealth = 44;
let overhealAmount = 0;

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}

function updateHeartsDisplay() {
  heartsContainer.innerHTML = "";
  let healthRemaining = health
  while (healthRemaining > 0){
    const quarters = Math.min(healthRemaining, 4);
    heartWidget = document.createElement('div');
    heartsContainer.insertAdjacentHTML(
    "beforeend",
    `<div class="heart" data-quarters="${quarters}">
          <div class="top-left"></div>
          <div class="top-right"></div>
          <div class="bottom-left"></div>
          <div class="bottom-right"></div>
        </div>`
      );
      healthRemaining -= 4;
  }
  let emptyHearts = Math.floor((maxHealth - health) / 4)
  for (let i = 0; i < emptyHearts; i++){

  }

}
  

hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  health = Math.max(0, health - damage);
  updateHeartsDisplay();

  if (newExtraHeart.dataset.quarters == 0){
    heartsContainer.removeChild(newExtraHeart)}
});

healButton.addEventListener("click", function (){
  let heal = Number(healAmountInput.value) * 4;
  health = Math.max(0, health + heal);
  updateHeartsDisplay();
});

ahcButton.addEventListener("click", function (){
  maxHealth += 4;
  health = maxHealth
  updateHeartsDisplay();

  const newHeart = heartsContainer.querySelector(".heart").cloneNode(true);
  heartsContainer.appendChild(newHeart);
  
  if (health !== maxHealth){
    health += (maxHealth - health);
  };
  updateHeartsDisplay();
})

const newExtraHeart = document.querySelector(".heart").cloneNode(true)
newExtraHeart.className = "heart extra"

overhealButton.addEventListener("click", function(){
  // if (newExtraHeart.hasChildNodes == false ){
  for (let i = overhealAmountInput.value - overhealAmount / 4; i!= 0; i--){
    heartsContainer.appendChild(newExtraHeart);
    maxHealth += 4;
  };
  
  if (health !== maxHealth){
    health += (maxHealth - health);
  };
  updateHeartsDisplay();  

})

