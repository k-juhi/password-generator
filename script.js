// Selectors
const length = document.getElementById("password-length");
const lowercase = document.getElementById("lowercase");
const uppercase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const generateBtn = document.getElementById("generate-btn");
const passwordDisplay = document.getElementById("password-display");

// Character sets
const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numberChars = "0123456789";
const symbolChars = "$@%&*()_+-=[]{}|,./?><";

// Generate password
function generatePassword() {
  // Get selected criteria
  const len = length.value;
  const hasLowercase = lowercase.checked;
  const hasUppercase = uppercase.checked;
  const hasNumbers = numbers.checked;
  const hasSymbols = symbols.checked;

  // Check at least one character type is selected
  const typesCount = hasLowercase + hasUppercase + hasNumbers + hasSymbols;
  if (typesCount === 0) {
    alert("Please select at least one character type.");
    return "";
  }

  // Build character set
  let chars = "";
  if (hasLowercase) chars += lowercaseChars;
  if (hasUppercase) chars += uppercaseChars;
  if (hasNumbers) chars += numberChars;
  if (hasSymbols) chars += symbolChars;

  // Generate password
  let password = "";
  for (let i = 0; i < len; i++) {
    password += chars[Math.floor(Math.random() * chars.length)];
  }

  // Display password
  passwordDisplay.value = password;
  alert("Your password is: " + password);
}

// Event listener
generateBtn.addEventListener("click", generatePassword);
