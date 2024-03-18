// essence-utils.js

const randomstring = require('randomstring');

// Function to generate a random affirmation
function generateRandomAffirmation() {
  const affirmations = [
    "I am capable of achieving anything I set my mind to.",
    "I radiate confidence, self-respect, and inner harmony.",
    "I am grateful for the abundance that surrounds me.",
    "I am attracting positive energy into my life.",
    "I am worthy of love and happiness.",
    "I trust the process of life."
  ];
  const randomIndex = Math.floor(Math.random() * affirmations.length);
  return affirmations[randomIndex];
}

// Function to generate a random password
function generateRandomPassword(length) {
  return randomstring.generate({
    length: length,
    charset: 'alphanumeric'
  });
}

// Function to calculate the factorial of a number
function calculateFactorial(number) {
  let factorial = 1;
  for (let i = 2; i <= number; i++) {
    factorial *= i;
  }
  return factorial;
}

module.exports = {
  generateRandomAffirmation,
  generateRandomPassword,
  calculateFactorial
};
