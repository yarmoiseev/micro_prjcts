// Currying Playground - Interactive Learning Experience
console.log("🍛 Welcome to the Currying Kitchen! 🍛\n");

// === BASIC CURRYING EXAMPLES ===

// Example 1: Simple Addition (Manual Currying)
console.log("=== Example 1: Manual Currying ===");
function add(a) {
  return function (b) {
    return a + b;
  };
}

const add5 = add(5);
console.log("add5(3):", add5(3)); // 8
console.log("add(10)(2):", add(10)(2)); // 12

// Example 2: Three-Parameter Function
console.log("\n=== Example 2: Three Parameters ===");
function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}

const multiplyBy2 = multiply(2);
const multiplyBy2And3 = multiplyBy2(3);
console.log("multiply(2)(3)(4):", multiply(2)(3)(4)); // 24
console.log("multiplyBy2And3(4):", multiplyBy2And3(4)); // 24

// Example 3: Practical String Formatting
console.log("\n=== Example 3: String Formatting ===");
function formatMessage(prefix) {
  return function (type) {
    return function (message) {
      return `[${prefix}] ${type.toUpperCase()}: ${message}`;
    };
  };
}

const appLogger = formatMessage("MyApp");
const errorLogger = appLogger("error");
const infoLogger = appLogger("info");

console.log(errorLogger("Database connection failed"));
console.log(infoLogger("User logged in successfully"));

// === AUTOMATIC CURRY FUNCTION ===
console.log("\n=== Auto-Curry Magic ===");

// TODO(human): Implement the curry function
// This should take any function and return a curried version
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(null, args);
    } else {
      return function (...newArgs) {
        return curried(...args, ...newArgs);
      };
    }
  };
}

// Example functions to test with curry
function subtract(a, b, c) {
  return a - b - c;
}

function greet(greeting, name, punctuation) {
  return `${greeting}, ${name}${punctuation}`;
}

// After implementing curry, these should work:
const curriedSubtract = curry(subtract);
console.log("curriedSubtract(10)(3)(1):", curriedSubtract(10)(3)(1)); // 6
console.log("curriedSubtract(10, 3)(1):", curriedSubtract(10, 3)(1)); // 6

const sayHello = curry(greet)("Hello");
console.log(sayHello("Alice")("!"));

console.log("\n🎯 Run this file to see currying in action!");
console.log(
  "💡 Next: Implement the curry function to unlock auto-currying magic!"
);
