console.log("Connected");
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

function balanceAmount(bigAmount, smallAmount) {
  return Math.round(
    Number.parseFloat(bigAmount) - Number.parseFloat(smallAmount)
  );
}

calculateButton.addEventListener("click", function () {
  console.log(incomeInput.value);
  console.log(foodInput.value);
  console.log(rentInput.value);
  console.log(clothesInput.value);
  if (
    incomeInput.value != "" &&
    foodInput.value != "" &&
    rentInput.value != "" &&
    clothesInput.value != ""
  ) {
    if (
      Number.parseFloat(incomeInput.value) > 0 &&
      Number.parseFloat(foodInput.value) > 0 &&
      Number.parseFloat(rentInput.value) > 0 &&
      Number.parseFloat(clothesInput.value) > 0
    ) {
      totalExpenses.innerText =
        Number.parseFloat(foodInput.value) +
        Number.parseFloat(rentInput.value) +
        Number.parseFloat(clothesInput.value);

      balance.innerText = balanceAmount(
        incomeInput.value,
        totalExpenses.innerText
      );
    } else {
      alert("Please enter positive number");
    }
  } else {
    alert("Please input the values to calculate");
  }
});

saveButton.addEventListener("click", function () {
  if (Number.parseFloat(saveInput.value) > 0) {
    savingAmount.innerText = Math.round(
      Number.parseFloat(balance.innerText) *
        (Number.parseFloat(saveInput.value) / 100)
    );

    remainingBalance.innerText = balanceAmount(
      balance.innerText,
      savingAmount.innerText
    );
  }
});
