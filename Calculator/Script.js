function calculate() {
  var num1 = parseFloat(document.getElementById('num1').value);
  var num2 = parseFloat(document.getElementById('num2').value);
  var operation = document.getElementById('operation').value;
  var resultContainer = document.getElementById('result');

  if (isNaN(num1) || isNaN(num2)) {
    resultContainer.innerHTML = '<div class="alert alert-danger" role="alert">Please enter valid numbers.</div>';
    return;
  }

  var result;
  if (operation === '+') {
    result = num1 + num2;
  } else if (operation === '-') {
    result = num1 - num2;
  } else if (operation === '*') {
    result = num1 * num2;
  } else if (operation === '/') {
    if (num2 === 0) {
      resultContainer.innerHTML = '<div class="alert alert-danger" role="alert">Division by zero is not allowed.</div>';
      return;
    }
    result = num1 / num2;
  } else {
    resultContainer.innerHTML = '<div class="alert alert-danger" role="alert">Invalid operation.</div>';
    return;
  }

  resultContainer.innerHTML = '<div class="alert alert-success" role="alert">Result: ' + result + '</div>';
}