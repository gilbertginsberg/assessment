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
    let multOfTenPhrase = baseNums[`${value}0`];

    if (!multOfTenPhrase) {
      multOfTenPhrase = '';
    }
    return multOfTenPhrase;
  }

  function genLessThanTenPhrase() {
    const lastIndex = number.value.length - 1;
    const value = number.value[lastIndex];
    const lessThanTenPhrase = baseNums[value];

    return lessThanTenPhrase;
  }
  // **

  // **Produce english equivalent phrases for numbers 0 to 1 trillion**
  function genLessThan100Phrase() {
    const secondToLastIndex = number.value[number.value.length - 2];
    const multOfTenPhrase = genMultipleOfTenPhrase();
    const lessThanTenPhrase = genLessThanTenPhrase();
    engPhrase.textContent = secondToLastIndex === '0' ? `${lessThanTenPhrase}` : `${multOfTenPhrase}-${lessThanTenPhrase}`;

    return engPhrase.textContent;
  }

  function gen100to999Phrase() {
    const lastTwoDigits = sliceFirstDigit(2);
    const thirdToLastIndex = number.value.length - 3;
    const value = number.value[thirdToLastIndex];
    const hundredPhrase = baseNums[value] === 'zero' ? '' : `${baseNums[value]} hundred`;
    const lessThan100Phrase = genLessThan100Phrase();
    const fullPhrase = baseNums[lastTwoDigits] ? `${hundredPhrase} ${baseNums[lastTwoDigits]}` : `${hundredPhrase} ${lessThan100Phrase}`;
    console.log(`fullPhrase is ${fullPhrase}`);
    engPhrase.textContent = lastTwoDigits === '00' ? hundredPhrase : fullPhrase;

    return engPhrase.textContent;
  }

  function gen1000to9999Phrase() {
    const lastThreeDigits = sliceFirstDigit(3);
    const fourthToLastIndex = number.value.length - 4;
    const value = number.value[fourthToLastIndex];
    const thousandPhrase = value === '0' ? '' : `${baseNums[value]} thousand`;
    const hundredPhrase = gen100to999Phrase();

    engPhrase.textContent = lastThreeDigits === '000' ? thousandPhrase : `${thousandPhrase} ${hundredPhrase}`;

    return engPhrase.textContent;
  }

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    // Covers all hardcoded numbers
    if (baseNums[number.value]) {
      engPhrase.textContent = baseNums[number.value];
      return engPhrase.textContent;

    // Covers all non-harcoded numbers < 100
    } else if (number.value.length === 2) {
      return genLessThan100Phrase();

    // Covers numbers 100 to 999
    } else if (number.value.length === 3) {
      return gen100to999Phrase();

    // Covers numbers 1000 to 9999
    } else if (number.value.length === 4) {
      return gen1000to9999Phrase();
    }

    return console.log('bad number amiguito');
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};
