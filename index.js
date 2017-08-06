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

  function chopOffFirstDigit() {
    return number.value.slice(1);
  }

  function genBaseNumPhrase(digit) {
    const phrase = baseNums[number.value[digit]];
    return phrase;
  }

  function genMultipleOfTenPhrase(digit) {
    const phrase = baseNums[`${number.value[digit]}0`];
    return phrase;
  }

  function genLessThan100Phrase() {
    const partOne = genMultipleOfTenPhrase(0);
    const partTwo = genBaseNumPhrase(1);

    engPhrase.textContent = `${partOne}-${partTwo}`;
    return engPhrase.text;
  }

  function gen100to999Phrase(multTenIndex, lastDigit) {
    const lastTwoDigits = chopOffFirstDigit();
    const secondDigitPhrase = genMultipleOfTenPhrase(multTenIndex);
    const thirdDigitPhrase = genBaseNumPhrase(lastDigit);
    const partOne = `${genBaseNumPhrase(0)} hundred`;
    const partTwo = baseNums[lastTwoDigits] ? baseNums[lastTwoDigits] : `${secondDigitPhrase}-${thirdDigitPhrase}`;

    engPhrase.textContent = lastTwoDigits === '00' ? partOne : `${partOne} ${partTwo}`;
    return engPhrase.textContent;
  }

  function gen1000to9999Phrase() {
    const lastThreeDigits = chopOffFirstDigit();
    const partOne = `${genBaseNumPhrase(0)} thousand`;
    const partTwo = gen100to999Phrase(2, 3);

    engPhrase.textContent = lastThreeDigits === '000' ? partOne : `${partOne} ${partTwo}`;
    return engPhrase.textContent;
  }

  function convertNumToEngPhrase(e) {
    e.preventDefault();

    // Covers all hardcoded numbers 
    if (baseNums[number.value]) {
      engPhrase.textContent = baseNums[number.value];

    // Covers all non-harcoded numbers < 100 
    } else if (number.value.length === 2) {
      return genLessThan100Phrase();

    // Covers numbers 100 to 999 
    } else if (number.value.length === 3) {
      gen100to999Phrase(1, 2);

    // Covers numbers 1000 to 9999
    } else if (number.value.length === 4) {
      return gen1000to9999Phrase();
    }
  }

  form.addEventListener('submit', convertNumToEngPhrase, false);
};
