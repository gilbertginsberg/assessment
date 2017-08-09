window.onload = () => {
  const form = document.querySelector('form');
  const number = document.querySelector('#num');
  const engPhrase = document.querySelector('#eng-phrase');
  let unPaddedNumber = '';

  const baseNums = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
  };

  // **Helper functions**
  function slicedNumber(digit) {
    const indexToSliceFrom = unPaddedNumber.length - digit;
    const slicedNum = unPaddedNumber.slice(indexToSliceFrom);
    return slicedNum;
  }

  function genMultipleOfTenPhrase(digit) {
    const multOfTenPhrase = baseNums[`${digit}0`];
    return multOfTenPhrase;
  }
  // **

   // *Covers numbers 0 to 9*
  function genLessThanTenPhrase() {
    const lastIndex = unPaddedNumber.length - 1;
    const valueOfLastDigit = unPaddedNumber[lastIndex];
    const lessThanTenPhrase = baseNums[valueOfLastDigit];

    if (unPaddedNumber.length >= 3) {
      engPhrase.textContent = `and ${lessThanTenPhrase}`;
    } else {
      engPhrase.textContent = lessThanTenPhrase;
    }
    return engPhrase.textContent;
  }

  // *Covers numbers 10 to 99*
  function genLessThan100Phrase() {
    const secondToLastIndex = unPaddedNumber.length - 2;
    const valueOfSecondToLastDigit = unPaddedNumber[secondToLastIndex];
    const multOfTenPhrase = genMultipleOfTenPhrase(valueOfSecondToLastDigit);
    const lessThanTenPhrase = genLessThanTenPhrase();

    if (unPaddedNumber.length === 2 && baseNums[unPaddedNumber]) {
      engPhrase.textContent = baseNums[unPaddedNumber];
    } else {
      engPhrase.textContent = valueOfSecondToLastDigit === '0' ? `${lessThanTenPhrase}` : `${multOfTenPhrase}-${lessThanTenPhrase}`;
    }

    return engPhrase.textContent;
  }

  // *Covers numbers 100 to 999*
  function gen100to999Phrase() {
    const lastTwoDigits = slicedNumber(2);
    const thirdToLastIndex = unPaddedNumber.length - 3;
    const valueOfThirdToLastDigit = unPaddedNumber[thirdToLastIndex];
    const hundredPhrase = baseNums[valueOfThirdToLastDigit] === 'zero' ? '' : `${baseNums[valueOfThirdToLastDigit]} hundred`;
    const lessThan100Phrase = genLessThan100Phrase();
    const fullPhrase = baseNums[lastTwoDigits] ? `${hundredPhrase} ${baseNums[lastTwoDigits]}` : `${hundredPhrase} ${lessThan100Phrase}`;

    engPhrase.textContent = lastTwoDigits === '00' ? hundredPhrase : fullPhrase;

    return engPhrase.textContent;
  }

  // *Covers numbers 1000 to 9999*
  function gen1000to9999Phrase() {
    const lastThreeDigits = slicedNumber(3);
    const fourthToLastIndex = unPaddedNumber.length - 4;
    const valueOfFourthToLastDigit = unPaddedNumber[fourthToLastIndex];
    const thousandPhrase = valueOfFourthToLastDigit === '0' ? '' : `${baseNums[valueOfFourthToLastDigit]} thousand`;
    const hundredPhrase = gen100to999Phrase();

    engPhrase.textContent = lastThreeDigits === '000' ? thousandPhrase : `${thousandPhrase} ${hundredPhrase}`;

    return engPhrase.textContent;
  }

  // Covers numbers 10,000 to 99,000
  function genTenThousandsPhrase() {
    const lastFourDigits = slicedNumber(4);
    const secondDigit = unPaddedNumber[1];
    const multOfTenPhrase = genMultipleOfTenPhrase(unPaddedNumber[0]);
    const tenThousandPhrase = secondDigit === '0' ? `${multOfTenPhrase} thousand` : `${multOfTenPhrase}-${baseNums[unPaddedNumber[1]]} thousand`;
    const hundredPhrase = gen100to999Phrase();

    engPhrase.textContent = `${tenThousandPhrase} ${hundredPhrase}`;
    return engPhrase.textContent;
  }

  // Covers numbers 100,000 to 999,999
  function gen100ThousandsPhrase() {

  }

  // Covers numbers 1,000,000 to 9,999,999
  function genMillionsPhrase() {

  }

  function convertNumToEngPhrase(num) {
    if (num.length === 1) {
      return genLessThanTenPhrase();
    } else if (num.length === 2) {
      return genLessThan100Phrase();
    } else if (num.length === 3) {
      return gen100to999Phrase();
    } else if (num.length === 4) {
      return gen1000to9999Phrase();
    } else if (num.length === 5) {
      return genTenThousandsPhrase();
    } else if (num.length === 6) {
  
    } else if (num.length === 7) {
  
    } else if (num.length === 8) {
  
    } else if (num.length === 9) {
  
    } else if (num.length=== 10) {
  
    } else if (num.length === 11) {
  
    } else if (num.length === 12) {
  
    } else if (num.length === 13) {
  
    }

    return alert('Hola amigo o amiga. Please enter a number, 1 through 1 trillion, and you will find magic.');
  }

  function removePaddedZeros(e) {
    e.preventDefault();

    const numArr = number.value.split('');
    const indexOfFirstNonZeroNum = numArr.findIndex(num => num > 0);

    unPaddedNumber = number.value.slice(indexOfFirstNonZeroNum);

    convertNumToEngPhrase(unPaddedNumber);
  }

  form.addEventListener('submit', removePaddedZeros, false);
};