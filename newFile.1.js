
var keys = document.querySelectorAll('.button');
var operators = ['+', '-', 'x', '/'];
var decimalAdded = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].addEventListener('click', function (e) {
    e.preventDefault();
    var input = document.querySelector('#display');
    var inputVal = input.value;
    var btnVal = this.innerHTML;
    if (btnVal == 'C') {
      input.value = '';
      decimalAdded = false;
    } else if (btnVal == '=') {
      var equation = inputVal;
      var lastChar = equation[equation.length - 1];

      equation = equation.replace(/x/g, '*');

      if (operators.indexOf(lastChar) > -1 || lastChar == '.')
        equation = equation.replace(/.$/, '');

      if (equation)
        input.value = eval(equation);

      decimalAdded = false;
    } else if (operators.indexOf(btnVal) > -1) {
      var lastChar = inputVal[inputVal.length - 1];

      if (inputVal != '' && operators.indexOf(lastChar) == -1)
        input.value += btnVal;

      else if (inputVal == '' && btnVal == '-')
        input.value += btnVal;

      if (operators.indexOf(lastChar) > -1 && inputVal.length > 1) {
        input.value = inputVal.replace(/.$/, btnVal);
      }

      decimalAdded = false;
    } else if (btnVal == '.') {
      if (!decimalAdded) {
        input.value += btnVal;
        decimalAdded = true;
      }
    } else {
      input.value += btnVal;
    }
  })
}
