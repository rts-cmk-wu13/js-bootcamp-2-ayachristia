"use strict";

const buttons = document.querySelectorAll("#buttons button");
console.log(buttons);

// -----------1 shine btn region
buttons.forEach((btn) => {
  btn.classList.add("shining-button");

  btn.addEventListener("click", function () {
    buttons.forEach((btn) => {
      btn.classList.add("no-shine");
    });

    btn.focus();
    btn.classList.remove("no-shine");
  });

  btn.addEventListener("blur", function () {
    buttons.forEach((btn) => {
      btn.classList.remove("no-shine");
    });
  });
});

// ------------1 hover shine btn region
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
//------------------ 2 plus /minus basic
// const products = [
//   {
//     name: "1460 Pascal max-platformstøvler i læder",
//     price: 2100,
//     image: "img/Skærmbillede 2025-01-29 093309.jpg", // Opdateret sti
//     amount: 0,
//   },
//   {
//     name: "Dr. Martens 1460 Støvler",
//     price: 1600,
//     image: "img/bex.jpg", // Andet billede
//     amount: 0,
//   },
//   {
//     name: "Chelsea Støvler",
//     price: 1800,
//     image: "img/regular.jpg", // Tredje billede
//     amount: 0,
//   },
// ];

// const productsContainerEl = document.querySelector(".products");

// products.forEach((product) => {
//   productsContainerEl.innerHTML += `
//   <article class="product">
//           <figure class="product__productcard">
//             <figcaption class="product__info">
//               <p class="product__price">
//                 ${product.price}<span class="product__price-currency"> Kr.</span>
//               </p>
//               <h1 class="product__name">
//               ${product.name}
//               </h1>
//             </figcaption>
//             <img
//               src="${product.image}"
//               class="product__img"
//             />
//           </figure>

//           <section class="product__iteration">
//             <button class="product__arrow product__arrow--left">&#10094</button>
//             <span class="product__count">${product.amount}</span>
//             <button class="product__arrow product__arrow--right">&#10095</button>
//           </section>
//         </article>
//   `;
// });

// const product = document.querySelectorAll(".product");

// product.forEach((productEl, i) => {
//   const amount = productEl.querySelector(".product__count");
//   const btnPlus = productEl.querySelector(".product__arrow--right");
//   const btnMinus = productEl.querySelector(".product__arrow--left");

//   btnPlus.addEventListener("click", () => {
//     products[i].amount++;
//     amount.textContent = products[i].amount;
//   });

//   btnMinus.addEventListener("click", () => {
//     if (products[i].amount > 0) {
//       products[i].amount--;
//       amount.textContent = products[i].amount;
//     }
//   });
// });

// ---------------- 2 plus/minus region (cloneNode)
//hver gang man modificere innerHTML skal browseren genlæse og rekonstruere DOM elementet hvilket kan gøre load langsommere for større product databaser

// array til at tilføje produkter dynamisk
const products = [
  {
    name: "1460 Pascal max-platformstøvler i læder",
    price: 2100,
    image: "img/Skærmbillede 2025-01-29 093309.jpg", // Opdateret sti
    amount: 0,
  },
  {
    name: "Dr. Martens 1460 Støvler",
    price: 1600,
    image: "img/bex.jpg", // Andet billede
    amount: 0,
  },
  {
    name: "Chelsea Støvler",
    price: 1800,
    image: "img/regular.jpg", // Tredje billede
    amount: 0,
  },
];

const productsTemplate = document.querySelector(".product_template");
const productsContainerEl = document.querySelector(".products");

// for hvert produkt i array skabes en variabel der modtaget en function som returnere produktet i en produkt template
products.forEach((product) => {
  const productEl = createProduct(product);
  console.log(productEl);
  //dernæst sættes dette produkt på containeren
  productsContainerEl.appendChild(productEl);
});

function createProduct(product) {
  const productClone = productsTemplate.content.cloneNode(true);

  const productName = productClone.querySelector(".product__name");
  const productPrice = productClone.querySelector(".product__price");
  const productImg = productClone.querySelector(".product__img");
  const productMinusBtn = productClone.querySelector(".product__arrow--left");
  const productPlusBtn = productClone.querySelector(".product__arrow--right");
  const productCount = productClone.querySelector(".product__count");

  productName.textContent = product.name;
  productPrice.textContent = product.price;
  productImg.textContent = product.img;
  productImg.alt = product.name;
  productCount.textContent = product.amount;

  productMinusBtn.addEventListener("click", () => {
    if (product.amount > 0) {
      product.amount--;
      productCount.textContent = product.amount;
    }
  });

  productPlusBtn.addEventListener("click", () => {
    product.amount++;
    productCount.textContent = product.amount;
  });

  return productClone;
}
