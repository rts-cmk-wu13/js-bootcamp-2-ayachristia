"use strict";

let increaseBtn = document.querySelector(".card__increase");
let decreaseBtn = document.querySelector(".card__decrease");
let countEl = document.querySelector(".card__item-count");
let count = parseInt(countEl.textContent);
let price = parseInt(document.querySelector(".card__price-value").textContent);
let totalPriceEl = document.querySelector(".card__total-price");

// console.log(typeof price);

function updateCountAndPrice(count, price) {
  countEl.textContent = count;
  totalPriceEl.textContent = count * price;
}

increaseBtn.addEventListener("click", function () {
  count++;
  updateCountAndPrice(count, price);
});

decreaseBtn.addEventListener("click", function () {
  if (count > 0) count--;
  updateCountAndPrice(count, price);
});
