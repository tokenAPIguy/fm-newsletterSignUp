"use strict";

// DOM Elements
const modal = document.querySelector(".modal");
const container = document.querySelector(".container");

const inputField = document.querySelector(".input--field");
const invalidEmail = document.querySelector(".invalid--email");
const emailAddress = document.querySelector(".email--address");

const btnSubmit = document.querySelector(".submit");
const btnDismiss = document.querySelector(".dismiss");

// RegEx Email Validation
const emailRegex =
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}(?:\.[A-Za-z]{2,})?$/;

// Open popUp
const openModal = () => {
  const userEmail = document.getElementById("userEmail").value;
  if (emailValidation(userEmail)) {
    modal.classList.remove("hidden");
    container.classList.add("hidden");

    inputField.classList.remove("invalid");
    invalidEmail.classList.add("hidden");

    emailAddress.textContent = userEmail;
  } else {
    inputField.classList.add("invalid");
    invalidEmail.classList.remove("hidden");
  }
};

// Close popUp
const closeModal = () => {
  modal.classList.add("hidden");
  container.classList.remove("hidden");
};

// Validate email
const emailValidation = (userEmail) => {
  return emailRegex.test(userEmail);
};

// Event Listeners
btnSubmit.addEventListener("click", openModal);
btnDismiss.addEventListener("click", closeModal);
