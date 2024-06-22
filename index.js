let displayProperty = document.getElementsByName("input");
let displayValue = "";
displayProperty[0].setAttribute("placeholder", displayValue);

//Making a function to display the values
function display(value) {
  displayValue += value;
  console.log(displayValue);
  displayProperty[0].setAttribute("placeholder", displayValue);
}

//Making a function to calculate the values on screen
function calculate() {
  if (displayValue === "") {
    displayProperty[0].setAttribute("placeholder", "0");
  } else {
    let result = eval(displayValue);
    console.log(result);
    displayProperty[0].setAttribute("placeholder", result);
  }
}

function clearScreen() {
  displayProperty[0].setAttribute("placeholder", "");
  displayValue = "";
}
