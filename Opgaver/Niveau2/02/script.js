"use strict";
// ét produkt ---------------------------------------
// let increaseBtn = document.querySelector(".card__increase");
// let decreaseBtn = document.querySelector(".card__decrease");
// let countEl = document.querySelector(".card__item-count");
// let count = parseInt(countEl.textContent);
// let price = parseInt(document.querySelector(".card__price-value").textContent);
// let totalPriceEl = document.querySelector(".card__total-price");

// // console.log(typeof price);

// function updateCountAndPrice(count, price) {
//     countEl.textContent = count;
//     totalPriceEl.textContent = count * price;
// }

// increaseBtn.addEventListener("click", function () {
//     count++;
//     updateCountAndPrice(count, price);
// });

// decreaseBtn.addEventListener("click", function () {
//     if (count > 0) count--;
//     updateCountAndPrice(count, price);
// });

// flere produkt ---------------------------------------

let cards = document.querySelectorAll(".card");
let allCardsSum = 0;

cards.forEach(function (card) {
  let increaseBtn = card.querySelector(".card__increase");
  let decreaseBtn = card.querySelector(".card__decrease");
  let countEl = card.querySelector(".card__item-count");
  let count = parseInt(countEl.textContent);
  let totalPriceEl = card.querySelector(".card__total-price");
  let price = parseInt(card.querySelector(".card__price-value").textContent);

  function updateCountAndPrice(count, price) {
    countEl.textContent = count;
    let cardSum = count * price;
    totalPriceEl.textContent = cardSum;

    allCardsSum = 0;
    cards.forEach(function (otherCard) {
      let otherCardCount = parseInt(
        otherCard.querySelector(".card__item-count").textContent
      );
      let otherCardPrice = parseInt(
        otherCard.querySelector(".card__price-value").textContent
      );
      let checkoutPriceEl = document.querySelector(".checkout__price");
      allCardsSum += otherCardCount * otherCardPrice;
      checkoutPriceEl.textContent = allCardsSum;
    });
  }

  increaseBtn.addEventListener("click", function () {
    count++;
    updateCountAndPrice(count, price);
  });

  decreaseBtn.addEventListener("click", function () {
    if (count > 0) count--;
    updateCountAndPrice(count, price);
  });
});

// let cards = document.querySelectorAll(".card");

// cards.forEach(function (card) {
//   let increaseBtn = card.querySelector(".card__increase");
//   let decreaseBtn = card.querySelector(".card__decrease");
//   let countEl = card.querySelector(".card__item-count");
//   let count = parseInt(countEl.textContent);
//   let price = parseInt(card.querySelector(".card__price-value").textContent);
//   let totalPriceEl = card.querySelector(".card__total-price");

//   increaseBtn.addEventListener("click", function () {
//     count++;
//     updateCountAndPrice(count, price);
//   });

//   decreaseBtn.addEventListener("click", function () {
//     if (count > 0) count--;
//     updateCountAndPrice(count, price);
//   });

//   function updateCountAndPrice(count, price) {
//     countEl.textContent = count;
//     totalPriceEl.textContent = count * price;
//   }
// });

// console.log(typeof price);
