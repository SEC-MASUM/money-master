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

calculateButton.addEventListener("click", function () {
  console.log(incomeInput.value);
  console.log(foodInput.value);
  console.log(rentInput.value);
  console.log(clothesInput.value);

  totalExpenses.innerText =
    Number.parseFloat(foodInput.value) +
    Number.parseFloat(rentInput.value) +
    Number.parseFloat(clothesInput.value);

  balance.innerText =
    Number.parseFloat(incomeInput.value) -
    Number.parseFloat(totalExpenses.innerText);
});

saveButton.addEventListener("click", function () {
  savingAmount.innerText =
    Number.parseFloat(balance.innerText) *
    (Number.parseFloat(saveInput.value) / 100);
  remainingBalance.innerText =
    Number.parseFloat(balance.innerText) - Number.parseFloat(savingAmount.innerText);
});
