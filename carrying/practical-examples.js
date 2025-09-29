// Practical Currying Examples - Real-World Applications
console.log("🔧 Practical Currying Applications 🔧\n");

// === ARRAY PROCESSING ===
console.log("=== Array Processing with Currying ===");

// Curried filter function
const filter = (predicate) => (array) => array.filter(predicate);

// Curried map function
const map = (transformer) => (array) => array.map(transformer);

// Create specialized functions
const filterEven = filter((x) => x % 2 === 0);
const filterPositive = filter((x) => x > 0);
const doubleValues = map((x) => x * 2);
const toUpperCase = map((str) => str.toUpperCase());

const numbers = [1, 2, 3, 4, 5, -1, -2];
const words = ["hello", "world", "currying", "rocks"];

console.log("Original numbers:", numbers);
console.log("Even numbers:", filterEven(numbers));
console.log("Positive numbers:", filterPositive(numbers));
console.log("Doubled:", doubleValues(numbers));

console.log("\nOriginal words:", words);
console.log("Uppercase:", toUpperCase(words));

// === HTTP REQUEST BUILDER ===
console.log("\n=== HTTP Request Builder ===");

const createRequest = (method) => (url) => (headers) => (body) => ({
  method,
  url,
  headers,
  body,
});

// Specialized request builders
const GET = createRequest("GET");
const POST = createRequest("POST");
const apiRequest = GET("https://api.example.com");
const jsonPost = POST("https://api.example.com/users");

const getUserRequest = apiRequest({ Authorization: "Bearer token" })(null);
const createUserRequest = jsonPost({ "Content-Type": "application/json" });

console.log("GET request:", getUserRequest);
console.log("POST request builder ready for body");

// === VALIDATION PIPELINE ===
console.log("\n=== Validation Pipeline ===");

const validate = (rule) => (value) => rule(value);

// Validation rules
const minLength = (min) => (str) =>
  str.length >= min
    ? { valid: true }
    : { valid: false, error: `Must be at least ${min} characters` };

const isEmail = (str) =>
  /\S+@\S+\.\S+/.test(str)
    ? { valid: true }
    : { valid: false, error: "Must be a valid email" };

const required = (str) =>
  str && str.trim()
    ? { valid: true }
    : { valid: false, error: "This field is required" };

// Create specialized validators
const validatePassword = validate(minLength(8));
const validateEmail = validate(isEmail);
const validateRequired = validate(required);

console.log("Password validation:", validatePassword("123"));
console.log("Email validation:", validateEmail("test@example.com"));
console.log("Required validation:", validateRequired(""));

// === CONFIGURATION BUILDER ===
console.log("\n=== Configuration Builder ===");

const config = (environment) => (database) => (cache) => (logging) => ({
  environment,
  database,
  cache,
  logging,
});

const productionConfig = config("production");
const devConfig = config("development");

const withPostgres = productionConfig({
  host: "localhost",
  port: 5432,
  name: "myapp",
});

const withRedis = withPostgres({
  host: "localhost",
  port: 6379,
});

const fullConfig = withRedis({
  level: "info",
  file: "app.log",
});

console.log("Full configuration:", fullConfig);

console.log(
  "\n💡 Notice how currying enables:",
  "\n  • Function specialization",
  "\n  • Reusable building blocks",
  "\n  • Clean composition patterns",
  "\n  • Configuration without repetition"
);
