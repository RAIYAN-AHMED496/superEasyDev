function calculateTotal () {
  const Rf = parseFloat(document.querySelector('.js-risk-free').value);
  const Rm = parseFloat(document.querySelector('.js-market-risk').value);
  const B = parseFloat(document.querySelector('.js-bita').value);

  if(isNaN(Rf) || isNaN(Rm) || isNaN(B) ) {
    showAlert("Please fill in all the fields with valid numbers.");
    return;
  }
  const answer = Rf+((Rm-Rf) * B);
  console.log(`${answer}%`);

  document.querySelector('.answer').value = `${answer}%`;
  document.querySelector('.js-risk-free').value = '';
  document.querySelector('.js-market-risk').value = '';
  document.querySelector('.js-bita').value = '';
  // console.log(Rf);
  // console.log(Rm);
  // console.log(B);
}

// custom alert
function showAlert(message) {
  const alertBox = document.getElementById('customAlert');
  document.getElementById('alertMessage').textContent = message;
  alertBox.style.display = 'flex';
}

function closeAlert() {
  document.getElementById('customAlert').style.display = 'none';
}

// Trigger calculation when Enter is pressed
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    calculateTotal();
  }
});
