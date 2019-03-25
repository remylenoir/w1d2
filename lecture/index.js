// Store a function in a variable and return it
function logHello(name, age, drink) {
  return `Hello! My name is ${name}, I am ${age} years old, and my favorite drink is ${drink}`;
}

const message = logHello("Rémy", 27, "tea");
console.log("Message: " + message);

console.log();

// Calculation function
function calcPrice(price, discount, vat, callback) {
  console.log("Start calculating");
  const discountedPrice = price - (price * discount) / 100;
  const finalPrice = discountedPrice * ((100 + vat) / 100);
  console.log("Finished calculating");
  if (callback) callback();
  return finalPrice.toFixed(2);
}
const tvPrice = calcPrice(999, 30, 19, function() {
  console.log("Are we done yet?");
});
const suitcase = calcPrice(249, 10, 0);

console.log("TV Price " + tvPrice);
console.log("Suitcase Price " + suitcase);

console.log();

// Anonymous function
setTimeout(function() {
  console.log("Hello");
}, 3000);

// Recursion function
const arEx = [[[[[[[["!"]]]]]]]];
const arExTwo = [[[[[[[[[[[[[[[[[[[[[[[[[["!"]]]]]]]]]]]]]]]]]]]]]]]]]];
const arExThree = [[[[[[[[[[[[[[["!"]]]]]]]]]]]]]]];

function extractEx(arr, count = 0) {
  if (count > 30) throw new Error("Too deep inside recursion");
  if (arr === "!") return [arr, count];
  else {
    return extractEx(arr[0], count + 1);
  }
}
console.log(extractEx(arEx));
console.log(extractEx(arExTwo));
console.log(extractEx(arExThree));

console.log();

// ------------------------- //
// ARRAYS
// ------------------------- //

const team = ["Lukas", "Samantha", "Thor", "Min"];

// function(value, index, array){}
team.forEach(function(teamMember) {
  console.log(`Hello ${teamMember}`);
});

const students = [
  "Helleke",
  "Sylvie",
  "Fabio",
  "Eddie",
  "Hamza",
  "André",
  "Gary",
  "Jesús",
  "Tasos",
  "Arian",
  "Aswin",
  "Theresa",
  "Alina",
  "Remy",
  "Bianca",
  "Nathan",
  "Lukas",
  "Julia",
  "Antoni"
];

function pickRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length); // 0 - 1 * number of students
  const randomStudent = arr[randomIndex];
  return randomStudent;
}

console.log(pickRandom(students));
