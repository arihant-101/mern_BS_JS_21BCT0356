function multiplyBy() {
    var num1 = parseFloat(document.getElementById("firstNumber").value);
    var num2 = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
    } else {
      document.getElementById("result").innerHTML = num1 * num2;
    }
  }

  function divideBy() {
    var num1 = parseFloat(document.getElementById("firstNumber").value);
    var num2 = parseFloat(document.getElementById("secondNumber").value);

    if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerHTML = "Please enter valid numbers.";
    } else if (num2 === 0) {
      document.getElementById("result").innerHTML = "Cannot divide by zero.";
    } else {
      document.getElementById("result").innerHTML = num1 / num2;
    }
  }