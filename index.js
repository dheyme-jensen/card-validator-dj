function cardNumber (card) {
  const arrayCard = card.split('').map(Number);
  return arrayCard;
};
function calculateDigit (card) {
  return cardNumber(card)
    .map((currentElement, index) => index % 2 === 0 ? currentElement * 2 : currentElement)
    .map((currentElement) => currentElement > 9 ? currentElement - 9 : currentElement)
    .reduce((counter, element) => {
      return counter + element; 
    });
};
