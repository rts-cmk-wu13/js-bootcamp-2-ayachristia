"use strict";

const buttons = document.querySelectorAll("#buttons button");
console.log(buttons);

// -----------shine button
buttons.forEach((btn) => {
  btn.classList.add("shining-button");

  btn.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.classList.add("no-shine");
    });

    btn.classList.remove("no-shine");
  });
});

// ------------hover shine button

function removeBtnNeonHover() {
  buttons.forEach((btn) => {
    btn.classList.remove("btnNeonHover");
  });
}

buttons.forEach((btn) => {
  btn.addEventListener("mouseover", function () {
    buttons.forEach((btn) => {
      btn.classList.add("btnNeonHover");
    });
  });

  btn.addEventListener("mouseout", function () {
    removeBtnNeonHover();
  });

  btn.addEventListener("click", function () {
    removeBtnNeonHover();
    btn.classList.add("btnNeonClicked");

    btn.focus();
  });

  btn.addEventListener("blur", function () {
    btn.classList.remove("btnNeonClicked");
  });
});
