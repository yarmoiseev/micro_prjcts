// Simple Currying - Step by Step
console.log("🥄 Currying Made Simple 🥄\n");

// STEP 1: What is currying?
// Instead of: add(2, 3) = 5
// We do: add(2)(3) = 5

console.log("=== STEP 1: The Basic Idea ===");

// Normal function
function normalAdd(a, b) {
  return a + b;
}

// Curried version - returns a function that waits for the second number
function curriedAdd(a) {
  return function (b) {
    return a + b;
  };
}

console.log("Normal way:", normalAdd(2, 3));
console.log("Curried way:", curriedAdd(2)(3));

// STEP 2: Why is this useful?
console.log("\n=== STEP 2: Why Curry? ===");

// You can save the first step for later!
const add5 = curriedAdd(5);
console.log("add5(10):", add5(10)); // 15
console.log("add5(7):", add5(7)); // 12

// STEP 3: Let's try with 3 numbers
console.log("\n=== STEP 3: Three Numbers ===");

function addThree(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

console.log("addThree(1)(2)(3):", addThree(1)(2)(3)); // 6

// Save partial results
const add1 = addThree(1);
const add1and2 = add1(2);
console.log("add1and2(3):", add1and2(3)); // 6

// STEP 4: Arrow functions make it shorter
console.log("\n=== STEP 4: Arrow Function Style ===");

const multiply = (a) => (b) => a * b;
const double = multiply(2);

console.log("multiply(3)(4):", multiply(3)(4)); // 12
console.log("double(5):", double(5)); // 10

// STEP 5: Practical example - greeting people
console.log("\n=== STEP 5: Practical Example ===");

const greet = (greeting) => (name) => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
const sayGoodbye = greet("Goodbye");

console.log(sayHello("Alice"));
console.log(sayHello("Bob"));
console.log(sayGoodbye("Charlie"));

console.log(
  "\n✨ That's currying! Each function takes ONE argument and returns a new function."
);
console.log("🎯 Run: node simple-currying.js to see it work!");
