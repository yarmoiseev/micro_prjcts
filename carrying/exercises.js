// Mini Currying Exercises
console.log("🏋️ Currying Practice 🏋️\n");

// Exercise 1: Fill in the blanks
console.log("=== Exercise 1: Complete the Function ===");

// TODO(human): Complete this curried subtract function
const subtract = (a) => {
  // Return a function that takes 'b' and returns a - b
  return (b) => a - b;
};

// Test it:
console.log("subtract(10)(3):", subtract(10)(3)); // Should be 7

console.log("\n=== Exercise 2: Make Your Own ===");

// TODO(human): Create a curried function called 'divide' that divides a by b
const divide = (a) => {
  return (b) => a / b;
};

// Test it:
console.log("divide(10)(2):", divide(10)(2)); // Should be 5

console.log("\n=== Exercise 3: Three Steps ===");

// TODO(human): Create a function that takes three numbers and multiplies them
// Call it 'multiplyThree' and make it curried
const multiplyThree = (a) => {
  return (b) => {
    return (c) => a * b * c;
  };
};

// Test it:
console.log("multiplyThree(2)(3)(4):", multiplyThree(2)(3)(4)); // Should be 24

console.log("\n=== Exercise 4: Practical Use ===");

// TODO(human): Create a curried function that creates email addresses
// It should take a domain first, then a username
// Example: createEmail('gmail.com')('john') should return 'john@gmail.com'
const createEmail = (domain) => (userName) => `${userName}@${domain}`;

// Test it:
const gmailUser = createEmail("gmail.com");
console.log(gmailUser("alice")); // Should be 'alice@gmail.com'

console.log("\n💡 Tips:");
console.log("• Each function takes ONE parameter");
console.log("• Use => to return the next function");
console.log("• The last function does the actual work");
console.log("\n🎯 Complete one exercise at a time and test it!");
