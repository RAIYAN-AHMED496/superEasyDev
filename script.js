function calculateTotal () {
  const Rf = parseFloat(document.querySelector('.js-risk-free').value);
  const Rm = parseFloat(document.querySelector('.js-market-risk').value);
  const B = parseFloat(document.querySelector('.js-bita').value);

  const answer = Rf+((Rm-Rf) * B);
  console.log(`${answer}%`);

  document.querySelector('.answer').value = `${answer}%`;
  // console.log(Rf);
  // console.log(Rm);
  // console.log(B);
}
