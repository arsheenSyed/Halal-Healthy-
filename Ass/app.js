"use strict";

const p = document.querySelector(".noResults");

const cards = document.querySelectorAll(".myCard");

const arabian = document.querySelectorAll(".arabian");

const indian = document.querySelectorAll(".indian");

const mediterranean = document.querySelectorAll(".mediterranean");

const input = document.querySelector("input");

const btn = document.querySelector(".myBtn");

const cardText = document.querySelectorAll(".card-text");

const h1 = document.querySelector("h1");

btn.addEventListener("click", () => {
  //   e.preventDefault();

  for (const card of cards) {
    card.classList.add("remove");
    if (card.classList.contains(input.value)) {
      card.classList.remove("remove");
    } else {
      card.classList.add("remove");
    }
  }
});

// Detect Chrome
// let chromeAgent = userAgentString.indexOf("Chrome") > -1

// console.log(chromeAgent);
