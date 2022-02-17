// console.log("Connected");
const incomeInput = document.getElementById("income-input");
const foodInput = document.getElementById("food-cost");
const rentInput = document.getElementById("rent-cost");
const clothesInput = document.getElementById("clothes-cost");
const calculateButton = document.getElementById("calculate-button");
const saveInput = document.getElementById("save-input");
const saveButton = document.getElementById("save-button");
const totalExpenses = document.getElementById("total-expenses");
const balance = document.getElementById("balance");
const savingAmount = document.getElementById("saving-amount");
const remainingBalance = document.getElementById("remaining-balance");

// Remaining Balance calculation function
function balanceAmount(bigAmount, smallAmount) {
  return Math.round(
    Number.parseFloat(bigAmount) - Number.parseFloat(smallAmount)
  );
}
//Calcutale button
calculateButton.addEventListener("click", function () {
  // console.log(incomeInput.value);
  // console.log(foodInput.value);
  // console.log(rentInput.value);
  // console.log(clothesInput.value);

  /* Checking income and expenses fields are empty or not */
  if (
    incomeInput.value != "" ||
    foodInput.value != "" ||
    rentInput.value != "" ||
    clothesInput.value != ""
  ) {
    /* Checking income and expenses fields are greater than or equal to 0 */
    if (
      Number.parseFloat(incomeInput.value) >= 0 &&
      Number.parseFloat(foodInput.value) >= 0 &&
      Number.parseFloat(rentInput.value) >= 0 &&
      Number.parseFloat(clothesInput.value) >= 0
    ) {
      // Expense calculation
      totalExpenses.innerText =
        Number.parseFloat(foodInput.value) +
        Number.parseFloat(rentInput.value) +
        Number.parseFloat(clothesInput.value);

      // Remaining balance after expenses
      balance.innerText = balanceAmount(
        incomeInput.value,
        totalExpenses.innerText
      );
    } else if (
      Number.parseFloat(incomeInput.value) >= 0 ||
      Number.parseFloat(foodInput.value) >= 0 ||
      Number.parseFloat(rentInput.value) >= 0 ||
      Number.parseFloat(clothesInput.value) >= 0
    ) {
      // Checking which field's value is empty or negative or string
      if (
        isNaN(Number.parseFloat(incomeInput.value)) ||
        Number.parseFloat(incomeInput.value) < 0
      ) {
        alert("Please enter positive value in 'Income' field");
      } else if (
        isNaN(Number.parseFloat(foodInput.value)) ||
        Number.parseFloat(foodInput.value) < 0
      ) {
        alert("Please enter positive value in 'Food' field");
      } else if (
        isNaN(Number.parseFloat(rentInput.value)) ||
        Number.parseFloat(rentInput.value) < 0
      ) {
        alert("Please enter positive value in 'Rent' field");
      } else if (
        isNaN(Number.parseFloat(clothesInput.value)) ||
        Number.parseFloat(clothesInput.value) < 0
      ) {
        alert("Please enter positive value in 'Clothes' field");
      }
    } else {
      alert("Please enter positive number");
    }
  } else {
    alert("Please input the values to calculate");
  }
});

// Save button
saveButton.addEventListener("click", function () {
  if (Number.parseFloat(saveInput.value) >= 0) {
    const savingAmountValue = Math.round(
      Number.parseFloat(balance.innerText) *
        (Number.parseFloat(saveInput.value) / 100)
    );
    console.log(savingAmountValue);
    // if(savingAmount)

    remainingBalance.innerText = balanceAmount(
      balance.innerText,
      savingAmount.innerText
    );
  } else {
    alert("Please input positive to calculate Saving Amount");
  }
});
