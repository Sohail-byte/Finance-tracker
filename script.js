// Initialize currentBalance by retrieving it from localStorage or setting it to 0 if not found
let currentBalance = parseFloat(localStorage.getItem('currentBalance'))

// Update the income display with the current balance
const incomeDisplay = document.querySelector(".current-income");
incomeDisplay.textContent = currentBalance;

// Get the elements for the button and input
const addIncomeButton = document.querySelector(".add-income-btn")
const addIncomeInput = document.querySelector(".add-income-input")

function updateCurrentBalance(income) {
    // Convert the income to a number and add it to the current balance
    currentBalance = parseFloat(income)

    // Update the display
    incomeDisplay.textContent = currentBalance + "Rs"

    // Save the updated balance to localStorage
    localStorage.setItem('currentBalance', currentBalance)
}

// Add event listener to the button
addIncomeButton.addEventListener("click", () => {
    // Check if the input value is a valid number
    if (addIncomeInput.value === ''){
        alert("Please enter a valid number")
    } else {
        updateCurrentBalance(addIncomeInput.value)
    }
    addIncomeInput.value = ""
})




