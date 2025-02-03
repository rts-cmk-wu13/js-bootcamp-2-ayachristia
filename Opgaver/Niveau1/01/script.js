"use strict";

// ------1
const button = document.querySelector("#my-button");
console.log(button);

button.addEventListener("click", function () {
  button.classList.toggle("toggle-color");
});

// let isSelected = false;

// function toggleButton(selected) {
//   if (selected) {
//     button.classList.add("toggle-color");
//   } else {
//     button.classList.remove("toggle-color");
//   }
// }

// button.addEventListener("click", () => {
//   isSelected = !isSelected;

//   toggleButton(isSelected);
// });
// button.addEventListener('click', function(){
//   if(isSelected){
//     isSelected = false;
//   }else{
//     isSelected = true;
//   }
// })

// ------2
function beregnForhold(a, b) {
  let result = a / b;
  return Math.floor(result);
}

console.log(beregnForhold(4, 3));

// -ekstra opgave

function beregnForhold2(a, b) {
  if (b === 0) {
    return null;
  } else {
    let result = a % b;
    return result;
  }
}
const result2 = beregnForhold2(4, 0);
console.log(result2);

// -------3

function skjulElementViaCssSelector(cssSelector) {
  const element = document.querySelector(cssSelector);
  if (element) {
    element.style.display = "none";
  }
}

skjulElementViaCssSelector("p");
