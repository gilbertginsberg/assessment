window.onload = () => {
  const form = document.querySelector('form');
  const number = document.querySelector('#num');
  const engPhrase = document.querySelector('#eng-phrase');

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
    const indexToSliceFrom = number.value.length - digit;
    const slicedNum = number.value.slice(indexToSliceFrom);
    return slicedNum;
  }

  function genMultipleOfTenPhrase(digit) {
    const multOfTenPhrase = baseNums[`${digit}0`];
    return multOfTenPhrase;
  }
  // **

   // *Covers numbers 0 to 9*
  function genLessThanTenPhrase() {
    const lastIndex = number.value.length - 1;
    const valueOfLastDigit = number.value[lastIndex];
    const lessThanTenPhrase = baseNums[valueOfLastDigit];

    if (number.value.length >= 3) {
      engPhrase.textContent = `and ${lessThanTenPhrase}`;
    } else {
      engPhrase.textContent = lessThanTenPhrase;
    }
    return engPhrase.textContent;
  }

  // *Covers numbers 10 to 99*
  function genLessThan100Phrase() {
    const secondToLastIndex = number.value.length - 2;
    const valueOfSecondToLastDigit = number.value[secondToLastIndex];

    // Phrasal chunks
    const multOfTenPhrase = genMultipleOfTenPhrase(valueOfSecondToLastDigit);
    const lessThanTenPhrase = genLessThanTenPhrase();

    if (number.value.length === 2 && baseNums[number.value]) {
      engPhrase.textContent = baseNums[number.value];
    } else {
      engPhrase.textContent = valueOfSecondToLastDigit === '0' ? `${lessThanTenPhrase}` : `${multOfTenPhrase}-${lessThanTenPhrase}`;
    }

    return engPhrase.textContent;
  }

  // *Covers numbers 100 to 999*
  function gen100to999Phrase() {
    const lastTwoDigits = slicedNumber(2);
    const thirdToLastIndex = number.value.length - 3;
    const valueOfThirdToLastDigit = number.value[thirdToLastIndex];
    const hundredPhrase = baseNums[valueOfThirdToLastDigit] === 'zero' ? '' : `${baseNums[valueOfThirdToLastDigit]} hundred`;
    const lessThan100Phrase = genLessThan100Phrase();
    const fullPhrase = baseNums[lastTwoDigits] ? `${hundredPhrase} ${baseNums[lastTwoDigits]}` : `${hundredPhrase} ${lessThan100Phrase}`;

    engPhrase.textContent = lastTwoDigits === '00' ? hundredPhrase : fullPhrase;

    return engPhrase.textContent;
  }

  // *Covers numbers 1000 to 9999*
  function gen1000to9999Phrase() {
    const lastThreeDigits = slicedNumber(3);
    const fourthToLastIndex = number.value.length - 4;
    const valueOfFourthToLastDigit = number.value[fourthToLastIndex];
    const thousandPhrase = valueOfFourthToLastDigit === '0' ? '' : `${baseNums[valueOfFourthToLastDigit]} thousand`;
    const hundredPhrase = gen100to999Phrase();

    engPhrase.textContent = lastThreeDigits === '000' ? thousandPhrase : `${thousandPhrase} ${hundredPhrase}`;

    return engPhrase.textContent;
  }

  // Covers numbers 10,000 to 99,000
  function genTenThousandsPhrase() {
    const lastFourDigits = slicedNumber(4);
    const secondDigit = number.value[1];
    const multOfTenPhrase = genMultipleOfTenPhrase(number.value[0]);
    const tenThousandPhrase = secondDigit === '0' ? `${multOfTenPhrase} thousand` : `${multOfTenPhrase}-${baseNums[number.value[1]]} thousand`;
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

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    if (number.value.length === 1) {
      return genLessThanTenPhrase();
    } else if (number.value.length === 2) {
      return genLessThan100Phrase();
    } else if (number.value.length === 3) {
      return gen100to999Phrase();
    } else if (number.value.length === 4) {
      return gen1000to9999Phrase();
    } else if (number.value.length === 5) {
      return genTenThousandsPhrase();
    } else if (number.value.length === 6) {
    
    } else if (number.value.length === 7) {
    
    } else if (number.value.length === 8) {
    
    } else if (number.value.length === 9) {
    
    } else if (number.value.length === 10) {
    
    } else if (number.value.length === 11) {
    
    } else if (number.value.length === 12) {
    
    } else if (number.value.length === 13) {
    
    }

    return alert('Hola amigo o amiga. Please enter a number, 1 through 1 trillion, and you will find magic.');
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};