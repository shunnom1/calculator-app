const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");
const equalButton = document.querySelector(".equal");
let currentInput = "";

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      currentInput = "";
      display.value = "";
    } else {
      currentInput += value;
      display.value = currentInput;
    }

  });
});

equalButton.addEventListener("click", () => {
  try {
    const result = eval(currentInput);
    display.value = result;
    currentInput = result.toString();
  } catch (error) {
    display.value = "Error";
    currentInput = "";
  }
});