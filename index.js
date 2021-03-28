








// Add listeners to input field
document.querySelector(inputFieldID).addEventListener( 'input', (e) => {
  // document.querySelector(outputFieldID).innerText = e.target.value;
  document.querySelector(outputFieldID).innerText = divideWord(e.target.value);

})



document.querySelector(inputFieldID).addEventListener( 'change', (e) => {

  // document.querySelector(outputFieldID).innerText = divideWord(e.target.value);
})