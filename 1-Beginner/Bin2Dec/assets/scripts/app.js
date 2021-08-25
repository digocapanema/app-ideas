const userInput = document.getElementById('input-number');
const convertBtn = document.getElementById('convert');
const currentResultOutput = document.getElementById('current-result');

userInput.addEventListener('keydown', function(ev) {
  if(ev.keyCode != 48 && ev.keyCode != 49 && ev.keyCode != 8) {
    ev.preventDefault();
  }
});

function convert() {
  const numberAsString = Array.from(userInput.value).reverse();

  let decimalNumber = 0;

  for (let index = 0; index < numberAsString.length; index++) { 
    decimalNumber += numberAsString[index] * (2 ** index);
  }

  currentResultOutput.textContent = decimalNumber;
}

convertBtn.addEventListener('click', convert);

