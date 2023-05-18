const birthYear = 1998;
const futureYear = 2023;

const currentYear = new Date().getFullYear();
const currentAge = currentYear - birthYear;
const nextAge = currentAge + 1;

console.log(`In ${futureYear}, you'll be ${currentAge} or ${nextAge} years old.`);
