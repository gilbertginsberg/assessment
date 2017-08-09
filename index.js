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
  function sliceFirstDigit(digit) {
    const slicer = number.value.length - digit;
    return number.value.slice(slicer);
  }

  function genMultipleOfTenPhrase() {
    const secondToLastIndex = number.value.length - 2;
    const value = number.value[secondToLastIndex];
    const multOfTenPhrase = baseNums[`${value}0`];

    return multOfTenPhrase;
  }

   // Covers numbers 0 to 9
  function genLessThanTenPhrase() {
    const lastDigit = number.value.length - 1;
    const valueOfLastDigit = number.value[lastDigit];
    const lessThanTenPhrase = baseNums[valueOfLastDigit];

    engPhrase.textContent = lessThanTenPhrase;
    return engPhrase.textContent;
  }

  // Covers numbers 10 to 99
  function genLessThan100Phrase() {
    const secondToLastIndex = number.value.length - 2;
    const valueOfSecondToLastDigit = number.value[secondToLastIndex];

    // Phrasal chunks
    const multOfTenPhrase = genMultipleOfTenPhrase();
    const lessThanTenPhrase = genLessThanTenPhrase();

    if (number.value.length === 2 && baseNums[number.value]) {
      engPhrase.textContent = multOfTenPhrase;
    } else {
      engPhrase.textContent = valueOfSecondToLastDigit === '0' ? `${lessThanTenPhrase}` : `${multOfTenPhrase}-${lessThanTenPhrase}`;
    }

    return engPhrase.textContent;
  }

  // Covers numbers 100 to 999
  function gen100to999Phrase() {
    const lastTwoDigits = sliceFirstDigit(2);
    const thirdToLastIndex = number.value.length - 3;
    const valueOfThirdToLastDigit = number.value[thirdToLastIndex];

    // Phrasal chunks
    const hundredPhrase = baseNums[valueOfThirdToLastDigit] === 'zero' ? '' : `${baseNums[valueOfThirdToLastDigit]} hundred`;
    const lessThan100Phrase = genLessThan100Phrase();
    const fullPhrase = baseNums[lastTwoDigits] ? `${hundredPhrase} ${baseNums[lastTwoDigits]}` : `${hundredPhrase} ${lessThan100Phrase}`;

    engPhrase.textContent = lastTwoDigits === '00' ? hundredPhrase : fullPhrase;

    return engPhrase.textContent;
  }

  // Covers numbers 1000 to 9999
  function gen1000to9999Phrase() {
    const lastThreeDigits = sliceFirstDigit(3);
    const fourthToLastIndex = number.value.length - 4;
    const valueOfFourthToLastDigit = number.value[fourthToLastIndex];

    // Phrasal chunks
    const thousandPhrase = valueOfFourthToLastDigit === '0' ? '' : `${baseNums[valueOfFourthToLastDigit]} thousand`;
    const hundredPhrase = gen100to999Phrase();

    engPhrase.textContent = lastThreeDigits === '000' ? thousandPhrase : `${thousandPhrase} ${hundredPhrase}`;

    return engPhrase.textContent;
  }

  // Covers numbers 10,000 to 99,000
  function genTenThousandsPhrase() {

  }

  // Covers numbers 100,000 to 999,999
  function gen100ThousandsPhrase() {

  }

  // Covers numbers 1,000,000 to 9,999,999
  function genMillionsPhrase() {

  }

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    // Covers numbers 0 to 9
    if (number.value.length === 1) {
      return genLessThanTenPhrase();

    // Covers all numbers 10 to 99
    } else if (number.value.length === 2) {
      return genLessThan100Phrase();

    // Covers numbers 100 to 999
    } else if (number.value.length === 3) {
      return gen100to999Phrase();

    // Covers numbers 1000 to 9999
    } else if (number.value.length === 4) {
      return gen1000to9999Phrase();
 
    // Covers numbers 10,000 to 99,999
    } else if (number.value.length === 5) {
    
    }

    return alert('Hola amigo o amiga. Please enter a number, 1 through 1 trillion, and you will find magic.');
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};
