// Get references to DOM elements
const descriptionInput = document.getElementById("description");
const amountInput = document.getElementById("amount");
const addTransactionButton = document.getElementById("addTransaction");
const transactionList = document.getElementById("transaction-list");
const balanceSpan = document.getElementById("balance");

let balance = 0; // Initialize balance

// Function to update balance
function updateBalance() {
  balanceSpan.textContent = `$${balance.toFixed(2)}`;
}

// Function to create a new transaction
function addTransaction(description, amount) {
  const li = document.createElement("li");
  li.textContent = `${description}: $${amount}`;

  // Style the transaction based on type (income or expense)
  if (amount >= 0) {
    li.classList.add("income");
  } else {
    li.classList.add("expense");
  }

  transactionList.appendChild(li);
  balance += parseFloat(amount); // Update balance

  updateBalance(); // Re-render balance
}

// Event listener for the "Add Transaction" button
addTransactionButton.addEventListener("click", function () {
  const description = descriptionInput.value.trim();
  const amount = parseFloat(amountInput.value.trim());

  // Check if inputs are valid
  if (description && !isNaN(amount)) {
    addTransaction(description, amount); // Add transaction
    descriptionInput.value = ""; // Clear description
    amountInput.value = ""; // Clear amount
  } else {
    alert("Please enter a valid description and amount.");
  }
});

// Initialize balance display
updateBalance();
