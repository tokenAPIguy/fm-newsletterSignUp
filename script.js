"use strict";

const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

const btnSubmit = document.querySelector(".submit");
const btnDismiss = document.querySelector(".dismiss");

const openModal = () => {
  modal.classList.remove("hidden");
  container.classList.add("hidden");
};

const closeModal = () => {
  modal.classList.add("hidden");
  container.classList.remove("hidden");
};

btnSubmit.addEventListener("click", openModal);
btnDismiss.addEventListener("click", closeModal);
