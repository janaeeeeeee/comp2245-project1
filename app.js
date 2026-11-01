// Project 1: write your form validation in this file

const form = document.getElementById("signup-form");
const message = document.getElementById("form-message");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const frequencyInput = document.getElementById("frequency");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const frequencyError = document.getElementById("frequency-error");

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function showError(input, errorElement, text) {
  errorElement.textContent = text;
  input.setAttribute("aria-invalid", "true");
}

function clearError(input, errorElement) {
  errorElement.textContent = "";
  input.removeAttribute("aria-invalid");
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();
  const frequencyValue = frequencyInput.value;

  let firstInvalid = null;

  if (nameValue === "") {
    showError(nameInput, nameError, "Enter your name.");
    firstInvalid = firstInvalid || nameInput;
  } else {
    clearError(nameInput, nameError);
  }

  if (emailValue === "") {
    showError(emailInput, emailError, "Enter your email address.");
    firstInvalid = firstInvalid || emailInput;
  } else if (!emailPattern.test(emailValue)) {
    showError(emailInput, emailError, "Enter an email address like name@example.com.");
    firstInvalid = firstInvalid || emailInput;
  } else {
    clearError(emailInput, emailError);
  }

  if (frequencyValue === "") {
    showError(frequencyInput, frequencyError, "Choose how often we should email you.");
    firstInvalid = firstInvalid || frequencyInput;
  } else {
    clearError(frequencyInput, frequencyError);
  }

  if (firstInvalid) {
    firstInvalid.focus();
    return;
  }
});